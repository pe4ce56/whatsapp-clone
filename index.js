const electron = require("electron");
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("./renderer/views/index.html");
};

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  // Windows: win32
  // MAC: darwin
  // Linux: linux
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
