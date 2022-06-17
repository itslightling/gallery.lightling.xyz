<template>
  <div
    class="content"
  >
    <main>
      <div
        id="avatar"
      >
        <span>Lightling</span>
      </div>
      <div>
        <h1>LightGallery | Home</h1>
      </div>
      <div
        id="galleries"
        class="links"
      >
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
      <div>
        <p>
          I'm Lightling, a developer who creates art and music
          when I have the time.
        </p>
        <p>
          This site acts as a singular spot to link all of my art,
          which is hosted externally.
          Various galleries may have a different focus between themselves,
          so I have unified them here.
        </p>
      </div>
      <div
        id="social"
        class="links"
      >
        <SocialIconLink
          src="images/places/da.svg"
          title="Deviant Art"
          href="https://www.deviantart.com/xlightling"
        />
        <SocialIconLink
          src="images/places/rb.svg"
          title="Red Bubble"
          href="https://www.redbubble.com/people/lightling/shop?asc=u"
        />
        <SocialIconLink
          src="images/places/fa.svg"
          title="Fur Affinity"
          href="https://www.furaffinity.net/user/lightling/"
        />
      </div>
      <div
        id="footer"
      >
        <p>Copyright (C) Lightling 2014-2022</p>
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
      grid-template-columns: 1fr 1fr
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
</style>

<script lang="ts" setup>
import Vue from 'vue'
import VueCompositionAPI, { defineComponent, ref } from '@vue/composition-api'

import GalleryLink from './GalleryLink.vue'
import GalleryLinkWarning from './GalleryLinkWarning.vue'
import SocialIconLink from '~/components/shared/SocialIconLink.vue'

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

    return {
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
          this.$router.push({ path: 'gallery/traditional' })
          break
        case 'digital':
          this.$router.push({ path: 'gallery/digital' })
          break
        case 'photography':
          this.$router.push({ path: 'gallery/photo' })
          break
        case 'anthro':
          this.$router.push({ path: 'gallery/anthro' })
          break
      }
    },
  },
})
</script>
