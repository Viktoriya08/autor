<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config';

  defineProps<{
    text: string,
    img: string,
    imgWebp: string
  }>()
</script>

<template>
  <div :class="classes.thumb">
    <div :class="classes.img">
      <picture >
        <source v-if="imgWebp" :srcset="`${PUBLIC_REMOTE}${imgWebp}`" type="image/webp">
        <img v-if="img" :src="`${PUBLIC_REMOTE}${img}`" width="40" height="40" alt="">
      </picture>
    </div>

    <p :class="[classes.text, 'caption--sm']">{{ text }}</p>
  </div>
</template>

<style lang="scss" module="classes">
  @import './styles';
</style>
