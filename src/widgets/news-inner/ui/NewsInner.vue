<script lang="ts" setup>
  import type { News } from '../model/types'

  const route = useRoute()
  const id = route.path.split('/').filter(Boolean).pop()

  const data = await useAPI<News>(`api/v1/news/${id}`)

  useHead({
    title: data?.value?.apartment?.seo?.title,
    meta: [
      { name: 'description', content: data?.value?.seo?.description },
      { property: 'og:title', content: data?.value?.seo?.title },
      { property: 'og:description', content: data?.value?.seo?.description },
    ]
  })
</script>

<template>
  <main v-if="data" class="news-inner">
    <div class="news-inner__content">
      <NewsInnerAside
        :date="data.date_news"
      />

      <NewsInnerArticle
        :title="data.title"
        :text="data.text"
        :image="data.image"
      />
    </div>

    <NewsInnerFastLinks
      :links="data.links"
    />
  </main>
</template>

<style lang="scss">
  @import './styles';
</style>
