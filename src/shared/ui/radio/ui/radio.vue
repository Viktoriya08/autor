<script setup lang="ts">
  defineProps<{
    name: string
    value: string
    text?: string
  }>()
</script>

<template>
  <label class="radio">
    <input type="radio" :name="name" :value="value" class="radio__input">
    <span v-if="text" class="radio__text">{{ text }}</span>
  </label>
</template>

<style lang="scss">
 @import './style';
</style>
