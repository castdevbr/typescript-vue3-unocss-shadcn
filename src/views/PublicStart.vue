<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4">
    <h1 class="text-3xl font-bold">Bem-vindo</h1>
    <RouterLink to="/public/login" class="text-blue-500 underline">Ir para Login</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
