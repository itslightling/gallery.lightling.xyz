<template>
  <div>
    <Header
      title="LightGallery"
    />
    <main>
      <section
        id="about"
      >
        <h2>About</h2>
        <p
          class="txt-lg"
        >
          Developer // Composer // Artist
        </p>
        <p>
          You're likely here for that last one. My art can be found in a variety
          of places:
        </p>
        <!-- TODO: APP ICONS -->
        <p>
          Here, however, you can find galleries for full-resolution/alternative
          versions for artwork that are not available on the above sites. If you
          wish to support my art (or my other work), please consider using my
          <a href="https://ko-fi.com/lightling">Ko-Fi</a> or buying a print from my
          <a href="https://www.redbubble.com/people/lightling/shop?asc=u">Redbubble</a>!
        </p>
        <p>
          <span>
            Contact email:
            <a href="mailto:contactlightling@gmail.com">
              contactlightling@gmail.com
            </a>
            </span><br />
          <span>
            Home site: <a href="http://lightling.xyz/">lightling.xyz</a>
          </span><br />
        </p>
        <p>
          I make music too! Consider supporting me by buying my music at
          <a href="https://lightling.bandcamp.com/">Bandcamp</a>.
        </p>
        <p>
          Music and art are hobbies (for me, that is). My main field of work is
          in game development. I'm currently a full-time student. I may
          periodically be inactive with art/music to work on projects or
          schoolwork. I may eventually set up Patreon for my development work,
          and I do have stuff available as PWYW on
          <a href="https://goldenwere.itch.io/">itch.io</a>.
        </p>
      </section>
      <section id="gallery">
        <h2>Gallery</h2>
        <GalleryLink
          element="Traditional"
          @click="setAndGo('traditional')"
        />
        <GalleryLink
          element="digital"
          @click="setAndWarn('digital')"
        />
        <GalleryLink
          element="Photography"
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
      </section>
    </main>
    <Footer
    />
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

main
  background-color: #e8bbb0
  padding: 2rem
  section
    max-width: 32rem
    margin: auto
</style>

<script lang="ts" setup>
import Vue from 'vue';
import VueCompositionAPI, { defineComponent, ref } from '@vue/composition-api'

Vue.use(VueCompositionAPI);

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const currentTarget = ref('');
    const popupActive = ref(false);

    const goToGallery = () => {
      switch(currentTarget.value) {
        case 'traditional':
          location.href = "gallery/traditional";
          break;
        case 'digital':
          location.href = "gallery/digital";
          break;
        case 'photography':
          location.href = "gallery/photo";
          break;
        case 'anthro':
          location.href = "gallery/anthro";
          break;
      }
    };

    const setAndGo = (title: string) => {
      currentTarget.value = title;
      goToGallery();
    };

    const setAndWarn = (title: string) => {
      currentTarget.value = title;
      popupActive.value = true;
    };

    const disablePopup = () => {
      popupActive.value = false;
    };

    return {
      currentTarget,
      popupActive,
      goToGallery,
      setAndGo,
      setAndWarn,
      disablePopup,
    };
  },
})
</script>
