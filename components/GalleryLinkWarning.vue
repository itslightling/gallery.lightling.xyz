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

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
})
</script>
