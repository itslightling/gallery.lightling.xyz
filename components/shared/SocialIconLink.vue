<template>
  <a
    :href="href"
  >
    <img
      :src="src"
      :alt="title + 'icon'"
      :title="title"
    />
    <span>{{ title }}</span>
  </a>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

a
  width: calc(100% - ($mtl-round * 2))
  border-radius: $mtl-round
  height: 4rem
  padding: $mtl-round
  display: flex
  align-items: center
  background-color: $brand-dark-a
  color: $brand-medium-a
  grid-gap: $mtl-round
  &:hover
    opacity: 0.5
  &:focus
    background-color: $brand-dark-b
  &::after
    display: none
  img
    height: 4rem
    width: 4rem
    flex: 0 0 4rem
  span
    flex: 1 1 auto
    font-size: 1.2rem
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'SocialIconLink',
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
})
</script>
