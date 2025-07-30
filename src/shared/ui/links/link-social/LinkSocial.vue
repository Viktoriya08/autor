<script setup lang="ts">
  defineProps<{
    name: string,
    text?: string,
    theme?: string,
  }>()
</script>

<template>
  <a
    :class="theme"
    :aria-label="`Ссылка на профиль в «${text}»`"
    class="link-social"
    href="#"
    target="_blank"
  >
    <icon-sprite :icon="name" class="link-social__icon"/>
  </a>
</template>

<style lang="scss">
  @import './styles';
</style>
