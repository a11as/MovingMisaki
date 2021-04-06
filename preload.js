const { contextBridge, ipcRenderer} = require("electron")
const fs = require('fs')

contextBridge.exposeInMainWorld(
  "requires", {
    ipcRenderer : ipcRenderer,
  }
);