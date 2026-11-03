const crypto = require('crypto')
const fs = require('fs')
const Module = require('module')
const path = require('path')

const DEV_DATA_DIR_HASH = '111111111111111111111111111111111'
const MIGRATION_MARKER = '.migrated-from-temp-derive'

function isDev() {
  const _isDev = !!process?.execPath.match('Electron.app')
  const _isWinDev = !!process?.execPath.match('electron.exe')
  const _isLinuxDev = !!process?.execPath.match(/electron$/i)
  const _isEnvDev = process.env.NODE_ENV === 'development' || !!process.env.DEV_MODE
  return _isDev || _isWinDev || _isLinuxDev || _isEnvDev
}

function setBaseAppEnv(baseAppPath) {
  // 安装包自带的 app 路径。即使后面切到热更新 app.asar，这个路径也保持不变。
  const baseAppDir = path.dirname(baseAppPath)
  process.env.ELECTRON_BASE_APP_PATH = baseAppPath
  process.env.ELECTRON_BASE_APP_DIR = baseAppDir
  return {
    baseAppPath,
    baseAppDir,
  }
}

function getDataDirHash(app, baseAppPath) {
  if (isDev()) {
    return DEV_DATA_DIR_HASH
  }
  const md5sum = crypto.createHash('md5')
  md5sum.update(baseAppPath)
  return md5sum.digest('hex')
}

function getLegacyLocalDataPathFromTemp(app) {
  return path.normalize(path.join(app.getPath('temp'), '..', app.getName(), 'User Data'))
}

function getLocalDataPath(app) {
  if (process.platform === 'win32') {
    // 与 tools.ts getLocalDataPath 保持一致
    return path.join(app.getPath('home'), 'AppData', 'Local', app.getName(), 'User Data')
  }
  return app.getPath('userData')
}

function getMigrationMarkerPath(newDataPath) {
  return path.join(newDataPath, MIGRATION_MARKER)
}

function removeIncompleteStaging(stagingPath) {
  if (!fs.existsSync(stagingPath)) {
    return
  }
  if (fs.existsSync(path.join(stagingPath, MIGRATION_MARKER))) {
    return
  }
  fs.rmSync(stagingPath, { recursive: true, force: true })
}

function migrateDataDirFromLegacyTempPath(app, dataDirHash) {
  if (process.platform !== 'win32') {
    return
  }

  const newRoot = getLocalDataPath(app)
  const newDataPath = path.join(newRoot, dataDirHash)
  const markerPath = getMigrationMarkerPath(newDataPath)

  if (fs.existsSync(markerPath)) {
    return
  }

  const legacyRoot = getLegacyLocalDataPathFromTemp(app)
  if (path.normalize(legacyRoot) === path.normalize(newRoot)) {
    return
  }

  const legacyDataPath = path.join(legacyRoot, dataDirHash)
  if (!fs.existsSync(legacyDataPath)) {
    return
  }

  const stagingPath = path.join(newRoot, `.migrating-${dataDirHash}`)
  const stagingMarkerPath = path.join(stagingPath, MIGRATION_MARKER)

  if (fs.existsSync(stagingPath)
    && fs.existsSync(stagingMarkerPath)
    && !fs.existsSync(newDataPath)) {
    try {
      fs.renameSync(stagingPath, newDataPath)
      fs.rmSync(legacyDataPath, { recursive: true, force: true })
      console.log('[devtools] migrated user data from legacy temp-derived path')
      return
    } catch (err) {
      console.error('[devtools] failed to finalize staged user data migration:', err)
      return
    }
  }

  removeIncompleteStaging(stagingPath)

  try {
    fs.mkdirSync(newRoot, { recursive: true })
    try {
      fs.renameSync(legacyDataPath, newDataPath)
      fs.writeFileSync(markerPath, legacyDataPath, 'utf8')
      console.log('[devtools] migrated user data from legacy temp-derived path')
      return
    } catch (err) {
      removeIncompleteStaging(stagingPath)
      fs.cpSync(legacyDataPath, stagingPath, { recursive: true })
      fs.writeFileSync(stagingMarkerPath, legacyDataPath, 'utf8')
      fs.renameSync(stagingPath, newDataPath)
      fs.rmSync(legacyDataPath, { recursive: true, force: true })
      console.log('[devtools] migrated user data from legacy temp-derived path')
    }
  } catch (err) {
    removeIncompleteStaging(stagingPath)
    console.error('[devtools] failed to migrate user data from legacy path:', err)
  }
}

