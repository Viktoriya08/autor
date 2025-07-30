<script setup lang="ts">
  import { scrollToAnchor } from '@/shared/utils/scroll-to-anchor'

  const scrollToTop = (e: Event) => {
    const target = e.target as HTMLElement
    const link = target?.closest('[href]') as HTMLElement

    link && scrollToAnchor(link)
  }
</script>

<template>
  <a href="#app" class="btn-up" aria-label="Вернуться в начало страницы" @click.prevent="scrollToTop">
    <span class="btn-up__icon">
      <icon-sprite icon="arrow-up" />
    </span>
  </a>
</template>
