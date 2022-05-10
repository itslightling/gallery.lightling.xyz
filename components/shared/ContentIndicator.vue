<template>
  <div
    :class="colorCodeClass"
  />
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.color-code
  width: $mtl-round * 4
  height: $mtl-round * 2
  display: inline-block
  margin: 0
  padding: 0
  border-radius: $mtl-round
  box-shadow: 0 0 0px 1px white, 0 0 2px 2px black
  &.cc-mature
    background-color: rgb(255,159,0)
    background-image: repeating-linear-gradient(90deg, rgb(255,159,0), rgb(255,159,0) 0.24rem, rgb(200,119,0) 0.25rem, rgb(200,119,0) 0.49rem)
  &.cc-sfw
    background-color: rgb(0, 129, 255)
  &.cc-adult
    background-color: rgb(155,0,100)
    background-image: repeating-linear-gradient(49deg, rgb(155,0,100), rgb(155,0,100) 0.24rem, rgb(105,0,50) 0.25rem, rgb(105,0,50) 0.49rem)
</style>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import Indicator from 'types/Indicator'

export default defineComponent({
  props: {
    indicator: {
      type: Object as () => Indicator,
      default: undefined,
    },
  },
  setup (props: any) {
    const indicator = ref(props.indicator)

    const colorCodeClass = computed(() => {
      switch (indicator.value as Indicator) {
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
      colorCodeClass,
    }
  },
})
</script>
