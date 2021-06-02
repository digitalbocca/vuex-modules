<template lang="pug">
.nomes
  p Aqui é Uma Lista de Nomes. Nada mais.
  p Informação da Store: {{ app }}
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
