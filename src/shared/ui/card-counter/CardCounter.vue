<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    text: string,
    count: string,
    img: string,
    imgWebp: string,
    href: string,
  }>()
</script>

<template>
  <NuxtLink :to="href" class="card-counter">
    <!-- <img class="card-counter__img" :src="`${BASE_URL}/image/card-counter/${img}`" alt=""> -->
    <picture>
      <source
        :srcset="`${PUBLIC_REMOTE}${imgWebp}`"
        type="image/webp"
      >

      <img
        :src="`${PUBLIC_REMOTE}${img}`"
        alt=""
        width="80"
        height="56"
        class="card-counter__img"
        loading="lazy"
      >
    </picture>

    <div class="card-counter__name">
      <span class="card-counter__text">с видом на </span>
      <span class="card-counter__type">{{ text }}</span>
    </div>

    <span class="card-counter__count">{{ count }}</span>
  </NuxtLink>
</template>

<style lang="scss">
  @import './styles';
</style>
