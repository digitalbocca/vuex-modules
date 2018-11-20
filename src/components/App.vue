<template lang="pug">
  .container#app
    h1 Aqui Começa nossa Jornada pelo Vuex
    p {{ app }}
    p Daqui pra frente é conteúdo recebido pelo Router
    router-view/
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['app'])
  }
}
</script>
