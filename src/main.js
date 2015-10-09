import Vue from 'vue'
import fetch from 'bgm-fetch'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

if (location.hostname === 'localhost') {
  Vue.config.debug = true
}

const router = new VueRouter()
router.map({
  '/': {
    component: require('./views/home')
  }
})


const App = Vue.extend(require('./app'))

router.start(App, '#app')