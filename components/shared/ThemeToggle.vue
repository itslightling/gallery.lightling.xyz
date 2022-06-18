<template>
  <button
    id="theme-toggle"
    @click="onToggleTheme"
  />
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

button
  width: $font-h1
  height: $font-h1
  position: relative
  border: none
  background-color: transparent
  cursor: pointer
  &::after
    content: ""
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    mask: url('/images/moon.svg')
    -webkit-mask: url('/images/moon.svg')
    -webkit-mask-size: $font-h1
    background: $brand-dark-b

.dark
  button
    &::after
      background: $brand-light-a
</style>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({
  name: 'ThemeToggle',
  setup () {

  },
  methods: {
    onToggleTheme () {
      this.$store.commit('store/toggleDarkMode')
    },
  },
})
</script>
