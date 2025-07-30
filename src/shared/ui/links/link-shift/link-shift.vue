<script setup lang="ts">
  defineProps<{
    text: string[]
    icon: string[]
  }>()
</script>

<template>
  <a class="link-shift">
    <span class="link-shift__box">
      <span class="link-shift__text">{{ text[0] }}</span>
      <span class="link-shift__icon">
        <icon-sprite :icon="icon[0]"/>
      </span>
    </span>

    <span class="link-shift__box">
      <span class="link-shift__text">{{ text[1] }}</span>
      <span class="link-shift__icon">
        <icon-sprite :icon="icon[1]"/>
      </span>
    </span>
  </a>
</template>

<style lang="scss">
  @import './style';
</style>
