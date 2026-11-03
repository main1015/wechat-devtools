//! hackRequirePath
const fs = require('fs')
const path = require('path')

const bootstrap = require('./bootstrap');
const bootstrapNode = require('./bootstrap-node');

// Remove global paths from the node module lookup
bootstrapNode.removeGlobalNodeModuleLookupPaths();

// Enable ASAR in our forked processes
bootstrap.enableASARSupport();


// electron 对应的 node 为 22 有 navigator，会导致 vscode 的一些模块依赖判断 node 环境会有问题
try {
	delete global.navigator
} catch(e) {
	console.error(e)
}


//! hackRequire
const hackRequirePath = path.join(__dirname, '../../../unpack/hackrequire/index.js')
if (fs.existsSync(hackRequirePath)) {
	require(hackRequirePath)
}

//! moduleFallback
const moduleFallbackPath = path.join(__dirname, '../../../unpack/module-fallback.js')
if (fs.existsSync(moduleFallbackPath)) {
	require(moduleFallbackPath)
}

//! unhandledRejection
process.on('unhandledRejection', error => {
	// Will print "unhandledRejection err is not defined"
	console.error('[unhandledRejection]', error, error.message);
});

//! json.parse
// 为什么要用 json5 ？？
// try {
// 	const _jsonParse = JSON.parse.bind(JSON)
// 	global._jsonParse = _jsonParse
// 	const json5 = require('json5')
// 	JSON.parse = function (...args) {
// 		try {
// 			const result = json5.parse(...args)
// 			return result
// 		} catch (e) {
// 			console.error(e)
// 			return _jsonParse(...args)
// 		}
// 	}
// } catch (e) {
// 	console.warn('json5 hack failed')
// }

//@ts-check
'use strict';


// increase number of stack frames(from 10, https://github.com/v8/v8/wiki/Stack-Trace-API)
Error.stackTraceLimit = 100;

// Workaround for Electron not installing a handler to ignore SIGPIPE
// (https://github.com/electron/electron/issues/13254)
// @ts-ignore
process.on('SIGPIPE', () => {
	console.error(new Error('Unexpected SIGPIPE'));
});

// Configure: pipe logging to parent process
if (!!process.send && process.env.PIPE_LOGGING === 'true') {
	pipeLoggingToParent();
}

// Disable IO if configured
if (!process.env['VSCODE_ALLOW_IO']) {
	disableSTDIO();
}

// Handle Exceptions
if (!process.env['VSCODE_HANDLES_UNCAUGHT_ERRORS']) {
	handleExceptions();
}

// Terminate when parent terminates
if (process.env['VSCODE_PARENT_PID']) {
	terminateWhenParentTerminates();
}

// Configure Crash Reporter
configureCrashReporter();

// Load entry point
if (!process.env['AMD_ENTRYPOINT']){
	console.error('where is AMD_ENTRYPOINT')
}

if (
	!global.vsEditorConfig
	&& process.env['EDITOR_ROOT_PATH']
) {
	global.vsEditorConfig = {
		editorRootPath: process.env['EDITOR_ROOT_PATH'],
	}
}
// require(process.env['AMD_ENTRYPOINT']);
require('./bootstrap-amd').load(process.env['AMD_ENTRYPOINT']);
//#region Helpers

