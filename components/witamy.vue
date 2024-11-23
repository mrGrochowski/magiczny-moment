<template>
  <figure class="relative h-screen overflow-hidden bg-gray-800 bg-cover">
    <img :src="image"
      class="absolute top-0 left-0 object-cover object-center w-screen h-screen full-width smooth-slide" />

    <!-- Background Image -->


    <!-- Centered Text Content -->
    <div
      class="relative z-10 flex items-center justify-center h-full px-4 pb-[--menu-height] md:pb-0 text-center text-white">
      <div>
        <img src="/public/LOGO.png" alt="Logo" class="size-[400px] mx-auto mb-4 object-contain" />
        <div class="max-w-xl mx-auto mb-8 text-lg md:text-xl">
          {{ content }}
        </div>
        <a :href="`#${link}`" class="px-6 py-3 font-semibold text-white rounded-full bg-accent hover:bg-accent-600">
          Zobacz więcej
        </a>
      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  content: String,
  link: String
})
</script>

<style scoped>
/* Additional styles, if needed */
</style>