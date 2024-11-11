<script setup lang="ts">
import { h } from 'vue';

const vnode = h(
  'div', // type
  { id: 'foo', class: 'bar', innerHTML: 'hello' }, // props
  [
    /* children */
  ]
);
</script>

<style scoped></style>