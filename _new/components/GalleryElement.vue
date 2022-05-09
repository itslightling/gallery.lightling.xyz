<template>
  <div class="gallery-element">
    <a
      :href="url"
      :style="{ backgroundImage: imageURL }"
    >
      <span>
        {{ title }}
      </span>
      <div
        v-if="indicator !== undefined"
        :class="colorCodeClass"
      >
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "@vue/composition-api";
import Indicator from 'types/Indicator';

export default defineComponent({
  name: 'GalleryElement',
  props: {
    url: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    indicator: {
      type: Object as () => Indicator,
      default: undefined,
    },
  },
  setup(props: any) {
    const img = ref(props.img);
    const indicator = ref(props.indicator);

    const imageURL = computed(() => {
      return `url(${img})`;
    });

    const colorCodeClass = computed(() => {
      switch(indicator) {
        case 'Mature':
          return 'color-code cc-mature';
        case 'Adult':
          return 'color-code cc-adult';
        case 'Safe':
        default:
          return 'color-code cc-sfw';
      }
    });

    return {
      imageURL,
      colorCodeClass,
    }
  },
});
</script>
