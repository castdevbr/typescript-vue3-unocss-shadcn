<script setup lang="ts">
const num = ref(3);

const num_comp = computed(() => {
  return num.value + 1;
});
</script>

<template>
  <div class="">{{ num_comp }}</div>
</template>

<style scoped></style>
