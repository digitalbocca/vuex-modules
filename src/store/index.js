'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

import Frutas from './../components/Frutas/store'
import Nomes from './../components/Nomes/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: 'Este conteúdo vem da store Central'
  },
  getters: {
    app (state) {
      return state.app
    }
  },
  modules: {
    Frutas,
    Nomes
  }
})
