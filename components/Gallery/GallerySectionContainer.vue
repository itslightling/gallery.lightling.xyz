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
    overflow-y: scroll
    height: 100%
    > h2
      display: none
</style>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

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
