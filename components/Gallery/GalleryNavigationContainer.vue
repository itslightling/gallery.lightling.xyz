<template>
  <section
    class="gallery-nav"
  >
    <h2>Navigation</h2>
    <ul>
      <GalleryNavigation
        v-for="(c, i) in galleryData"
        :key="`nav_${i}`"
        :content-prop="c"
      />
    </ul>
    <!--<content-indicators></content-indicators>-->
  </section>
</template>

<style lang="sass" scoped>

</style>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GalleryNavigationContainer',
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
