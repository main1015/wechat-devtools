const path = require('path')
const fs = require('fs')
const { app, ipcMain, protocol } = require('electron/main')

if (process.platform === 'linux') {
  app.setName('wechat-devtools')
  if (app.setAppUserModelId) {
    app.setAppUserModelId('wechat-devtools')
  }
}

// 单例锁必须尽早申请：第二实例在此退出，避免继续初始化打出误导日志
const gotSingleInstanceLock = app.requestSingleInstanceLock()
if (!gotSingleInstanceLock) {
  console.log('[devtools] 已有运行中的实例，已唤起已有窗口，本次启动退出')
  app.quit()
} else {
  const {
    bootstrapAppPaths,
    createNwCompat,
    isDev,
  } = require('../../js/c47addee36149e53772b60ab7e158ffe.js')

  const {
    appPath,
    // appRequire：相对当前 appPath（含热更新 asar）解析，用于加载保留固定路径的入口
    // 普通 require：相对本文件目录解析；同目录模块可扁平化，构建时 replaceIndex 会改写成 hash
    appRequire,
    defaultDataPath,
    dataPath,
  } = bootstrapAppPaths(app)

  // urlschemes 会被扁平化，无稳定 js/electron/urlschemes 路径，不能用 appRequire
  const initURLSchemes = require('../../js/0fe7f92a1cd7a62cd65612f12ca36884.js').default

  console.log('appPath', appPath)

  // 为所有窗口自动注入微信开发者工具图标
  const defaultIconPath = path.join(appPath, 'static', 'image', 'logo.png')
  app.on('browser-window-created', (event, window) => {
    try {
      if (fs.existsSync(defaultIconPath)) {
        window.setIcon(defaultIconPath)
      }
    } catch (err) {
      console.warn('[devtools] setIcon failed:', err)
    }
  })

  // installAsarBoundaryModulePathFix(appPath)

  global.nw = createNwCompat(defaultDataPath)

  // 注册 URL scheme，业务处理会在 electron main 服务初始化完成后接入。
  protocol.registerSchemesAsPrivileged([
    {
      scheme: 'wechatide',
      privileges: {
        standard: true,
        secure: true,
        supportFetchAPI: true,
        allowServiceWorkers: true,
        corsEnabled: true,
      },
    },
  ])

  // Windows 下 Electron 默认 crashDumps 路径（Roaming）与项目 CrashPath（Local/<hash>）不一致，
  // 导致 Crashpad 写入的 dump 文件找不到。这里显式对齐到项目约定的目录。
  // 同时 chdir 到可写 userData：Chromium 写不进 Program Files 时会把 debug.log 回退到 CWD，
  // CLI 从项目目录拉起时会污染项目根。
  try {
    fs.mkdirSync(dataPath, { recursive: true })
    if (process.platform === 'win32') {
      app.setPath('crashDumps', path.join(dataPath, 'Crashpad'))
      process.chdir(dataPath)
    }
  } catch (err) {
    console.error('[devtools] ensure dataPath failed:', err)
  }

  let aegisInstance = null

  function initAegis() {
    try {
      const Aegis = require('@tencent/aegis-electron-sdk-v2')
      // import Aegis from '@tencent/aegis-electron-sdk-v2'; // import方式
      // 伽利略海外上报地址https://tgalileo.com/collect，如有需要可替换成这个地址
      const url = 'https://galileotelemetry.tencent.com/collect' // 伽利略上报地址，不变
      const id = 'SDK-c81600ac3b6143b4a29c' // 使用得到token
      // 在main主进程尽可能早的初始化注册Aegis实例
      aegisInstance = new Aegis({
        id, // 项目上报id，需要在智研或者伽利略平台申请id
        // uid: 'xxxx', // 用户唯一标识（可选），sdk已经默认收集uuid
        env: isDev() ? 'development' : 'production', // 环境，区分 dev 和 production
        hostUrl: url, // 上报域名，默认为伽利略https://galileotelemetry.tencent.com/collect。
        plugin: {
          processPerformance: true, // 性能，包括cpu和内存
          error: true, // 错误上报
          crash: true, // 崩溃上报
          session: true, // session串联
        },
        processPerformanceInterval: 2, // 性能上报时间间隔，单位分钟，默认5分钟
        networkInterval: 5, // 网络状态更新时间间隔，单位分钟，默认5分钟
      })
      // 挂到 global 上，供 main 进程其他模块（如 root.ts）在登录态变更时更新 uid
      global.__aegisMainInstance = aegisInstance
    } catch (err) {
      console.error('[initAegis] Failed to init Aegis SDK:', err)
    }
  }

  initAegis()

  initURLSchemes()

  // renderer 侧项目切换时推 appid 过来，存到 global 供 root.ts 的 updateAegisUid 带入 extField
  ipcMain.on('galileo:appid-changed', (event, appid) => {
    global.__aegisMainLastAppid = appid || ''
    // 如果此时已有 uid，立刻更新一次
    if (aegisInstance
      && global.__aegisMainLastUid) {
      try {
        aegisInstance.setConfig({
          uid: global.__aegisMainLastUid,
          extField: {
            nickName: global.__aegisMainLastNickName || '',
            appid: global.__aegisMainLastAppid,
          },
        })
      } catch (err) {
        console.error('[Aegis] galileo:appid-changed setConfig failed:', err)
      }
    }
  })

  app.whenReady().then(() => {
    try {
      console.log('[devtools] app whenReady triggered, loading electron.main...')
      // electron.main / mainexport 在 ignore 中保留固定路径，用 appRequire 锚定热更新后的 appPath
      appRequire('./js/electron/electron.main')

      const mainExport = appRequire('./js/electron/mainexport').default

      console.log('[devtools] executing mainExport...')
      mainExport()

      ipcMain.on('nw.App.getDataPath', (event) => {
        event.returnValue = global.nw.App.getDataPath()
      })
    } catch (err) {
      console.error('[devtools] CRITICAL ERROR in whenReady:', err)
    }
  }).catch((err) => {
    console.error('[devtools] whenReady rejection:', err)
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}