function getDataPaths(app, baseAppPath) {
  const dataDirHash = getDataDirHash(app, baseAppPath)
  if (!isDev()) {
    migrateDataDirFromLegacyTempPath(app, dataDirHash)
  }
  const dataPath = path.join(getLocalDataPath(app), dataDirHash)
  return {
    dataDirHash,
    // 工具数据根目录：<userData>/<productHash>
    dataPath,
    // NW 兼容层里的默认 profile 目录：<dataPath>/Default
    defaultDataPath: path.join(dataPath, 'Default'),
    // 热更新代码目录，里面维护 active.json、versions、update.lock
    weappCodePath: path.join(dataPath, 'WeappCode'),
  }
}

function readActiveInfo(weappCodePath) {
  try {
    const activeFile = path.join(weappCodePath, 'active.json')
    if (!fs.existsSync(activeFile)) {
      return null
    }
    const data = JSON.parse(fs.readFileSync(activeFile, 'utf8'))
    return data || null
  } catch (e) {
    return null
  }
}

function writeActiveInfo(weappCodePath, info) {
  try {
    const activeFile = path.join(weappCodePath, 'active.json')
    const tempFile = `${activeFile}.tmp`
    fs.writeFileSync(tempFile, JSON.stringify(info))
    fs.renameSync(tempFile, activeFile)
  } catch (e) {
    // ignore active.json update errors
  }
}

function resolveVersionPath(weappCodePath, version) {
  if (!version) {
    return ''
  }
  const activeDir = path.join(weappCodePath, 'versions', `${version}`)
  const readyFile = path.join(activeDir, 'ready')
  const asarPath = path.join(activeDir, 'app.asar')
  if (!fs.existsSync(readyFile)) {
    return ''
  }
  if (!fs.existsSync(asarPath)) {
    return ''
  }
  return asarPath
}

function resolveActiveAppPath(weappCodePath) {
  const activeInfo = readActiveInfo(weappCodePath) || {}
  const updateLock = path.join(weappCodePath, 'update.lock')
  const hasLock = fs.existsSync(updateLock)
  // 当前准备启动的热更新包 app.asar
  const activePath = resolveVersionPath(weappCodePath, activeInfo.version)
  // 失败回退时使用的上一个可用版本 app.asar
  const fallbackPath = resolveVersionPath(weappCodePath, activeInfo.lastKnownGood)

  if (hasLock) {
    if (fallbackPath) {
      activeInfo.version = activeInfo.lastKnownGood
      activeInfo.updatedAt = Date.now()
      writeActiveInfo(weappCodePath, activeInfo)
    }
    try {
      fs.unlinkSync(updateLock)
    } catch (e) {
      // ignore lock cleanup errors
    }
    return {
      activeInfo,
      activeAppPath: fallbackPath,
    }
  }

  if (!activePath) {
    if (!fallbackPath) {
      return {
        activeInfo,
        activeAppPath: activePath,
      }
    }
    activeInfo.version = activeInfo.lastKnownGood
    activeInfo.updatedAt = Date.now()
    writeActiveInfo(weappCodePath, activeInfo)
    return {
      activeInfo,
      activeAppPath: fallbackPath,
    }
  }

  return {
    activeInfo,
    activeAppPath: activePath,
  }
}

