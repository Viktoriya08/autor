<script setup lang="ts">
  defineProps<{
    date: {
      num: string
      text: string
    }
    mode?: 'primary'
    customClassMods?: {
      numElementClassMod?: string
      textElementClassMod?: string
    }
  }>()
</script>

<template>
  <time :class="[uiDate['ui-date'], uiDate[`ui-date--${mode}`]]">
    <b
      :class="[
        uiDate['ui-date__num'],
        customClassMods?.numElementClassMod
      ]">{{ date.num }}</b>

    <span
      :class="[
        uiDate['ui-date__text'],
        customClassMods?.textElementClassMod
      ]">{{ date.text }}</span>
  </time>
</template>

<style lang="scss" module="uiDate">
  @import './styles';
</style>
