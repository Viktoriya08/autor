<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    title: string
    text: string
    image: {
      [key: string]: string[]
    }
  }>()
</script>

<template>
  <article class="news-inner__article">
    <h1 class="news-inner__title">
      <span class="news-inner__title-text" v-html="title" />
    </h1>

    <img-sizes
      :public-path="PUBLIC_REMOTE"
      :img="image"
      sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) calc(100vw - 48px), 82vw"
      class="news-inner__img"
    />

    <section class="news-inner__article-content news-inner-article-content" v-html="text" />
  </article>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
