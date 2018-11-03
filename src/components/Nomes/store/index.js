'use strict'

export default {
  namespaced: true,
  state: {
    app: 'Esta informação está na Lista de Nomes'
  },
  getters: {
    app (state) {
      return state.app
    }
  }
}
