<template>
  <header>
    <h1>
      <span
        v-if="subtitle"
      >
        <a
          href="/"
        >
          {{ title }}
        </a>
        / {{ subtitle }}
      </span>
      <span
        v-else
      >
        {{ title }}
      </span>
    </h1>
  </header>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

header
  margin: 2rem
  background-color: $brand-medium-a
  padding: 2rem 4rem
  text-align: center
  border-radius: 2rem
  h1
    color: $brand-dark-b
  a
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
    },
    subtitle: {
      type: String,
      default: undefined,
    },
  },
})
</script>
