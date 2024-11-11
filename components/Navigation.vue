<template>
  <nav class="flex w-full fixed z-50 bg-gradient-to-b from-black to-transparent p-4 ">

    <ul class="flex space-x-4">
      <li v-for="section in sections" :key="section._id">

        <a :href="'#' + useGenHumanReadableId(section._stem)" class="cursor-pointer text-slate-200 hover:underline">
          {{ section.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useGenHumanReadableId } from '../composable/useGenHumanReadableId'

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>