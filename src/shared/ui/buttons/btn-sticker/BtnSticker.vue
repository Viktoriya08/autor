<script setup lang="ts">
  defineProps<{
    text: string,
    icon?: string,
  }>()
</script>

<template>
  <button class="btn-sticker">
    <icon-sprite v-if="icon" :icon="icon" />
    {{ text }}
  </button>
</template>
