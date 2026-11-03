const { contextBridge, ipcRenderer } = require('electron')
console.error('preload')

contextBridge.exposeInMainWorld('__global', {
  alert: (...args) => {
    ipcRenderer.sendSync('alert', ...args)
  },
  prompt: (...args) => {
    return ipcRenderer.sendSync('prompt', ...args)
  }
})


contextBridge.exposeInMainWorld('__messager__', {
  // todo 这里不能这样简单的暴露出去
  sendToHost(...args) {
    // ESpecialChannel.opened
    ipcRenderer.sendToHost(...args)
  },
  sendToMain(...args) {
    ipcRenderer.send(...args)
  },
})

