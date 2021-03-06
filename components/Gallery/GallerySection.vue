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
      {{ sanitizedId }}
    </h3>
    <h4
      v-else-if="level === 1"
    >
      {{ sanitizedId }}
    </h4>
    <h5
      v-else-if="level === 2"
    >
      {{ sanitizedId }}
    </h5>
    <h6
      v-else-if="level === 3"
    >
      {{ sanitizedId }}
    </h6>
    <div
      :class="{ grid : (content.content[0].img !== undefined) }"
    >
      <GallerySection
        v-for="(c, i) in content.content"
        :key="`content_${level+1}_${i}`"
        :level="level + 1"
        :content-prop="map(c, (other) => ({ ...other, id: `${content.id}_${c.id}` }))"
      />
    </div>
  </section>
</template>

<style lang="sass" scoped>
@import 'style/variables.sass'

h3,
h4,
h5,
h6
  padding: $mtl-pad
  border-radius: $mtl-round
  border: 0.25rem solid $brand-medium-a
  margin-bottom: $mtl-pad
  margin-right: $mtl-pad

h3,
h5
  background-color: $brand-light-a

.grid
  display: grid
  grid-template-columns: repeat(3, 1fr)
  grid-gap: 1rem
  margin-bottom: $mtl-pad
  margin-right: $mtl-pad

.dark
  h3,
  h5
    background-color: $brand-dark-a

@media screen and (min-aspect-ratio: 15/9)
  .grid
    grid-template-columns: repeat(4, 1fr)

@media screen and (orientation: portrait)
  .grid
    grid-template-columns: repeat(2, 1fr)

@media screen and (max-aspect-ratio: 3/5)
  .grid
    grid-template-columns: repeat(1, 1fr)

@media screen and (max-width: 800px)
  h3,
  h4,
  h5,
  h6,
  .grid
    margin-right: 0
</style>

<script lang="ts">
import {
  defineComponent, ref, computed,
} from '@vue/composition-api'
import GalleryElement from './GalleryElement.vue'
import {
  map,
} from '~/utilities/transform'
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
    const content = ref(props.contentProp)

    const sanitizedId = computed(() => {
      const strArr = content.value.id.split('_')
      return strArr[strArr.length - 1]
    })

    const toImageLink = (str: String) => {
      return Defines.galleryDataLocation + '/' + str
    }

    return {
      content,
      map,
      sanitizedId,
      toImageLink,
    }
  },
})
</script>
