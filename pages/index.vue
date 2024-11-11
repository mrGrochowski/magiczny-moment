<template>

  <section v-for="section in sections" :key="section._id">
    <template v-if="section._id === 'content:hero.md'">
      <Hero :image="section.image" :title="section.title" :desription="section.content" />
    </template>
    <!-- <ContentRendererMarkdown :value="section.body" /> -->
  </section>
</template>

<script setup lang="ts">
const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})
</script>
