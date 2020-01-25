'use strict'

import Vue from 'vue'

import App from './../components/App'
import router from './../router'
import store from './../store'

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
