<script setup lang="ts">
  defineProps<{
    text?: string,
  }>()
</script>

<template>
  <button class="btn-play">
    <span class="btn-play__text">{{ text }}</span>
  </button>
</template>

<style lang="scss">
  @import './styles';
</style>
