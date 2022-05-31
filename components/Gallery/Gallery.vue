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
        <h1>{{ title }} Gallery</h1>
        <section
          class="gallery-nav"
        >
          <h2>Navigation</h2>
          <ul>
            <li
              v-for="section in galleryData"
              :key="section"
            >
              <a
                :href="toAnchorLink(section.id)"
              >
                {{ section.id }}
              </a>
              <ul
                v-if="section.subsections.length > 0"
              >
                <li
                  v-for="subsection in section.subsections"
                  :key="subsection"
                >
                  <a
                    :href="toAnchorLink(section.id + '_' + subsection.id)"
                  >
                    {{ subsection.id }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <!--<content-indicators></content-indicators>-->
        </section>
        <section
          v-if="showContentIndicator"
          class="content-key"
        >
          <h2>Content Level</h2>
          <p>No indicator = assume Safe</p>
          <ul>
            <li>
              <ContentIndicator
                indicator="Safe"
              />
              <span> Safe </span>
            </li>
            <li>
              <ContentIndicator
                indicator="Mature"
              />
              <span> Mature </span>
            </li>
            <li>
              <ContentIndicator
                indicator="Adult"
              />
              <span> Adult </span>
            </li>
          </ul>
        </section>
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
      </section>
    </main>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

main
  background-color: $brand-light-a
  padding: 2rem
  h2,
  h3,
  h4,
  h5
    margin-bottom: 1rem
  section
    margin: auto
  p,
  span,
  a
    font-size: 1.25rem

.content-key
  ul
    list-style: none
    padding-left: 0
    li
      margin: $mtl-round 0
      display: flex
      grid-gap: 0.5rem
      align-items: center
</style>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent,
  ref,
  reactive,
} from '@vue/composition-api'

import GallerySection from './GallerySection.vue'
import ContentIndicator from '~/components/shared/ContentIndicator.vue'
import Footer from '~/components/shared/Footer.vue'
import Header from '~/components/shared/Header.vue'

import Defines from '~/defines'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'Gallery',
  components: {
    GallerySection,
    ContentIndicator,
    Footer,
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
    const title = ref('loading')

    return {
      toAnchor,
      toAnchorLink,
      toImageLink,
      galleryData,
      title,
    }
  },
  data () {
    return {
      shouldRender: false,
      showContentIndicator: false,
    }
  },
  mounted () {
    const route = this.$route.path.replace('/gallery/', '')
    this.showContentIndicator = route === 'anthro' || route === 'digital'
    this.title = route.charAt(0).toUpperCase() + route.slice(1)
    fetch(`${Defines.galleryDataLocation}/${route}.json`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        this.galleryData = (data as any).sections
        this.shouldRender = true
      })
  },
})
</script>
