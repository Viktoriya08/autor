<script setup lang="ts">
  defineProps<{
    publicPath: string
    alt?: string
    sources: {
      media?: string
      w: number
      img: string[][]
    }[]
    fallback: string
    width?: string
    height?: string
    loading?: 'eager' | 'lazy' | undefined
  }>()
</script>

<template>
  <picture>
    <template v-for="item, index in sources" :key="index">
      <source
        v-if="item.img[0][1] && item.img[1][1]"
        :media="item.media"
        :srcset="`${publicPath}${item.img[0][1]} ${item.w}w, ${publicPath}${item.img[1][1]} ${item.w * 2}w`">

      <source
        v-if="item.img[0][0] && item.img[1][0]"
        :media="item.media"
        :srcset="`${publicPath}${item.img[0][0]} ${item.w}w, ${publicPath}${item.img[1][0]} ${item.w * 2}w`">
    </template>

    <img
      :src="`${publicPath}${fallback}`"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
    >
  </picture>
</template>
