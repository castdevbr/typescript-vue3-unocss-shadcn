<script setup lang="ts">
const num = ref(3);

const num_comp = computed(() => {
  return num.value + 1;
});

function incNumber() {
  num.value++;
}
</script>

<template>
  <div class="flex justify-center bg-blue" @click="incNumber">
    {{ num_comp }}
  </div>
</template>

<style scoped></style>
