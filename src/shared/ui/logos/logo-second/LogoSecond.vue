<script setup lang="ts">
import { BASE_URL } from '@/shared/config';
</script>

<template>
  <div class="logo-second">
    <img :src="`${BASE_URL}/image/logo/logo-second.svg`" alt="logo more development">
    <span class="visually-hidden">more development</span>
  </div>
</template>
