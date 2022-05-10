<template>
  <button
    :id="element"
    :style="{ backgroundImage: imageURL }"
    @click="$emit('click', element)"
  >
    {{ element }}
  </button>
</template>

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
