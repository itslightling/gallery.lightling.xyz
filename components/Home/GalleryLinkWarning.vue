<template>
  <div
    class="warning"
  >
    <h4>Warning!</h4>
    <p>
      This gallery contains NSFW mature/adult material. Only browse if you are
      18+ of age.
    </p>
    <div
      class="buttons"
    >
      <button
        v-focus
        @click="$emit('disable')"
      >
        Go Back
      </button>
      <button
        @click="$emit('acknowledge')"
      >
        Acknowledge and Continue
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

.warning
  display: block
  position: fixed
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  padding: 2rem
  z-index: 99
  background-color: $brand-medium-a
  color: $brand-bright-a
  border-radius: $mtl-round
  *
    z-index: 99
    position: relative
  p,
  h4
    margin-bottom: 1rem
  &::before
    content: ""
    position: absolute
    top: -100vh
    bottom: -100vh
    left: -100vw
    right: -100vw
    z-index: 0
    background-color: #0009
  .buttons
    display: flex
    flex-wrap: wrap
    grid-gap: 0.5rem
    button
      flex: 1 0 100%
      height: 3rem
      border-radius: $mtl-round
      background-color: #53707e
      color: #ffe0e8
</style>

<script lang="ts">
import {
  defineComponent,
} from '@vue/composition-api'

export default defineComponent({
  setup () {},
})
</script>
