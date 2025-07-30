<script setup lang="ts">
  defineProps<{
    name: string,
    text?: string,
    textAlt?: string,
  }>()
</script>

<template>
  <button class="btn-burger">
    <span class="btn-burger__icon">
      <span class="btn-burger__icon-bg" />
    </span>
    <span v-if="text" class="btn-burger__text" >
      <span class="btn-burger__text-inner">
        <span>{{ text }}</span>
      </span>
      <span class="btn-burger__text-inner">
        <span>{{ textAlt }}</span>
      </span>
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
