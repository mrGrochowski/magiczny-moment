<template>
  <section class="relative h-screen overflow-hidden bg-gray-800">
    <!-- Background Image -->
    <img :src="image" alt="Background" class="absolute inset-0 w-full h-full object-cover" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- Centered Text Content -->
    <div class="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
      <div>
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          {{ title }}
        </h1>
        <p class="text-lg md:text-xl max-w-xl mx-auto mb-8">
          {{ desription }}
        </p>
        <a href="#oferta" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md">
          Zobaczw więcej
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  desription: String
})
</script>

<style scoped>
/* Additional styles, if needed */
</style>