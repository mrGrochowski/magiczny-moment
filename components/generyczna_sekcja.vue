<template>
  <figure class="h-screen overflow-hidden bg-gray-800 bg-cover " :style="`background-image: url('${image}');`">

    <!-- Centered Text Content -->
    <div class="flex flex-row items-center justify-center h-full px-4 text-center text-white ">
      <div class="">
        <h2 class="mb-4 text-4xl font-bold md:text-6xl">
          {{ title }}
        </h2>
        <div
          class="flex flex-col max-w-xl p-8 mx-auto mb-8 text-lg text-left md:text-xl backdrop-blur-md rounded-xl drop-shadow-md">
          {{ content }}

          <div class="flex items-center justify-end w-full mt-6">
            <span class="text-2xl">Cena: {{ price }}</span>
            <a href="#oferta"
              class="px-6 py-3 ml-4 font-semibold text-white rounded-full bg-accent hover:bg-accent-600">
              Zamów
            </a>
          </div>
        </div>

      </div>
    </div>
  </figure>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  title: String,
  content: String,
  price: String,
})
</script>

<style scoped>
/* Additional styles, if needed */
</style>