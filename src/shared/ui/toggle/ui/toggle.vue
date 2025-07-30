<script setup lang="ts">
  defineProps<{
    name: string
    text?: string
  }>()

  const model = defineModel<boolean>()
</script>

<template>
  <label class="toggle">
    <span class="toggle__control">
      <input
        v-model="model"
        class="toggle__input"
        type="checkbox"
        :name="name"
      >
    </span>

    <span v-if="text" class="toggle__text">{{ text }}</span>
  </label>
</template>

<style lang="scss">
  @import './style';
</style>
