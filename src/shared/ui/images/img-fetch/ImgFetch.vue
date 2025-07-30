<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'


  type SourceImg = {
    size: number,
    media?: string
  }
  export interface IImgFetch {
    name: string,
    path: string,
    ext: string,
    fallback: string,
    width?: string,
    height?: string,
    webp?: boolean
    alt?: string,
    sources?: SourceImg[]
  }

  const props = defineProps<IImgFetch>()
  const path = `${BASE_URL}/${props.path}/${props.name}`
</script>

<template>
  <picture>
    <template v-for="source of sources">
      <source
        v-if="webp"
        :media="source.media"
        :srcset="`${path}${source.pathWebp_768} ${source.size}w, ${path}${source.pathWebp_1536} ${source.size * 2}w`"
        type="image/webp"
      >
      <source
        :media="source.media"
        :srcset="`${path}${source.path_1920} ${source.size}w, ${path}${source.path_3840} ${source.size * 2}w`"
        type="image/jpg">
    </template>

    <img class="" :src="`${path}${pathWebp_1920}`" :alt="alt" :width="width" :height="height">
  </picture>
</template>
