<template>
  <div
    :class="colorCodeClass"
  >
    <p>
      {{ indicator }}
    </p>
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.color-code
  width: $mtl-round * 4
  height: $mtl-round * 2
  display: flex
  margin: 0
  padding: 0
  border-radius: calc($mtl-round / 2)
  box-shadow: 0 0 0px 1px white, 0 0 2px 2px black
  p
    color: white
    text-shadow: 1px 1px black
    margin: auto
  &.cc-mature
    background-color: rgb(255,159,0)
    background-image: repeating-linear-gradient(90deg, rgb(255,180,0), rgb(255,180,0) 0.24rem, rgb(220,140,0) 0.25rem, rgb(220,140,0) 0.49rem)
    p
      color: black
      text-shadow: 1px 1px white
  &.cc-sfw
    background-color: rgb(0, 180, 240)
  &.cc-adult
    background-color: rgb(155,0,100)
    background-image: repeating-linear-gradient(49deg, rgb(150,0,80), rgb(150,0,80) 0.24rem, rgb(80,0,30) 0.25rem, rgb(80,0,30) 0.49rem)
</style>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api'
import Indicator from 'types/Indicator'

export default defineComponent({
  props: {
    indicator: {
      type: String,
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
