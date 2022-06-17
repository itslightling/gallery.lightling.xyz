<template>
  <header
    class="general-container"
  >
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
    <div>
      <p>Copyright (C) Lightling 2022</p>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

header
  margin-bottom: 0
  display: flex
  align-items: center
  justify-content: space-between
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
