<template>


  <section v-for="section in sections" :key="section._id">
    <pre>{{ section }}</pre>
    <img :src="section.image" alt="section.title" />
    <!-- <ContentRendererMarkdown :value="section.body" /> -->
  </section>
</template>

<script setup>
const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})
</script>