<template>
  <div>
    BĘDĘ MIAŁ SEKCJE

    <main>
      <pre>{{ data }}</pre>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent().where({ _partial: true }).findOne();
})

</script>

<style scoped></style>