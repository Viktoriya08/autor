<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'

  defineProps<{
    link?: boolean,
    imgClass?: string,
  }>()
</script>

<template>
  <template v-if="link">
    <a href="/" class="logo">
      <icon-sprite icon="logo" class="logo__img" />
    </a>
  </template>

  <template v-else>
    <div class="logo">
      <img :src="`${BASE_URL}/image/logo/logo.svg`" :class="[imgClass, 'logo__img']" alt="Логотип «More Yuva»">
    </div>
  </template>
</template>

<style scoped lang="scss">
  @import './styles';
</style>
