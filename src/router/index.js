'use strict'

import { createRouter, createWebHashHistory } from 'vue-router'

import Frutas from './../components/Frutas/Index'
import Nomes from './../components/Nomes/Index'

export default createRouter({
  history: createWebHashHistory(),
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