function applyActiveAppPath(app, activeAppPath) {
  if (!activeAppPath) {
    delete process.env.ELECTRON_ACTIVE_APP_PATH
    delete process.env.ELECTRON_ACTIVE_APP_DIR
    return
  }

  // 命中热更新后，把运行时 appPath 切到 WeappCode/versions/<version>/app.asar
  app.setAppPath(activeAppPath)
  process.env.ELECTRON_ACTIVE_APP_PATH = activeAppPath
  process.env.ELECTRON_ACTIVE_APP_DIR = path.dirname(activeAppPath)
}

function setNodePath(baseNodeModules, ...extraPaths) {
  const existing = process.env.NODE_PATH ? process.env.NODE_PATH.split(path.delimiter) : []
  const unique = []
  for (const entry of [...existing, ...extraPaths, baseNodeModules]) {
    if (!entry) {
      continue
    }
    if (unique.includes(entry)) {
      continue
    }
    unique.push(entry)
  }
  process.env.NODE_PATH = unique.join(path.delimiter)
  Module._initPaths()
}

function installModuleFallback(fallbackDirs) {
  if (!fallbackDirs
    || fallbackDirs.length === 0) {
    return
  }
  process.env.ELECTRON_MODULE_FALLBACK_DIRS = fallbackDirs.join(path.delimiter)
  require('../js/unpack/module-fallback.js')
}

function bootstrapAppPaths(app) {
  const { baseAppPath, baseAppDir } = setBaseAppEnv(app.getAppPath())
  const dataPaths = getDataPaths(app, baseAppPath)
  const useHotUpdatePackages = !isDev()
  const {
    activeInfo,
    activeAppPath,
  } = useHotUpdatePackages
    ? resolveActiveAppPath(dataPaths.weappCodePath)
    : {
      activeInfo: {},
      activeAppPath: '',
    }

  applyActiveAppPath(app, activeAppPath)

  let appPath = app.getAppPath()
  if (appPath.endsWith(path.join('js', 'electron')) || !fs.existsSync(path.join(appPath, 'package.json'))) {
    const candidate = path.resolve(appPath, '../..')
    if (fs.existsSync(path.join(candidate, 'package.json'))) {
      appPath = candidate
      app.setAppPath(appPath)
    }
  }
  // 安装包自带的 node_modules，作为最终兜底。
  const baseNodeModules = path.join(baseAppPath, 'node_modules')
  const lastBigPackPath = useHotUpdatePackages && activeInfo.lastBigPackVersion
    ? resolveVersionPath(dataPaths.weappCodePath, activeInfo.lastBigPackVersion)
    : ''
  // 小包回退时可能还要借用上一个大包的 node_modules。
  const lastBigPackNodeModules = lastBigPackPath ? path.join(lastBigPackPath, 'node_modules') : ''

  setNodePath(
    baseNodeModules,
    // 当前运行中的 app.asar 对应 node_modules，优先级最高。
    activeAppPath ? path.join(appPath, 'node_modules') : '',
    lastBigPackNodeModules,
  )

  // 小包更新后，asar 内 node_modules 可能不完整，需要从大包、整包的 node_modules 里找。
  const fallbackDirs = [
    lastBigPackNodeModules,
    baseNodeModules,
  ].filter(Boolean)
  if (!isDev()) {
    installModuleFallback(fallbackDirs)
  }

  return {
    appPath,
    baseAppPath,
    baseAppDir,
    activeAppPath,
    activeInfo,
    appRequire: Module.createRequire(path.join(appPath, 'package.json')),
    ...dataPaths,
  }
}

function createNwCompat(defaultDataPath) {
  return {
    App: {
      argv: [],
      // 对齐 nw.App.getDataPath()，这里返回的是 <dataPath>/Default
      getDataPath: () => defaultDataPath,
      dataPath: defaultDataPath,
      manifest: {},
    },
  }
}

module.exports = {
  DEV_DATA_DIR_HASH,
  bootstrapAppPaths,
  createNwCompat,
  isDev,
}
