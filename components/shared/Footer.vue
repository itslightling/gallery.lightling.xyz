<template>
  <footer>
    <p>&copy; Lightling 2014-2022. All Rights Reserved.</p>
    <p>
      <a
        href="#"
      > Back To Top </a>
    </p>
  </footer>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

footer
  background-color: $brand-dark-a
  padding: 2rem 4rem
  text-align: center
  p
    color: $brand-bright-a
  a
    color: $brand-medium-a
    &:after
      background-color: $brand-medium-a
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Footer',
})
</script>
