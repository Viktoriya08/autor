<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    img: string | null,
    imageWebp: string | null,
    idCard: number,
    name: string,
    investSum: string,
    profitSum: string,
    profitCurrency: string,
    profitInfo: string,
  }>()

</script>

<template>
  <article class="card-reviews">
    <picture v-if="img"  class="card-reviews__img">
      <source v-if="imageWebp" :srcset="`${PUBLIC_REMOTE}${imageWebp}`" type="image/webp">
      <img :src="`${PUBLIC_REMOTE}${img}`" alt="аватар-фото" width="88" height="88" loading="lazy" onerror="this.onerror=null;this.src='./image/reviews/avatar.png';">
    </picture>

    <picture v-else  class="card-reviews__img">
      <img :src="`./image/reviews/avatar.png`" alt="аватар-фото" width="88" height="88" loading="lazy">
    </picture>

    <div class="card-reviews__box-text">
      <div class="card-reviews__name card-reviews__text card-reviews__text--grey">{{ name }}</div>
      <div class="card-reviews__text">{{ investSum }}</div>
    </div>

    <slot name="card-reviews-link" />

    <div class="card-reviews__bottom">
      <div class="card-reviews__number">{{ profitSum }}</div>
      <div class="card-reviews__box-text">
      <div class="card-reviews__name card-reviews__text card-reviews__text--grey">{{ profitCurrency }}</div>
      <div class="card-reviews__text">{{ profitInfo }}</div>
    </div>
    </div>

    <div class="card-reviews__hover">
      <BtnRound text="Смотреть кейс подробнее" icon="plus" class="btn-round--m btn-round--blue"/>
    </div>

  </article>
</template>

<style lang="scss">
  @import './styles';
</style>
