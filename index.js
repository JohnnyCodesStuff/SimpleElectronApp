const { app, BrowserWindow } = require("electron");

app.whenReady().then(()=>{
  const window = new BrowserWindow({
  width: 1000,
  height: 850,
  autoHideMenuBar: true
  });
  window.loadFile("src/index.html");
})