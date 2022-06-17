<template>
  <section
    class="gallery general-container"
  >
    <div>
      <h2>Gallery</h2>
      <GallerySection
        v-for="(c, i) in galleryData"
        :key="`section_${i}`"
        :content-prop="c"
        :level="0"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.gallery
  overflow-x: visible
  > div
    margin: calc($mtl-pad * -1) calc($mtl-pad * -1) 0 calc($mtl-pad * -2)
    overflow-y: scroll
    height: calc(100% + $mtl-pad * 2)
    > h2,
    > section
      margin: calc($mtl-pad * 2)
</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GallerySectionContainer',
  props: {
    galleryData: {
      type: Array,
      required: true,
    },
  },
  setup () {

  },
})
</script>
