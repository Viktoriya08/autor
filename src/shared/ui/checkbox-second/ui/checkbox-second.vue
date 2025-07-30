<script setup lang="ts">
  defineProps<{
    name: string
    value: string
    text: string
    isRadio?: boolean
  }>()

  const model = defineModel({type: Array})
</script>

<template>
  <label class="checkbox-second">
    <span class="checkbox-second__control">
      <input
        v-model="model"
        :type="isRadio ? 'radio' : 'checkbox'"
        :name="name"
        :value="value">

      <span class="checkbox-second__value">{{ text }}</span>
    </span>
  </label>
</template>

<style lang="scss">
  @import './style';
</style>
