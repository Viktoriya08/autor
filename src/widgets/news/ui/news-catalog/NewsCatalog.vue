<script setup lang="ts">
  import type { ListNews, NewsItem } from '../../model/types'

  const props = defineProps<{
    listNews: ListNews[]
  }>()

  const catalog = ref(null);

  defineExpose({ catalog })

  const firstNews = computed(() => {
    const date = props.listNews[0].items[0].date_news.split(' ')
    const imgFirst = props.listNews[0].items[0].imageFirst && props.listNews[0].items[0].imageFirst[0]

    return {
      badge: props.listNews[0].items[0].section_name,
      title: props.listNews[0].items[0].name,
      dateNum: date[0],
      dateText: date[1],
      imgFirst: imgFirst || null,
      link: props.listNews[0].items[0].link_to_detail
    }
  })

  const hasOnlyFirst = (items: NewsItem[]) => {
    const isOnlyFirst = items.length === 1 && items[0].tagFirstinSection
    return !isOnlyFirst
  }
</script>

<template>
  <section ref="catalog" class="news-catalog">
    <h2 class="visually-hidden">Новости: каталог</h2>

    <!-- Section: «Latest-News» -->
    <section class="news-catalog__section news-catalog__section--latest-news">
      <h3 class="news-catalog__section-title">
        <UiDate
          :date="{num: firstNews.dateNum, text: firstNews.dateText}"
          mode="primary"
        />
      </h3>

      <card-news
        :badge="firstNews.badge"
        :title="firstNews.title"
        :img-first="firstNews.imgFirst"
        :link="firstNews.link"
        :is-latest-news="true"
        class="news-catalog__news-card-latest"
      />
    </section>

    <!-- Sections list: «News» -->
    <template
      v-for="(groupNews, index) in listNews"
      :key="index">

      <section v-if="hasOnlyFirst(groupNews.items)" class="news-catalog__section">
        <h3 class="news-catalog__section-title">
          <time class="news-catalog__section-title-content">{{ groupNews.title }}</time>
        </h3>

        <ul class="news-catalog__news-list">
          <template
            v-for="{
              name: title,
              section_name: badge,
              date_news: date,
              image: img,
              image_webp: imgWebp,
              link_to_detail: link,
              tagFirst: isFirstNews
            }, key in groupNews.items"
            :key="key">

            <li v-if="!isFirstNews">
              <card-news
                :badge="badge"
                :title="title"
                :date="date"
                :img="img"
                :img-webp="imgWebp"
                :link="link"
                class="news-catalog__news-card"
              />
            </li>
          </template>
        </ul>
      </section>
    </template>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
