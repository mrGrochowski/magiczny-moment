<template>
  <nav class="fixed z-50 flex w-full p-4 bg-gradient-to-b from-gray-900/80 to-transparent content-grid">

    <ul
      class="flex flex-wrap items-center justify-start w-full gap-8 overflow-x-auto whitespace-nowrap hide-scroll-bar">
      <li class="inline-block" v-for="(section, index) in visibleArray" :key="section._id"
        :class="{ 'mr-auto': useGenHumanReadableId(section._stem) === 'witamy' || index === 0 }">
        <a :href="'#' + useGenHumanReadableId(section._stem)" class="link ">
          <span v-if="useGenHumanReadableId(section._stem) === 'witamy' || index === 0"
            class="text-4xl font-[eternals-universe]">Magiczny
            Moment</span>
          <span v-else>{{ section.fields.title }}</span>
        </a>
        <pre>{{ section.value }}</pre>
      </li>
      <Menu>
        <MenuButton>
          <li class="link">Więcej ⬇️</li>
        </MenuButton>
        <!-- <MenuItems class="fixed z-50 right-[50px] top-[60px] flex flex-wrap whitespace-pre-line w-32 "> -->
        <MenuItems>

          <MenuButton class="inline link">✖️</MenuButton>
          <MenuItem v-for="(section, index) in asideArray" :key="section._stem">
          <li class="inline-block">
            <a class="link" :href="'#' + useGenHumanReadableId(section._stem)">
              <span>{{ section.fields.title }}</span>
            </a>
          </li>
          </MenuItem>
        </MenuItems>
      </Menu>
    </ul>

  </nav>


</template>

<script setup lang="ts">
import { useGenHumanReadableId, useSplitArray } from '../composable/useGenHumanReadableId'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const viewport = useViewport();


const { data: sections } = await useAsyncData('sections', async () => {
  return await queryContent().find()
})

const { visibleArray, asideArray } = useSplitArray(sections.value, 2);


watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
})

</script>

<style scoped>
.link {
  @apply font-bold cursor-pointer text-accent hover:text-accent-600 text-shadow-sm shadow-gray-500;
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>