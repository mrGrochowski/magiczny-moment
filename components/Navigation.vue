<template>
  <nav class="fixed z-50 flex w-full p-4 content-grid bg-gradient-to-b from-gray-900/80 to-transparent">

    <ul class="flex items-center justify-end w-full gap-8">
      <li v-for="(section, index) in sections" :key="section._id"
        :class="{ 'mr-auto': useGenHumanReadableId(section._stem) === 'witamy' }">
        <a :href="'#' + useGenHumanReadableId(section._stem)"
          class="font-bold cursor-pointer text-accent hover:text-accent-600 text-shadow-sm shadow-gray-500 ">
          <span v-if="useGenHumanReadableId(section._stem) === 'witamy'"
            class="text-4xl font-[eternals-universe]">Magiczny
            Moment</span>
          <span v-else>{{ section.fields.title }}</span>
        </a>
      </li>
    </ul>

  </nav>
</template>

<script setup lang="ts">
import { useGenHumanReadableId } from '../composable/useGenHumanReadableId'
const viewport = useViewport()

const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})

watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})

</script>
