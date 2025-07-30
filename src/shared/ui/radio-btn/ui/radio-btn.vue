<script setup lang="ts">
  defineProps<{
    name: string
    value: string
    text: string
    checked?: boolean
  }>()
</script>

<template>
  <label class="radio-btn">
    <input type="radio" :name="name" :value="value" class="radio-btn__input" :checked="checked">
    <span class="radio-btn__text">{{ text }}</span>
  </label>
</template>

<style lang="scss">
  @import './style';
</style>
