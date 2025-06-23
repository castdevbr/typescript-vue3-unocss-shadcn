<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4">
    <h1 class="text-3xl font-bold">404</h1>
    <p>Página não encontrada</p>
    <RouterLink to="/public/start" class="text-blue-500 underline">Voltar ao início</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
