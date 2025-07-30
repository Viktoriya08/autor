<script setup lang="ts">
  import type { IImg } from "@/shared/ui/images";

  defineProps<{
    title: string
    badge: string
    pic: IImg
    date?: {
      num: string
      text: string
    }
    isLatestNews?: boolean
  }>()
</script>

<template>
  <article class="news-card">
    <a href="#" class="news-card__link">
      <strong class="news-card__badge">{{ badge }}</strong>

      <Img
        :name="pic.name"
        :path="pic.path"
        :ext="pic.ext"
        :width="pic.width"
        :height="pic.height"
        :fallback="pic.fallback"
        :sources="pic.sources"
        :alt="title"
        class="news-card__pic"
      />

      <div class="news-card__info">
        <h4 class="news-card__title">
          <strong class="news-card__title-text">{{ title }}</strong>

          <span
            v-if="isLatestNews"
            class="news-card__decor-arrow"
            aria-hidden="true"
          >
            <icon-sprite icon="arrow-ur" class="news-card__decor-arrow-icn" />
          </span>
        </h4>

        <UiDate
          v-if="date"
          :date="{num: date.num, text: date.text}"
          class="news-card__date"
        />
      </div>
    </a>
  </article>
</template>

<style lang="scss">
  @import './styles';
</style>
