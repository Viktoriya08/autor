<script setup lang="ts">
  // import IconInline from '@/shared/ui/icon-inline'
  import { BASE_URL } from '@/shared/config'

  interface Links {
    name: string,
    url: string
  }

  defineProps<{
    links?: Links[],
    backward?: {
      nameBack: string,
      urlBack: string,
    },
    theme?: string,
  }>()
</script>

<template>
  <!-- Если крошки в виде ссылки Назад, то передать backward -->
  <template v-if="backward">
    <nav class="breadcrumbs" :class="theme">
      <div class="breadcrumbs__list">
        <NuxtLink :to="backward.urlBack" class="breadcrumbs__link-back">
          <icon-sprite icon="arrow-l" class="breadcrumbs__icon"/>
          <span class="breadcrumbs__text">{{ backward.nameBack }}</span>
        </NuxtLink>
      </div>
    </nav>
  </template>

  <!-- Если крошки в виде списка ссылок, то передать  links[{},{}]-->
  <template v-else>
    <nav class="breadcrumbs" :class="theme">
      <ol class="breadcrumbs__list">
        <li class="breadcrumbs__item">
          <NuxtLink to="/" class="breadcrumbs__link">
            <span class="breadcrumbs__text">главная</span>
          </NuxtLink>
        </li>

        <li
          v-for="(item, index) in links"
          :key="index"
          class="breadcrumbs__item">
          <div
            v-if="index === links.length -1"
            class="breadcrumbs__link">

            <span class="breadcrumbs__text" aria-current="page">{{item.name}}</span>
          </div>

          <a
            v-else
            :href="`${BASE_URL}/${item.url}`"
            class="breadcrumbs__link">

            <span class="breadcrumbs__text"> {{item.name}}</span>
          </a>
        </li>
      </ol>
    </nav>
  </template>
</template>

<style lang="scss">
  @import './styles';
</style>
