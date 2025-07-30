<script setup lang="ts">
  defineProps<{
    text: string
    icon: string
  }>()
</script>

<template>
  <span class="label">
    <span v-if="icon" class="label__icon">
      <icon-sprite icon="lock"/>
    </span>

    <span v-if="text" class="label__text">{{ text }}</span>
  </span>
</template>

<style lang="scss">
  @import './styles';
</style>
