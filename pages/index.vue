<template>
  <main>
    <section v-for="section in sections" :key="section._id">
      <!-- <pre>{{ section }}
      <hr>
      </pre> -->
      <template v-if="section._id === 'content:_1.hero.md'">
        <Hero :image="section.image" :title="section.title" :desription="section.content" />
      </template>
      <template v-if="section._id === 'content:_2.blocks.md'">
        <Love :image="section.image" :title="section.title" :desription="section.content" />
      </template>

      <!-- <ContentRendererMarkdown :value="section.body" /> -->
    </section>
  </main>
</template>

<script setup lang="ts">
const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})
</script>
