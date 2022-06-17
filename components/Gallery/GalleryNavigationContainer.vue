<template>
  <section
    class="gallery-nav general-container"
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
@import 'style/variables.sass'

ul::v-deep
  padding-left: 0
  font-size: $font-p
  list-style: none
  li
    ul
      list-style: none
      padding-left: $font-p
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
