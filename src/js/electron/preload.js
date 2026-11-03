function start() {
  // const { contextBridge } = require('electron/renderer')
  const path = require('path');

  require('../../js/unpack/module-fallback.js')

  const ipcRenderer = require('electron').ipcRenderer;
  const config = require('../../js/75af41e5efc446b4889226abf05d39c1.js')

  function directRequire(filePath) {
    console.error('directRequire', __dirname, filePath)
    if (filePath.startsWith('./')
      || filePath.startsWith('../')) {
      const from = new Error().stack?.split('\n')[2] || ''
      console.error(from)
      const reg = /\(([./a-zA-Z]*):\d*:\d*\)/
      console.error()
      const match = from.match(reg)?.[1] || ''
      if (match) {
        const paths = match.split('/')
        const split = filePath.split('/')
        let depth = 1
        for (const item of split) {
          if (item === '..') {
            depth++
            continue
          }

          if (item === '.') {
            continue
          }
          break
        }

        filePath = [...paths.splice(0, paths.length - depth), filePath.replace(/^([.]{1,2}\/)*/, '')].join('/')
        console.error(filePath)
      }
    }

    return require(filePath)
  }

  // 给 inline <script> 用：从 preload 自己的 __dirname 解析入口模块路径，
  // 避开 renderer_init 上 require 解析根错误的问题
  Object.defineProperty(window, '__loadEntry', {
    writable: false,
    value: (relPath) => {
      const abs = path.resolve(__dirname, relPath)
      // eslint-disable-next-line
      return require(abs)
    },
  })
  
  Object.defineProperty(global, 'directRequire', {
    writable: false,
    value: directRequire,
  })

  Object.defineProperty(window, 'directRequire', {
    writable: false,
    value: directRequire,
  })

  const currentAppPath = process.env.ELECTRON_ACTIVE_APP_PATH
    || process.env.ELECTRON_BASE_APP_PATH
    || path.resolve(__dirname, '..', '..')

  // installAsarBoundaryModulePathFix(currentAppPath)

  try {
    const { maybeInstallAutotestGlobals } = require('../../js/f4ab098d9d0c455f5b25aeb5fe6070bd.js')
    maybeInstallAutotestGlobals(ipcRenderer, config, window)
  } catch (e) {
    console.error('maybeInstallAutotestGlobals error', e)
  }

  // contextIsolation: false; preload 和 webContent 的 window 是共享的
  window.nw = {
    App: {
      argv: [],
      _dataPath: '',
      getDataPath: () => {
        if (!this._dataPath) {
          this._dataPath = ipcRenderer.sendSync('nw.App.getDataPath')
        }
        return this._dataPath
      },
      getProxyForURL: () => {
        console.error('nw.App.getProxyForURL', 'not exist')
        return 'DIRECT'
      },
      manifest: {
        get name() {
          console.error('nw.App.manifest.name', 'not exist')
          return '微信开发者工具'
        }
      }
    },
  }

  window.appVersion = ipcRenderer.sendSync(config.SYNC_CALL_MAIN, config.SYNC_FUNC_NAME.APP_GET_VERSION)
  window.appVersionType = ipcRenderer.sendSync(config.SYNC_CALL_MAIN, config.SYNC_FUNC_NAME.APP_GET_VERSION_TYPE)
  function isAboutBlank() {
    // 只有真实落到主文档（file:// 等）的主 frame 里，preload才需要做这堆 hack
    console.log(window.location.protocol)
    const protocol = (window.location && window.location.protocol)
    || ''
    const isRealDoc = protocol === 'file:' || protocol === 'http:'
    || protocol === 'https:'
    if (!isRealDoc) {
      console.log('isNotReadDoc')
      return true
    } else {
      console.log('isReadDoc')
      return false
    }
  }

  window.ls = require('../../js/e90b7cb007787228bc8fe5535731b603.js')

  window.onClose = (function () {
    const handlers = []
    let registered = false
    return function (callback) {
      handlers.push(callback)
      if (!registered) {
        ipcRenderer.send(config.ASYNC_CALL_MAIN, config.ASYNC_FUNC_NAME.WINDOW_ON_CLOSE)
        ipcRenderer.on(config.WINDOW_WILL_BE_CLOSE, function (event, arg) {
          let result = true
          for (const fn of handlers) {
            if (fn() === false) {
              result = false
            }
          }
          ipcRenderer.send(config.ASYNC_CALL_MAIN, config.ASYNC_FUNC_NAME.WINDOW_DESTROY, result)
        })
        registered = true
      }
    }
  })()


  Object.defineProperty(window, 'minimize', {
    writable: false,
    value: () => {
      ipcRenderer.send(config.ASYNC_CALL_MAIN, config.ASYNC_FUNC_NAME.WINDOW_MINIMIZE)
    },
  })

  Object.defineProperty(window, 'setResizable', {
    writable: false,
    value: (resizable) => {
      return ipcRenderer.sendSync(config.SYNC_CALL_MAIN, config.SYNC_FUNC_NAME.WINDOW_SET_RESIZABLE, resizable)
    },
  })

  Object.defineProperty(window, 'setBounds', {
    writable: false,
    value: (bounds) => {
      const formatedBounds = {}
      for (const key in bounds) {
        formatedBounds[key] = Math.floor(bounds[key])
      }
      return ipcRenderer.sendSync(config.SYNC_CALL_MAIN, config.SYNC_FUNC_NAME.WINDOW_SET_BOUNDS, formatedBounds)
    },
  })

  Object.defineProperty(window, 'getBounds', {
    writable: false,
    value: (bounds) => {
      return ipcRenderer.sendSync(config.SYNC_CALL_MAIN, config.SYNC_FUNC_NAME.WINDOW_GET_BOUNDS)
    },
  })

  const emittedOnce = (element, eventName) => new Promise(resolve => {
    element.addEventListener(eventName, event => resolve(event), { once: true })
  })

  Object.defineProperty(window, 'openDevTools', {
    writable: false,
    value: (browserView, devtoolsView) => {
      if (!browserView
        && !devtoolsView) {
        ipcRenderer.send(config.ASYNC_CALL_MAIN, config.ASYNC_FUNC_NAME.OPEN_DEVTOOLS)
        return
      }
      const browserReady = emittedOnce(browserView, 'dom-ready')
      const devtoolsReady = emittedOnce(devtoolsView, 'dom-ready')
      Promise.all([browserReady, devtoolsReady]).then(() => {
        const targetId = browserView.getWebContentsId()
        const devtoolsId = devtoolsView.getWebContentsId()
        ipcRenderer.send(config.ASYNC_CALL_MAIN, config.ASYNC_FUNC_NAME.OPEN_DEVTOOLS, targetId, devtoolsId)
      })
    }
  })

  Object.defineProperty(window, 'setTitle', {
    writable: false,
    value: (title) => {
      return ipcRenderer.send(config.ASYNC_CALL_MAIN, config.ASYNC_FUNC_NAME.WINDOW_SET_TITLE, title)
    },
  })

  window.getWebContentsId = (function() {
    const readyMap = new WeakMap();
    return async function(webview) {
      if (!webview) return undefined;
      try {
        if (webview.isConnected && typeof webview.getWebContentsId === 'function') {
          const id = webview.getWebContentsId();
          if (id) return id;
        }
      } catch (e) {}

      if (readyMap.has(webview)) {
        return readyMap.get(webview);
      }

      const p = new Promise((resolve) => {
        let settled = false;
        const done = () => {
          if (settled) return;
          settled = true;
          webview.removeEventListener('dom-ready', done);
          try {
            resolve(webview.getWebContentsId());
          } catch (err) {
            resolve(undefined);
          }
        };
        webview.addEventListener('dom-ready', done, { once: true });
        setTimeout(done, 2500);
      });
      readyMap.set(webview, p);
      return p;
    };
  })();

  try {
    const patchWebviewProto = (proto) => {
      if (!proto || proto.__patched_safety__) return;
      proto.__patched_safety__ = true;
      const origGetId = proto.getWebContentsId;
      if (typeof origGetId === 'function') {
        proto.getWebContentsId = function() {
          try {
            return origGetId.apply(this, arguments);
          } catch (err) {
            if (err && err.message && err.message.includes('The WebView must be attached to the DOM')) {
              return undefined;
            }
            throw err;
          }
        };
      }
      const origSend = proto.send;
      if (typeof origSend === 'function') {
        proto.send = function(...args) {
          try {
            return origSend.apply(this, args);
          } catch (err) {
            if (err && err.message && err.message.includes('The WebView must be attached to the DOM')) {
              return;
            }
            throw err;
          }
        };
      }
    };
    if (typeof HTMLWebViewElement !== 'undefined') {
      patchWebviewProto(HTMLWebViewElement.prototype);
    }
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof HTMLWebViewElement !== 'undefined') {
        patchWebviewProto(HTMLWebViewElement.prototype);
      }
    });
  } catch (e) {}


  let _winId
  let _browserWinId
  function getWindowId() {
    return new Promise((resolve) => {
      ipcRenderer.on(config.MAIN_TO_BROWSER_WINDOW_HELLO, (e, winId, browserWindowId) => {
        _winId= winId
        _browserWinId = browserWindowId
        resolve(winId)
      })
    })
  }

  const getWindowIdPromise = getWindowId()

  Object.defineProperty(window, 'webContentId', {
    writable: false,
    value: ipcRenderer.sendSync(config.BROWSER_WINDOW_HELLO)
  })

  Object.defineProperty(window, 'getWindowId', {
    writable: false,
    value: async () => {
      await getWindowIdPromise
      return _winId
    },
  })

  Object.defineProperty(window, 'getBrowserWindowId', {
    writable: false,
    value: async () => {
      await getWindowIdPromise
      return _browserWinId
    },
  })

  class Messager {
    _fnList = []
    _pendingData = []

    constructor() {
      ipcRenderer.on(config.MAIN_POST_MESSAGE_TO_BROWSER_WINDOW, (e, data) => {
        if (this._fnList.length === 0) {
          this._pendingData.push(data)
          return
        }
        this._fnList.forEach((fn) => {
          try {
            fn(data)
          } catch (e) {}
        })
      })
    }

    onMessage(fn) {
      this._fnList.push(fn)
      if (this._pendingData.length > 0) {
        const pendingData = [...this._pendingData]
        this._pendingData = []
        pendingData.forEach((data) => {
          try {
            fn(data)
          } catch (e) {}
        })
      }
    }

    off(fn) {
      this._fnList = this._fnList.filter(item => item !== fn)
    }

    send(data) {
      if (_winId) {
        ipcRenderer.send(config.ON_BROWSER_WINDOW_MESSGAE, _winId, data)
        return
      }
      getWindowIdPromise.then((winId) => {
        ipcRenderer.send(config.ON_BROWSER_WINDOW_MESSGAE, winId, data)
      })
    }
  }

  Object.defineProperty(window, 'Messager', {
    writable: false,
    value: new Messager()
  })


  Object.defineProperty(window, 'app', {
    writable: false,
    value: Object.freeze({
      getPath: (function () {
        const _dataPath = {}
        return (type) => {
          if (!_dataPath[type]) {
            _dataPath[type] = ipcRenderer.sendSync(config.SYNC_CALL_MAIN, config.SYNC_FUNC_NAME.APP_GETPATH, type)
          }
          return _dataPath[type]
        }
      })()
    })
  })
}

function emitPreloadReady() {
  console.log('emitPreloadReady')
  if (typeof window.__preloadReadyFunc === 'function') {
    window.__preloadReadyFunc()
  }
}

function isRealDocFunc() {
  const protocol = (window.location && window.location.protocol) || ''
  const isRealDoc = protocol === 'file:'
    || protocol === 'http:'
    || protocol === 'https:'
    || protocol === 'devtools:'
  
  console.log('isRealDoc', isRealDoc)
  return isRealDoc
}

window.__haspreload = true
if (isRealDocFunc()) {
  start()
  window.__preloadReady = true
  emitPreloadReady()
} else {
  var ctn = 0
  var i = setInterval(() => {
    ctn++
    if (isRealDocFunc()) {
      clearInterval(i)
      start()
      window.__preloadReady = true
      emitPreloadReady()
    }
    if (ctn > 50) {
      clearInterval(i)
      console.error('cant init preload in right window protocal')
    }
  }, 100)
}