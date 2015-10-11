var menubar = require('menubar')

var mb = menubar({
  width: 300
})

mb.on('ready', function ready () {
  console.log('app is ready')
  // your app code here
})
