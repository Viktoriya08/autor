<script setup lang="ts">
  defineProps<{
    text: string
    type: string
    icon?: string
  }>()
</script>

<template>
  <div :class="[cls['toast-message'], {[cls[`toast-message--${type}`]]: type}]">
    <span>{{ text }}</span>

    <span v-if="icon" :class="cls['toast-message__icon']">
      <icon-sprite :icon="icon"/>
    </span>
  </div>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
