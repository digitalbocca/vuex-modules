<template lang="pug">
  .frutas
    p Aqui é Uma Lista de Frutas. Nada mais.
    p Informação da Store: {{ getApp }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Frutas',
  computed: {
    ...mapGetters('Frutas', {getApp: 'app'})
  }
}
</script>
