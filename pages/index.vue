<template>


  <section v-for="section in sections" :key="section._id">
    <ContentRendererMarkdown :value="section.body" />
  </section>
</template>

<script setup>
const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().only(['title', 'body']).find()
})
</script>