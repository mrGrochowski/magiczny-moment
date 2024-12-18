<template>
  <nav
    class="fixed bottom-0 z-50 w-full px-4 h-[--menu-height] bg-gray-900 
    bg-gradient-to-l md:bg-transparent md:bg-gradient-to-b from-gray-900/80 to-transparent md:top-0 backdrop-blur-md md:backdrop-blur-0  md:shadow-none shadow-[0px_0px_10px_rgba(0,0,0,0.5)] content-grid">


    <ul
      class="relative flex items-center justify-start w-full gap-8 overflow-x-auto truncate md:justify-start md:gap-8 whitespace-nowrap hide-scroll-bar">
      <li class="inline-block" v-for="(section, index) in visibleArray" :key="section._id"
        :class="{ 'md:mr-auto': index === 0 }">
        <a :href="'#' + useGenHumanReadableId(section._stem)" class="link ">
          <span v-if="index === 0" class="md:text-4xl md:font-[eternals-universe]">
            <span class="hidden md:inline-block">
              Magiczny Moment
            </span>
            <span class="inline-block md:hidden">Początek</span>
          </span>

          <span v-else>{{ section.fields.title }}</span>
        </a>
        <pre>{{ section.value }}</pre>
      </li>
      <Menu v-if="showDrawer">
        <li class="absolute top-0 right-0 inline-flex h-full transform -translate-y-1/2 pointer-events-none top-1/2">
          <div class="h-full w-[70px] bg-gradient-to-l from-gray-900 to-transparent "></div>
          <MenuButton class="flex items-center h-full align-middle bg-gray-900 pointer-events-auto text-accent">
            <Icon name="icon-park-outline:more-three" class="inline-block text-xl size-6" />
          </MenuButton>
        </li>
        <Teleport to="#popover">
          <Transition enter-active-class="transition-transform duration-500"
            leave-active-class="transition-transform duration-500" enter-from-class="translate-x-full"
            enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-to-class="translate-x-full">
            <MenuItems
              class="fixed z-[51] gap-8 right-0 top-0 flex flex-col flex-wrap whitespace-pre-line w-[300px] h-screen bg-gradient-to-b bg-gradient-to-b from-gray-900/80 to-gray-600/80 backdrop-blur-md p-8 shadow-drawer">
              <!--         <MenuItems>
 -->
              <MenuButton class="inline link">
                <Icon name="icon-park-outline:close" class="inline-block text-xl size-6" />
              </MenuButton>

              <MenuItem v-for="(section, index) in asideArray" :key="section._stem">
              <li class="inline-block">
                <a class="link" :href="'#' + useGenHumanReadableId(section._stem)">
                  <span>{{ section.fields.title }}</span>
                </a>
              </li>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Teleport>
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

const numberOfElements = ['1', '2', '3'];

const visibleArray = ref([]), asideArray = ref([]);
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
  const indexOfNoOfElements = computed(() => ['mobile', 'mobileMedium', 'mobileWide'].indexOf(newBreakpoint))
  const numberOfVisibleElements = numberOfElements[indexOfNoOfElements.value];
  visibleArray.value = useSplitArray(sections.value, numberOfVisibleElements).visibleArray.value;
  asideArray.value = useSplitArray(sections.value, numberOfVisibleElements).asideArray.value;

}, { immediate: true })

const showDrawer = computed(() => {
  return toRaw(asideArray.value).length > 0
})

</script>

<style scoped>
.link {
  @apply inline-block font-bold cursor-pointer text-accent hover:text-accent-600 text-shadow-sm shadow-gray-500;
}

.shadow-drawer {
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>