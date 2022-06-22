<template>
  <button
    :id="gallery.id"
    :style="`background-image: url(${imageDataPath}/${gallery.preview})`"
    @click="$emit('click', gallery.id)"
  >
    <div>
      <span
        tabindex="-1"
        v-html="gallery.title"
      >
        {{ gallery.title }}
      </span>
    </div>
  </button>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

button
  height: 8rem
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
  border-radius: $mtl-round
  div
    border-radius: $mtl-round
    background-color: #000a
    padding: 1rem
    span
      font-size: 2rem
      color: $brand-light-a
</style>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent,
  ref,
} from '@vue/composition-api'

import Defines from '~/defines'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'GalleryLink',
  props: {
    gallery: {
      type: Object,
      required: true,
    },
  },
  setup () {
    const imageDataPath = ref(Defines.galleryDataLocation)

    return {
      imageDataPath,
    }
  },
})
</script>
