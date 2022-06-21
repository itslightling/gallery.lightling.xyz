<template>
  <div>
    <Header
      :title="'LightGallery'"
      :subtitle="title + ' Gallery'"
    />
    <main>
      <section
        v-if="shouldRender"
        class="main"
      >
        <GalleryNavigationContainer
          :gallery-data="galleryData"
        />
        <GallerySectionContainer
          :gallery-data="galleryData"
        />
      </section>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.main
  display: flex
  flex-direction: row-reverse
  .gallery-nav
    flex: 0 0 12rem
    margin-left: 0
    height: calc(100vh - ($mtl-round * 12) - ($font-h1 * 2))
  .gallery
    flex: 1 1 100%
    height: calc(100vh - ($mtl-round * 8) - ($font-h1 * 2))

@media screen and (max-width: 800px)
  .gallery-nav
    display: none
</style>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent,
  ref,
  reactive,
} from '@vue/composition-api'

import GallerySectionContainer from './GallerySectionContainer.vue'
import GalleryNavigationContainer from './GalleryNavigationContainer.vue'
import Header from '~/components/shared/Header.vue'

import Defines from '~/defines'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'Gallery',
  components: {
    GallerySectionContainer,
    GalleryNavigationContainer,
    Header,
  },
  setup () {
    const toAnchor = (str: String) => {
      return str.replace(' ', '_')
    }

    const toAnchorLink = (str: String) => {
      return '#' + toAnchor(str)
    }

    const toImageLink = (str: String) => {
      return Defines.galleryDataLocation + '/' + str
    }

    const galleryData = reactive([])
    const navigation = reactive([])
    const title = ref('loading')

    return {
      toAnchor,
      toAnchorLink,
      toImageLink,
      galleryData,
      navigation,
      title,
    }
  },
  data () {
    return {
      shouldRender: false,
    }
  },
  mounted () {
    const route = this.$route.path.replace('/gallery/', '')
    this.title = route.charAt(0).toUpperCase() + route.slice(1)
    fetch(`${Defines.galleryDataLocation}/${route}.json`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        this.galleryData = (data as any).sections !== undefined
          ? (data as any).sections
          : (data as any).content
        this.shouldRender = true
      })
  },
})
</script>
