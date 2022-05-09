<template>
  <div class="gallery-element">
    <a
      :href="url"
      :style="{ backgroundImage: imageURL }"
    >
      <span>
        {{ element }}
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
import Vue from 'vue';
import VueCompositionAPI, { defineComponent, ref, computed } from "@vue/composition-api";
import Indicator from 'types/Indicator';

Vue.use(VueCompositionAPI);

export default defineComponent({
  name: 'GalleryElement',
  props: {
    element: {
      type: String,
      required: true,
    },
    indicator: {
      type: Object as () => Indicator,
      default: undefined,
    },
  },
  setup(props: any) {
    const indicator = ref(props.indicator);
    const element = ref(props.element);

    const url = computed(() => {
      return `/${element}`;
    });

    const imageURL = computed(() => {
      return `url(/images/${element})`;
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
      url,
      imageURL,
      colorCodeClass,
    };
  },
});
</script>
