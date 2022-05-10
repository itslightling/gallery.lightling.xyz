<template>
  <a
    :href="href"
  >
    <img
      :src="img"
      :alt="alt"
      :title="title"
    />
  </a>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'SocialIconLink',
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    const title = ref(props.title)
    const alt: String = `${title} icon`

    return {
      alt,
    }
  },
})
</script>
