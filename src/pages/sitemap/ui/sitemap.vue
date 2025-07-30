<script setup lang="ts">
  import pages from '../data/data.json'

  useSeoMeta({
    title: 'More Yuva: Разводящая',
  })
</script>

<template>
  <main :class="$style['sitemap']">
    <hgroup :class="$style['sitemap__head']">
      <h1 :class="$style['sitemap__title']">Сайтмап</h1>
      <p :class="$style['sitemap__descr']">Служебная страница. Для размещения ссылок на проектные страницы, чтобы навигация по проекту была удобнее.</p>
    </hgroup>

    <ul :class="$style['sitemap__list']">
      <li
        v-for="{ key, text, href } in pages"
        :key="key"
        :class="$style['sitemap__item']"
      >
        <a :href="href" target="_blank" :class="$style['sitemap__link']">
          <strong :class="$style['sitemap__link-name']">{{ text }}</strong>
          <span :class="$style['sitemap__link-href']">({{ href }})</span>
        </a>
      </li>
    </ul>
  </main>
</template>

<style module lang="scss">
  @import './styles';
</style>
