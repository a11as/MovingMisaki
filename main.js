const path = require("path");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

let mainWindow = null;
const WINDOW_CONF = {
  width: 400,
  height: 300,
  webPreferences: { 
    nodeIntegration: true,
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: true,
  },
  useContentSize: true,
  frame: false,
  transparent: true,
  hasShadow: true,
  alwaysOnTop: true
}

app.on('ready', () => {

  mainWindow = new BrowserWindow(WINDOW_CONF);
  mainWindow.setSize(electron.screen.getPrimaryDisplay().workAreaSize.width+20, 300);
  mainWindow.setPosition(-10, electron.screen.getPrimaryDisplay().workAreaSize.height-280);
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

});

ipcMain.on("quit", (event, arg) => {
  mainWindow.destroy();
});
