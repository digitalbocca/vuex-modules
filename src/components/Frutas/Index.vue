<template lang="pug">
  p Aqui é Uma Lista de Frutas. Nada mais.
    span Informação da Store: {{ getApp }}
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
