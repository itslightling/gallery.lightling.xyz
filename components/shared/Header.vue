<template>
  <header
    class="general-container with-background"
  >
    <h1>
      <span
        v-if="subtitle"
      >
        <a
          href="/"
          @click="redirectLink"
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
      <ThemeToggle />
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
  > div
    display: flex
    align-items: center
    grid-gap: $mtl-pad

.dark
  header
    h1
      color: $brand-light-a
</style>

<script>
import { defineComponent } from '@vue/composition-api'
import ThemeToggle from './ThemeToggle.vue'

export default defineComponent({
  name: 'Header',
  components: {
    ThemeToggle,
  },
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
  methods: {
    redirectLink (e) {
      e.preventDefault()
      this.$router.push({ path: e.target.pathname })
    },
  },
})
</script>
