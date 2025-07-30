<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
  // import type { APIRequest } from './types/index'

  defineProps<{
    themeClass?: 'decor-price--oval',
    price?: string | number
  }>()

  const data = await useAPI('api/v1/payment/price')
</script>

<template>
  <!-- передать themeClass на странице Инвестиции, Способы покупки-->

  <section
    class="decor-price"
    :class="themeClass"
    data-switch-theme="blue-promo">

    <div class="wrapper decor-price__wrapper">

      <div class="decor-price__content">
        <h2 class="decor-price__title">
          цены от
          <span class="decor-price__price">{{ data }}</span> &nbsp;&nbsp;
          млн  ₽
        </h2>
        <div class="decor-price__bg-3">
            <img class="decor-price__img" :src="`${BASE_URL}/image/bg/bird.svg`" width="70" height="35" alt="птица" loading="lazy">
          </div>
      </div>

      <div class="decor-price__bg-1">
        <img class="decor-price__img" :src="`${BASE_URL}/image/bg/bg-404.svg`" width="504" height="390" alt="изображение гор" loading="lazy">
      </div>
      <div class="decor-price__bg-2">
        <img class="decor-price__img" :src="`${BASE_URL}/image/bg/history-1.svg`" width="460" height="490" alt="изображение дома" loading="lazy">
      </div>
    </div>

  </section>

</template>

<style lang="scss">
  @import './styles';
</style>
