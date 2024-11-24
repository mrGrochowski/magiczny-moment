<template>
  <div>
    <div class="fixed z-[51]" id="popover"></div>
    <div class="fixed z-[52] bottom-8 right-8" id="animation-close"></div>
    <NuxtPage />

  </div>
</template>
<style lang="css">
html {
  scroll-behavior: smooth;
}

:root {
  --color-accent: #ceb67a;
  --menu-height: 80px;
}
</style>