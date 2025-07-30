<script setup lang="ts">
  defineProps<{
    text: string,
    icon?: string
  }>()
</script>

<template>
  <button class="btn-main">
    <span class="btn-main__text">{{ text }}</span>

    <span v-if="icon" class="btn-main__icon">
      <icon-sprite :icon="icon" />
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
