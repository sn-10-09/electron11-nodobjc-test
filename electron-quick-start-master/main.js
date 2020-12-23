// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const $ = require('nodobjc')

function callFramework() {
  $.import('Foundation');
  console.log('Imported Foundation ');

  try {
    let pathtoFramewok = `${__dirname}/framework/SampleFramework.framework`;
    $.import(pathtoFramewok);
    console.log('Importedframework');
  } catch (err) {
    console.log(err);
  }

  let _callback = $((output) => {
    console.log("inside electron callback", output);
  }, ['v', ['@']]);

  //Note : callback without arguments is working fine : 
  // let _callback = $(() => {
  //   console.log("inside electron callback");
  // }, ['v']); <-- This works fine, make appropriate changes in the framework code.

  try {
    let mystr = "Test Input";
    console.log("About to call testCallbackToElectron");
    $.SampleFramework('testCallbackToElectron', $(mystr), 'completion', _callback);
  } catch (err) {
    console.log("ELectron error = ", err);
  }

}
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
  callFramework();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
