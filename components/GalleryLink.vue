<template>
  <button
    :id="element"
    :style="{ 'background-image': 'url(/images/home/' + element + '.jpg)' }"
    @click="$emit('click', element)"
  >
    <span
      tabindex="-1"
    >
      {{ element }}
    </span>
  </button>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

button
  height: 8rem
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
  border-radius: $mtl-round
  span
    font-size: 2rem
    background-color: #000a
    color: $brand-light-a
    padding: 1rem
    border-radius: $mtl-round
</style>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, {
  defineComponent,
  ref,
  computed,
} from '@vue/composition-api'

Vue.use(VueCompositionAPI)

export default defineComponent({
  name: 'GalleryLink',
  props: {
    element: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    const element = ref(props.element)

    const imageURL = computed(() => {
      return `url(/images/${element})`
    })

    return {
      imageURL,
    }
  },
})
</script>