function pipeLoggingToParent() {
	const MAX_LENGTH = 100000;

	// Prevent circular stringify and convert arguments to real array
	function safeToArray(args) {
		const seen = [];
		const argsArray = [];

		let res;

		// Massage some arguments with special treatment
		if (args.length) {
			for (let i = 0; i < args.length; i++) {

				// Any argument of type 'undefined' needs to be specially treated because
				// JSON.stringify will simply ignore those. We replace them with the string
				// 'undefined' which is not 100% right, but good enough to be logged to console
				if (typeof args[i] === 'undefined') {
					args[i] = 'undefined';
				}

				// Any argument that is an Error will be changed to be just the error stack/message
				// itself because currently cannot serialize the error over entirely.
				else if (args[i] instanceof Error) {
					const errorObj = args[i];
					if (errorObj.stack) {
						args[i] = errorObj.stack;
					} else {
						args[i] = errorObj.toString();
					}
				}

				argsArray.push(args[i]);
			}
		}

		// Add the stack trace as payload if we are told so. We remove the message and the 2 top frames
		// to start the stacktrace where the console message was being written
		if (process.env.VSCODE_LOG_STACK === 'true') {
			const stack = new Error().stack;
			argsArray.push({ __$stack: stack.split('\n').slice(3).join('\n') });
		}

		try {
			res = JSON.stringify(argsArray, function (key, value) {

				// Objects get special treatment to prevent circles
				if (isObject(value) || Array.isArray(value)) {
					if (seen.indexOf(value) !== -1) {
						return '[Circular]';
					}

					seen.push(value);
				}

				return value;
			});
		} catch (error) {
			return 'Output omitted for an object that cannot be inspected (' + error.toString() + ')';
		}

		if (res && res.length > MAX_LENGTH) {
			return 'Output omitted for a large object that exceeds the limits';
		}

		return res;
	}

	/**
	 * @param {{ type: string; severity: string; arguments: string; }} arg
	 */
	function safeSend(arg) {
	  try {
	    if (process.send) {
	      process.send(arg);
	    }
	  } catch (error) {
	    // Can happen if the parent channel is closed meanwhile
	  }
	}

	function isObject(obj) {
		return typeof obj === 'object'
			&& obj !== null
			&& !Array.isArray(obj)
			&& !(obj instanceof RegExp)
			&& !(obj instanceof Date);
	}

	// Pass console logging to the outside so that we have it in the main side if told so
	if (process.env.VERBOSE_LOGGING === 'true') {
		console.log = function () { safeSend({ type: '__$console', severity: 'log', arguments: safeToArray(arguments) }); };
		console.info = function () { safeSend({ type: '__$console', severity: 'log', arguments: safeToArray(arguments) }); };
		console.warn = function () { safeSend({ type: '__$console', severity: 'warn', arguments: safeToArray(arguments) }); };
	} else {
		console.log = function () { /* ignore */ };
		console.warn = function () { /* ignore */ };
		console.info = function () { /* ignore */ };
	}

	console.error = function () { safeSend({ type: '__$console', severity: 'error', arguments: safeToArray(arguments) }); };
}

function disableSTDIO() {

	// const stdout, stderr and stdin be no-op streams. This prevents an issue where we would get an EBADF
	// error when we are inside a forked process and this process tries to access those channels.
	const stream = require('stream');
	const writable = new stream.Writable({
		write: function () { /* No OP */ }
	});

	function defineNoopStream(name) {
		const desc = Object.getOwnPropertyDescriptor(process, name);
		if (desc && desc.configurable === false) {
			return;
		}
		try {
			Object.defineProperty(process, name, {
				configurable: true,
				enumerable: true,
				get: function () { return writable; }
			});
		} catch (e) {
			try {
				process['__defineGetter__'](name, function () { return writable; });
			} catch (e2) {
				// ignore if we cannot override stdio in this runtime
			}
		}
	}

	defineNoopStream('stdout');
	defineNoopStream('stderr');
	defineNoopStream('stdin');
}

function handleExceptions() {

	// Handle uncaught exceptions
	// @ts-ignore
	process.on('uncaughtException', function (err) {
		console.error('Uncaught Exception: ', err);
	});

	// Handle unhandled promise rejections
	// @ts-ignore
	process.on('unhandledRejection', function (reason) {
		console.error('Unhandled Promise Rejection: ', reason);
	});
}

function terminateWhenParentTerminates() {
	const parentPid = Number(process.env['VSCODE_PARENT_PID']);

	if (typeof parentPid === 'number' && !isNaN(parentPid)) {
		setInterval(function () {
			try {
				process.kill(parentPid, 0); // throws an exception if the main process doesn't exist anymore.
			} catch (e) {
				process.exit();
			}
		}, 5000);
	}
}

function configureCrashReporter() {
	const crashReporterOptionsRaw = process.env['CRASH_REPORTER_START_OPTIONS'];
	if (typeof crashReporterOptionsRaw === 'string') {
		try {
			const crashReporterOptions = JSON.parse(crashReporterOptionsRaw);
			if (crashReporterOptions) {
				process['crashReporter'].start(crashReporterOptions);
			}
		} catch (error) {
			console.error(error);
		}
	}
}

//#endregion
