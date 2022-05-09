<template>
  <header>
    <h1>
      {{ title }}
    </h1>
  </header>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

header
  background-color: $brand-dark-a
  h1
    color: $brand-bright-a
  a
    color: $brand-medium-a
    &:after
      background-color: $brand-medium-a
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
})
</script>
