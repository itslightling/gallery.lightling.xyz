<template>
  <div
    class="gallery-element"
  >
    <a
      :href="url"
      :style="{ 'background-image': 'url(' + img + ')' }"
    >
      <span>
        {{ title }}
      </span>
      <div
        v-if="indicator !== undefined"
        :class="colorCodeClass"
      ></div>
    </a>
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.gallery-element
  height: 15rem
  .color-code
    position: absolute
    margin: 0.25rem
  a
    height: 100%
    width: 100%
    padding: 0
    margin: 0
    line-height: 100%
    display: block
    position: relative
    background-color: transparent
    background-position: center center
    background-repeat: no-repeat
    box-shadow: 0 0.5rem 1rem 0 #27404c
    border: 2px lighten($brand-dark-a, 50%) solid
    color: lighten($brand-dark-a, 50%)
    border-radius: $mtl-round
    &::after
      display: none
    span
      position: absolute
      text-align: center
      bottom: 1rem
      left: 0
      right: 0
      padding: 0.5rem
      background-color: #0009
      backdrop-filter: blur(50px)
      -webkit-backdrop-filter: blur(50px)
</style>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent,
  ref,
  computed,
} from '@vue/composition-api'
import Indicator from 'types/Indicator'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'GalleryElement',
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
      type: Object as () => Indicator,
      default: undefined,
    },
  },
  setup(props: any) {
    const img = ref(props.img)
    const indicator = ref(props.indicator)

    const imageURL = ref(() => {
      return `url(${img})`
    })

    const colorCodeClass = computed(() => {
      switch (indicator.value) {
        case 'Mature':
          return 'color-code cc-mature'
        case 'Adult':
          return 'color-code cc-adult'
        case 'Safe':
        default:
          return 'color-code cc-sfw'
      }
    })

    return {
      imageURL,
      colorCodeClass,
    }
  },
})
</script>
