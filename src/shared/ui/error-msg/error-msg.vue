<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'

  defineProps<{
    code?: number
    title?: string
    link?: string
  }>()
</script>

<template>
  <section class="error-block" data-switch-theme="blue-promo">
    <div class="wrapper error-block__wrapper">
      <div class="error-block__body">
        <div class="error-block__content">
          <div class="error-block__info">{{ code || '404' }}</div>

          <h1 class="error-block__title">{{ title || 'такой страницы не существует' }}</h1>

          <BtnPrimary
            :href="link || '/objects'"
            class="btn-primary--dark btn-primary--l error-block__link"
            text="выбрать квартиру"
          />

          <div class="error-block__bg-3">
            <img class="error-block__img" :src="`${BASE_URL}/image/bg/bird.svg`" width="70" height="35" alt="птица">
          </div>
        </div>

        <div class="error-block__bg-1">
          <img class="error-block__img" :src="`${BASE_URL}/image/bg/bg-404.svg`" width="504" height="390" alt="изображение гор">
        </div>

        <div class="error-block__bg-2">
          <img class="error-block__img" :src="`${BASE_URL}/image/bg/history-1.svg`" width="460" height="490" alt="изображение дома">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
