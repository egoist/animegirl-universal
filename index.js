var menubar = require('menubar')
var ipc = require('ipc')
var globalShortcut = require('global-shortcut')
var mb = menubar({
  width: 300,
  preloadWindow: true,
  tray: false,
  icon: './lib/img/icon.png'
})

mb.on('ready', function ready () {
  console.log('app is ready')
  var ret = globalShortcut.register('ctrl+shift+space', function () {
    mb.window.isVisible() ? mb.hideWindow() : mb.showWindow()
  })
})
