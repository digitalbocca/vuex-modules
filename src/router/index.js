'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import Frutas from './../components/Frutas/Index'
import Nomes from './../components/Nomes/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/frutas',
      name: 'Frutas',
      component: Frutas
    },
    {
      path: '/nomes',
      name: 'Nomes',
      component: Nomes
    }
  ]
})
