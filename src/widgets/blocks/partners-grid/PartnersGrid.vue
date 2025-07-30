<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  interface Partners {
    url: string,
    alt: string,
  }

  defineProps<{
    partners?: Partners[]
    }>()
</script>

<template>
  <ul class="partners-grid">
    <li class="partners-grid__elem" v-for="item in partners">
      <div class="partners-grid__img-box">
        <img
          class="partners-grid__img"
          :src="`${PUBLIC_REMOTE}/${item.url}`"
          width="168"
          height="28"
          :alt="`${item.alt}`"
          loading="lazy"
        >
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
  @import './styles';
</style>
