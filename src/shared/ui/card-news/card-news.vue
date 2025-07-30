<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    title: string
    badge: string
    date?: string
    img?: string | null
    imgWebp?: string | null
    imgFirst?: { [key: string]: [string | null,  string | null] } | null
    alt?: string
    link: string
    isLatestNews?: boolean
  }>()

  const formattingDate = (date: string) => {
    const values = date.split(' ')

    return {
      num: values[0],
      text: values[1]
    }
  }
</script>

<template>
  <article class="card-news">
    <NuxtLink :to="link" class="card-news__link">
      <strong class="card-news__badge">{{ badge }}</strong>

      <img-media
        v-if="isLatestNews && imgFirst"
        class="card-news__pic"
        :public-path="PUBLIC_REMOTE"
        :sources="[
          {
            w: 358, media: '(max-width: 767px)',
            img: [imgFirst['358'], imgFirst['716']]
          },
          {
            w: 720, media: '(min-width: 768px) and (max-width: 1279px)',
            img: [imgFirst['720'], imgFirst['1440']]
          },
          {
            w: 918, media: '(min-width: 1280px)',
            img: [imgFirst['918'], imgFirst['1836']]
          },
        ]"
        :fallback="imgFirst['918'][0]"
        width="918"
        height="480"
      />

      <picture v-else class="card-news__pic">
        <source v-if="imgWebp" :srcset="`${PUBLIC_REMOTE}` + imgWebp" type="image/webp">
        <img :src="`${PUBLIC_REMOTE}` + img" :alt="alt" loading="lazy">
      </picture>

      <div class="card-news__info">
        <h4 class="card-news__title">
          <strong class="card-news__title-text" v-html="title" />

          <span
            v-if="isLatestNews"
            class="card-news__decor-arrow"
            aria-hidden="true"
          >
            <icon-sprite icon="arrow-ur" class="card-news__decor-arrow-icn" />
          </span>
        </h4>

        <UiDate
          v-if="date"
          :date="formattingDate(date)"
          class="card-news__date"
        />
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="scss">
  @import './styles';
</style>
