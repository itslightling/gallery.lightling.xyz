<template>
  <div
    class="content"
  >
    <main>
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
        <!--
          TODO: Update API to allow for dynamic linking of galleries;
          essentially an index.json to match with gallery index.html (Home.vue)
        -->
        <GalleryLink
          element="traditional"
          @click="setAndGo('traditional')"
        />
        <GalleryLink
          element="digital"
          @click="setAndWarn('digital')"
        />
        <GalleryLink
          element="photography"
          @click="setAndGo('photography')"
        />
        <GalleryLink
          element="anthro"
          @click="setAndWarn('anthro')"
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
  background-image: url('/images/home/photography.jpg')
  background-size: cover
  background-position: center center
  height: 100vh
  width: 100vw
  overflow: hidden
  main
    background-color: $brand-light-a
    position: fixed
    right: 0
    top: 0
    bottom: 0
    width: 36rem
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
    main
      background-color: $brand-dark-a

@media screen and (orientation: portrait)
  .content
    main
      width: 90vw
      padding: 0 1rem
      left: calc(5vw - 1rem)
      right: calc(5vw - 1rem)
      #galleries
        grid-template-columns: repeat(1, 1fr)
        width: 100%

@media screen and (max-width: 420px)
  .content
    main
      width: 95vw
      left: calc(2.5vw - 1rem)
      right: calc(2.5vw - 1rem)
      #social
        grid-template-columns: repeat(3, 1fr)
        width: 100%
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
  methods: {
    disablePopup () {
      this.popupActive = false
    },
    setAndWarn (title: string) {
      this.currentTarget = title
      this.popupActive = true
    },
    setAndGo (title: string) {
      this.currentTarget = title
      this.goToGallery()
    },
    goToGallery () {
      switch (this.currentTarget) {
        case 'traditional':
          this.$router.push({
            path: 'gallery/traditional',
          })
          break
        case 'digital':
          this.$router.push({
            path: 'gallery/digital',
          })
          break
        case 'photography':
          this.$router.push({
            path: 'gallery/photo',
          })
          break
        case 'anthro':
          this.$router.push({
            path: 'gallery/anthro',
          })
          break
      }
    },
  },
})
</script>
