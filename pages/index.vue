<template>
  <main class="content-grid">
    <Navigation />
    <template v-for="(section, index) in sections" :key="section._id">
      <template v-if="section._stem === '_1.witamy'">
        <Witamy class="full-width" :id="useGenHumanReadableId(section._stem)" v-bind="section.fields"
          :link="useGenHumanReadableId(sections[index + 1]._stem)" />
      </template>
      <template v-else>
        <GenerycznaSekcja class="full-width" :id="useGenHumanReadableId(section._stem)" v-bind="section.fields" />
      </template>

      <!-- <ContentRendererMarkdown :value="section.body" /> -->
    </template>
  </main>
</template>

<script setup lang="ts">
import { useGenHumanReadableId } from '../composable/useGenHumanReadableId'

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})
</script>

<style>
.content-grid {
  --padding-inline: 1rem;
  --content-max-width: 1200px;
  --breakout-max-width: 1400px;

  --breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);

  display: grid;
  grid-template-columns:
    [full-width-start] minmax(var(--padding-inline), 1fr) [breakout-start] minmax(0, var(--breakout-size)) [content-start] min(100% - (var(--padding-inline) * 2),
      var(--content-max-width)) [content-end] minmax(0, var(--breakout-size)) [breakout-end] minmax(var(--padding-inline), 1fr) [full-width-end];
}

.content-grid> :not(.breakout, .full-width),
.full-width> :not(.breakout, .full-width) {
  grid-column: content;
}

.content-grid>.breakout {
  grid-column: breakout;
}

.content-grid>.full-width {
  grid-column: full-width;

  display: grid;
  grid-template-columns: inherit;
}

img.full-width {
  width: 100%;
  max-height: 45vh;
  object-fit: cover;
}

.flow>*+* {
  margin-top: var(--flow-spacing, 1em);
}
</style>
