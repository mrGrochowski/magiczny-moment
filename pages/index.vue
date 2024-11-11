<template>
  <main>
    <Navigation />
    <section v-for="section in sections" :key="section._id">
      <Witamy v-if="section._stem === '_1.witamy'" :id="useGenHumanReadableId(section._stem)" :image="section.image"
        :title="section.title" :desription="section.content" />
      <GenerycznaSekcja v-else :id="useGenHumanReadableId(section._stem)" :image="section.image" :title="section.title"
        :desription="section.content" />

      <!-- <ContentRendererMarkdown :value="section.body" /> -->
    </section>
  </main>
</template>

<script setup lang="ts">
import { useGenHumanReadableId } from '../composable/useGenHumanReadableId'

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})
</script>
