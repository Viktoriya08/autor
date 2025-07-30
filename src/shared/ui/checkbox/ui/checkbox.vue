<script setup lang="ts">
  defineProps<{
    name: string
    text?: string
    value: string
  }>()

  const model = defineModel({type: Array})
</script>

<template>
  <label class="checkbox">
    <span class="checkbox__input">
      <input
        v-model="model"
        type="checkbox"
        :name="name"
        :value="value">

      <icon-sprite
        icon="check"
        class="checkbox__icon checkbox__icon-check"
      />

      <icon-sprite
        icon="close"
        class="checkbox__icon checkbox__icon-remove"
      />
    </span>

    <span v-if="text" class="checkbox__text">{{ text }}</span>
  </label>
</template>

<style lang="scss">
  @import './style';
</style>
