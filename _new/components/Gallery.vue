<template>
  <div>
    <section v-if="shouldRender" class="main">
      <h2>{{ title }} Gallery</h2>
      <section class="gallery-nav">
        <h3>Navigation</h3>
        <ul>
          <li
            v-for="section in galleryData"
            :key="section"
          >
            <a
              :href="toAnchorLink(section.id)"
            >
              {{ section.id }}
            </a>
            <ul
              v-if="section.subsections.length > 0"
            >
              <li
                v-for="subsection in section.subsections"
                :key="subsection"
              >
                <a :href="toAnchorLink(section.id + '_' + subsection.id)">
                  {{ subsection.id }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <!--<content-indicators></content-indicators>-->
      </section>
      <section v-if="shouldRender" class="gallery">
        <h3>Gallery</h3>
        <section
          v-for="section in galleryData"
          :key="section"
          class="gallery-section"
        >
          <h4
            :id="toAnchor(section.id)"
          >
            {{ section.id }}
          </h4>
          <section
            v-for="subsection in section.subsections"
            :key="subsection"
            class="gallery-subsection"
          >
            <h5
              :id="toAnchor(section.id + '_' + subsection.id)"
            >
              {{ subsection.id }}
            </h5>
            <div class="gallery-grid">
              <GalleryElement
                v-for="element in subsection.content"
                :key="element.title"
                :url="element.url"
                :title="element.title"
                :img="element.img"
                :indicator="element.indicator"
              />
            </div>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>

<style lang="sass" scoped>
div
  background-color: white
</style>

<script lang="ts">
import Vue from 'vue';
import VueCompositionAPI, { defineComponent, ref, reactive } from '@vue/composition-api'

Vue.use(VueCompositionAPI);

export default defineComponent({
  setup() {
    const toAnchor = (str) => {
      return str.replace(' ','_');
    }

    const toAnchorLink = (str) => {
      return '#' + toAnchor(str);
    }

    const galleryData = reactive([]);
    const title = ref('loading');

    return {
      toAnchor,
      toAnchorLink,
      galleryData,
      title,
    }
  },
  data() {
    return {
      shouldRender: false,
    }
  },
  mounted() {
    const route = this.$route.path.replace('/gallery/', '');
    this.title = route.charAt(0).toUpperCase() + route.slice(1);
    fetch(`/data/${route}.json`)
    .then(response => response.json())
    .then(data => {
      this.galleryData = (data as any).sections;
      console.log(this.galleryData);
      this.shouldRender = true;
    });
  },
})
</script>
