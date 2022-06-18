<template>
  <li
    v-if="content.content[0].img !== undefined"
  >
    <a
      :href="`#${content.id}`"
    >
      {{ sanitizedId }}
    </a>
  </li>
  <li
    v-else
  >
    <a
      :href="`#${content.id}`"
    >
      {{ sanitizedId }}
    </a>
    <ul>
      <GalleryNavigation
        v-for="(c, i) in content.content"
        :key="`${content.id}_${i}`"
        :content-prop="map(c, (other) => ({ ...other, id: `${content.id}_${c.id}` }))"
      />
    </ul>
  </li>
</template>

<style lang="sass" scoped>

</style>

<script lang="ts">
import {
  defineComponent, computed,
} from '@vue/composition-api'
import {
  map,
} from '~/utilities/Map'

export default defineComponent({
  name: 'GalleryNavigation',
  props: {
    contentProp: {
      type: Object,
      required: true,
    },
  },
  setup (props: any) {
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
    const sanitizedId = computed(() => {
      const strArr = content.value.id.split('_')
      return strArr[strArr.length - 1]
    })
    return {
      content,
      sanitizedId,
      map,
    }
  },
})
</script>
