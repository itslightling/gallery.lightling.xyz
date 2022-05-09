<template>
  <section class="header">
    <h1>
      {{ title }}
    </h1>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true,
    }
  }
})
</script>
