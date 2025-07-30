<script setup lang="ts">
  import { listNews } from '../../store'
  import type { NewsItem, ListNews } from '../../model/types'

  const data = await useAPI<ListNews[]>('api/v1/news/')

  const catalog = ref(null)
  const filterNews = new Map()
  let tl: GSAPTimeline

  const typeNews = [
    {key: 'all', name: 'все'},
    {key: 'news', name: 'новости'},
    {key: 'promotions', name: 'акции'},
    {key: 'awards', name: 'премии'},
  ]

  typeNews.forEach((type) => {
    filterNews.set(type.key, [])
  })

  if (import.meta.client) {
    const { $gsap } = useNuxtApp()
    tl = $gsap.timeline()
  }


  const switchTypeNews = (index: number) => {
    if (! tl) {
       return
    }

    tl.clear()

    tl
      .to(catalog?.value?.catalog, {opacity: 0, duration: 0.3, onComplete: () => {
        if (index === 0 && data.value) {
          listNews.value = data.value
        } else {
          listNews.value = filterNews.get(typeNews[index].key)
        }
      }})
      .to(catalog?.value?.catalog, {opacity: 1, duration: 0.3, delay: 0.2})
  }

  if (data.value) {
      listNews.value = data.value

      data.value.forEach((group) => {
        group.items.forEach((item: NewsItem) => {
          const type = item.section_code
          const target = filterNews.get(type)
          const length = target.length

          if (!length) {
            target.push({title: group.title, items: [item]})
          } else {
            const obj = filterNews.get(type)[length - 1]

            if (obj.title === group.title) {
              obj.items.push(item)
            } else {
              target.push({title: group.title, items: [item]})
            }
          }
        })
      })
    }
</script>

<template>
  <main class="news">
    <SectionHead title="новости" class="section-head--news">
      <template #section-head-breadcrumbs>
        <Breadcrumbs :links="[{name: 'новости', url: '#'}]"/>
      </template>

      <template #section-head-info>
        <UiSwitch :triggers="typeNews" theme="yellow" class="news__filters" @switch-item="switchTypeNews"/>
      </template>
    </SectionHead>

    <template v-if="listNews && listNews.length">
      <NewsCatalog
        ref="catalog"
        :list-news="listNews"
      />
    </template>

    <template v-else>
      <section class="news-catalog news-catalog__section news-catalog__section--info">

        <h3 class="news-catalog__section-title">
          <!-- <span class="news-catalog__section-title-content">пока пусто</span> -->
        </h3>

        <div class="card-news card-news--decor"/>
      </section>
    </template>
  </main>
</template>

<style lang="scss">
  @import './styles';
</style>
