<template>
  <GalleryElement
    v-if="content.img !== undefined"
    :key="content.title"
    :url="content.url"
    :title="content.title"
    :img="toImageLink(content.img)"
    :indicator="content.indicator"
  />
  <section
    v-else
    :id="content.id"
  >
    <h3
      v-if="level === 0"
    >
      {{ content.id }}
    </h3>
    <h4
      v-else-if="level === 1"
    >
      {{ content.id }}
    </h4>
    <h5
      v-else-if="level === 2"
    >
      {{ content.id }}
    </h5>
    <h6
      v-else-if="level === 3"
    >
      {{ content.id }}
    </h6>
    <div
      :class="{ grid : (content.content[0].img !== undefined) }"
    >
      <GallerySection
        v-for="(c, i) in content.content"
        :key="`content_${level+1}_${i}`"
        :level="level + 1"
        :content-prop="map(c, (other) => ({ ...other, id: content.id + c.id }))"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
.grid
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 1rem
  margin-bottom: 2rem
</style>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import GalleryElement from './GalleryElement.vue'

import Defines from '~/defines'

export default defineComponent({
  name: 'GallerySection',
  components: {
    GalleryElement,
  },
  props: {
    contentProp: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
  },
  setup (props: any) {
    const map = (objIn: any, func: any) => {
      return func(objIn)
    }
    // temporarily converting old API to new API
    const content = computed(() => {
      return map(props.contentProp, (c: any) => {
        if (c.img !== undefined || c.content !== undefined) {
          return c
        } else if (c.subsections !== undefined) {
          return {
            id: c.id,
            content: c.subsections,
          }
        } else {
          return c
        }
      })
    })

    const toImageLink = (str: String) => {
      return Defines.galleryDataLocation + '/' + str
    }

    return {
      content,
      map,
      toImageLink,
    }
  },
})
</script>
