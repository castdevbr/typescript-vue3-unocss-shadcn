<script setup lang="ts">
import { Button } from "./components/ui/button";

const num = ref(3);

function incNumber() {
  num.value++;
}
</script>

<template>
  <div class="flex p-5">
    <Button variant="new" @click="incNumber">
      <div class="i-mdi:account" />
      Valor: {{ num }}
    </Button>
    <div class=""></div>
  </div>
</template>

<style scoped></style>
