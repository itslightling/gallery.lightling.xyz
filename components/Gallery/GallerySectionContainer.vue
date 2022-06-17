<template>
  <section
    class="gallery"
  >
    <h2>Gallery</h2>
    <GallerySection
      v-for="(c, i) in galleryData"
      :key="`section_${i}`"
      :content-prop="c"
      :level="0"
    />
  </section>
</template>

<style lang="sass" scoped>

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
