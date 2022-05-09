<template>
  <button
    :id="title"
    :style="{ backgroundImage: imageURL }"
    @click="$emit('click', title)"
  >
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
  },
})
</script>
