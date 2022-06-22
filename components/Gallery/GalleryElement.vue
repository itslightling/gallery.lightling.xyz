<template>
  <div
    class="gallery-element"
  >
    <a
      :href="url"
      :style="{ 'background-image': 'url(' + img + ')' }"
    >
      <div>
        <p>
          {{ title }}
        </p>
        <ContentIndicator
          v-if="indicator !== undefined"
          :indicator="indicator"
        />
      </div>
    </a>
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.gallery-element
  height: 15rem
  a
    height: 100%
    width: 100%
    padding: 0
    margin: 0
    line-height: 100%
    display: block
    position: relative
    background-color: black
    background-position: center center
    background-repeat: no-repeat
    background-size: contain
    border: 2px lighten($brand-dark-a, 50%) solid
    color: $brand-bright-a
    border-radius: $mtl-round
    &:hover
      outline-color: lighten($brand-dark-a, 50%) !important
    &::after
      display: none
    > div
      position: absolute
      bottom: 0
      left: 0
      right: 0
      padding: 0.5rem
      height: 3rem
      display: flex
      justify-content: space-between
      align-items: center
      border-bottom-left-radius: $mtl-round
      border-bottom-right-radius: $mtl-round
      background-color: #000c
      backdrop-filter: blur(50px)
      -webkit-backdrop-filter: blur(50px)
      .color-code
        height: 2rem
        flex: 0 0 5rem
      p
        flex: 1 1 100%
@media screen and (max-width: 500px)
  .gallery-element
    a
      > div
        .color-code
          height: 1.5rem
          flex: 0 0 3rem
</style>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent,
} from '@vue/composition-api'
import ContentIndicator from '~/components/shared/ContentIndicator.vue'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'GalleryElement',
  components: {
    ContentIndicator,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    indicator: {
      type: String,
      default: undefined,
    },
  },
})
</script>
