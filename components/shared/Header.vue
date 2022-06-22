<template>
  <header
    class="general-container with-background"
  >
    <div>
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
      <p>Copyright (C) Lightling 2022</p>
    </div>
    <div>
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
  > div
    display: flex
    align-items: center
    justify-content: space-between
    &:nth-of-type(1)
      flex: 1 1 auto
    &:nth-of-type(2)
      margin-left: auto
  h1
    color: $brand-dark-b
  p
    margin-left: auto
    margin-right: 1rem

.dark
  header
    h1
      color: $brand-light-a

@media screen and (max-width: 920px)
  header
    h1
      font-size: 1.5rem
    p
      font-size: 1rem
@media screen and (max-width: 700px)
  header
    padding-top: calc($mtl-pad * 2 - 0.25rem) !important
    padding-bottom: calc($mtl-pad * 2 - 0.25rem) !important
    > div
      &:nth-of-type(1)
        flex-direction: column
        align-items: flex-start
      p
        margin: 0
@media screen and (max-width: 450px)
  header
    h1
      font-size: 1rem
</style>

<script>
import {
  defineComponent,
} from '@vue/composition-api'
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
      this.$router.push({
        path: e.target.pathname,
      })
    },
  },
})
</script>
