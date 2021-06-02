'use strict'

import { createStore } from 'vuex'

import Frutas from './../components/Frutas/store'
import Nomes from './../components/Nomes/store'

const store = createStore({
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

export default store
