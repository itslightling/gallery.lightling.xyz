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
  // eslint-disable-next-line camelcase
  compability__1_0_0__2_0_0,
} from '~/utilities/compatibility'
import {
  map,
} from '~/utilities/transform'

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
      return compability__1_0_0__2_0_0(props.contentProp)
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
