<template>
  <a
    :href="href"
  >
    <img
      :src="src"
      :alt="title + 'icon'"
      :title="title"
    />
  </a>
</template>

<style lang="sass" scoped>
a
  border-radius: 100%
  &::after
    display: none
  img
    max-width: 100%
    max-height: 100%
    &:hover
      opacity: 0.5
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
