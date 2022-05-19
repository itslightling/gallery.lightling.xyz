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
        <p>LightGallery | Home</p>
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
</style>

<script lang="ts" setup>
import Vue from 'vue'
import VueCompositionAPI, { defineComponent, ref } from '@vue/composition-api'

import GalleryLink from './GalleryLink.vue'
import GalleryLinkWarning from './GalleryLinkWarning.vue'
import Footer from '~/components/shared/Footer.vue'
import Header from '~/components/shared/Header.vue'
import SocialIconLink from '~/components/shared/SocialIconLink.vue'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'Home',
  components: {
    GalleryLink,
    GalleryLinkWarning,
    Footer,
    Header,
    SocialIconLink,
  },
  setup () {
    const currentTarget = ref('')
    const popupActive = ref(false)

    const goToGallery = () => {
      switch (currentTarget.value) {
        case 'traditional':
          location.href = 'gallery/traditional'
          break
        case 'digital':
          location.href = 'gallery/digital'
          break
        case 'photography':
          location.href = 'gallery/photo'
          break
        case 'anthro':
          location.href = 'gallery/anthro'
          break
      }
    }

    const setAndGo = (title: string) => {
      currentTarget.value = title
      goToGallery()
    }

    const setAndWarn = (title: string) => {
      currentTarget.value = title
      popupActive.value = true
    }

    const disablePopup = () => {
      popupActive.value = false
    }

    return {
      currentTarget,
      popupActive,
      goToGallery,
      setAndGo,
      setAndWarn,
      disablePopup,
    }
  },
})
</script>
