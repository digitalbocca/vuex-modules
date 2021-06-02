<template lang="pug">
.container#app
  h1 Módulos do Vuex
  p {{ app }}
  p Abaixo dos botões é conteúdo recebido dos módulos
  p
    button.btn(@click="goto('/frutas')") Lista de Frutas
    button.btn(@click="goto('/nomes')") Lista de Nomes
  router-view
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['app'])
  },
  methods: {
    goto (slug) {
      this.$router.push(slug)
    }
  }
}
</script>
