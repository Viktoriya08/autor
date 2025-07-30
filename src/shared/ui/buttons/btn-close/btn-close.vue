<script setup lang="ts">
  defineProps<{
    name: string,
    text?: string,
  }>()
</script>

<template>
  <button class="btn-close">
    <span class="btn-close__icon">
      <icon-sprite :icon="name" />
    </span>

    <span v-if="text" class="visually-hidden">{{ text }}</span>
  </button>
</template>
