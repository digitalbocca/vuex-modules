<template lang="pug">
  p Aqui é Uma Lista de Nomes. Nada mais.
    span {{ app }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Nomes',
  computed: {
    ...mapGetters('Nomes', ['app'])
  }
}
</script>
