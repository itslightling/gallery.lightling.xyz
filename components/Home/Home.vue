<template>
  <div
    class="content"
    :style="`background-image: url(${backgroundImage}); background-position: ${backgroundPosition}`"
  >
    <div
      class="filter fixed"
    />
    <main
      class="fixed"
    >
      <div
        id="avatar"
      >
        <span>{{ contentUtility.avatarLabel }}</span>
      </div>
      <div>
        <h1>{{ contentUtility.heading }}</h1>
      </div>
      <div
        id="galleries"
        class="links"
      >
        <GalleryLink
          v-for="(gallery, i) in galleries"
          :key="`gallery_${i}`"
          :gallery="gallery"
          @click="gallery.warn
            ? setAndWarn(gallery.id)
            : setAndGo(gallery.id)"
        />
        <GalleryLinkWarning
          v-if="popupActive"
          @disable="disablePopup()"
          @acknowledge="goToGallery()"
        />
      </div>
      <div
        id="about"
      >
        <p
          v-for="(c, i) in contentAbout"
          :key="`about_${i}`"
          v-html="c"
        />
      </div>
      <div
        id="social"
        class="links"
      >
        <SocialIconLink
          v-for="(c, i) in contentSocial"
          :key="`social_${i}`"
          :src="c.src"
          :title="c.title"
          :href="c.href"
        />
      </div>
      <div
        id="footer"
      >
        <p>{{ contentUtility.copyright }}</p>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.content
  background-color: $brand-light-a
  background-size: cover
  height: 100vh
  width: 100vw
  overflow: hidden
  .fixed
    position: fixed
    top: 0
    right: 0
    bottom: 0
    width: 36rem
    background-color: transparentize($brand-light-a, 0.5)
  .filter
    backdrop-filter: blur(8px) brightness(40%)
  main
    overflow-y: scroll
    display: grid
    justify-items: center
    align-items: center
    grid-gap: calc($mtl-pad * 2)
    padding: calc($mtl-pad * 2) 0
    #avatar
      position: relative
      background-image: url('/images/v1-official.svg')
      background-size: cover
      background-position: center center
      background-color: $brand-bright-a
      height: 12rem
      width: 12rem
      border-radius: $mtl-round
      span
        color: $brand-bright-a
        position: absolute
        bottom: 0
        left: 0
        right: 0
        text-align: center
        font-size: 1.25rem
        padding: calc($mtl-pad / 2) 0
        background-color: #000a
        border-radius: 0 0 $mtl-round $mtl-round
    .links
      display: grid
      grid-gap: $mtl-pad
    #galleries
      grid-template-columns: repeat(2, 1fr)
      width: 90%
    #social
      width: 90%
    div
      h1
        font-size: 2rem
        margin: calc($mtl-pad * 2) 0
      p
        font-size: 1.2rem
        max-width: 24rem
        margin: calc($mtl-pad * 2) auto
.dark
  .content
    background-color: $brand-dark-a
    .fixed
      background-color: transparentize($brand-dark-a, 0.5)

@media screen and (orientation: portrait)
  .content
    .fixed
      width: 90vw
      padding: 0 1rem
      left: calc(5vw - 1rem)
      right: calc(5vw - 1rem)
      #galleries
        grid-template-columns: repeat(1, 1fr)
        width: 100%

@media screen and (max-width: 420px)
  .content
    .fixed
      width: 95vw
      left: calc(2.5vw - 1rem)
      right: calc(2.5vw - 1rem)
      #social
        grid-template-columns: repeat(3, 6rem)
        width: 100%
        justify-content: center
</style>

<script lang="ts" setup>
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent, ref,
} from '@vue/composition-api'

import GalleryLink from './GalleryLink.vue'
import GalleryLinkWarning from './GalleryLinkWarning.vue'
import SocialIconLink from '~/components/shared/SocialIconLink.vue'
import {
  About, Social, Utility,
} from '~/content/Home'

import Defines from '~/defines'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'Home',
  components: {
    GalleryLink,
    GalleryLinkWarning,
    SocialIconLink,
  },
  setup () {
    const currentTarget = ref('')
    const popupActive = ref(false)
    const contentAbout = ref(About)
    const contentSocial = ref(Social)
    const contentUtility = ref(Utility)

    return {
      contentAbout,
      contentUtility,
      contentSocial,
      currentTarget,
      popupActive,
    }
  },
  data () {
    return {
      backgroundImage: '',
      backgroundPosition: 'center center',
      galleries: [],
    }
  },
  mounted () {
    fetch(`${Defines.galleryDataIndexLocation}`, {
      mode: 'cors',
    })
      .then((response) => response.json())
      .then((data) => {
        const i = Math.floor(Math.random() * data.featured.length)
        this.backgroundImage = `${Defines.galleryDataLocation}/${data.featured[i].img}`
        this.backgroundPosition = data.featured[i].position
        this.galleries = data.content
      })
    if (this.$store.state.store.darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  },
  methods: {
    disablePopup () {
      this.popupActive = false
    },
    setAndWarn (id: string) {
      this.currentTarget = id
      this.popupActive = true
    },
    setAndGo (id: string) {
      this.currentTarget = id
      this.goToGallery()
    },
    goToGallery () {
      this.$router.push({
        path: `/gallery/${this.currentTarget}`,
      })
    },
  },
})
</script>
