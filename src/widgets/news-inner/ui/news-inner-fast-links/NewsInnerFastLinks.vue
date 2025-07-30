<script setup lang="ts">
  import type { FastLink } from '../../model/types'

  defineProps<{
    links: FastLink[]
  }>()

  const formattingDate = (date: string) => {
    return useSplitDate(date)
  }
</script>

<template>
  <menu class="news-inner__fast-links">
    <template v-for="item in links">
      <li
        v-if="item"
        :key="item.type"
        class="news-inner__fast-links-item"
      >
        <NuxtLink :to="item.link" class="news-inner__fast-link">
          <strong v-if="item.type === 'prev'" class="news-inner__fast-link-header">
            <span class="news-inner__fast-link-icn" aria-hidden="true">
              <icon-sprite icon="arrow-l" />
            </span>
            Предыдущая новость
          </strong>

          <strong v-else class="news-inner__fast-link-header">
            <span class="news-inner__fast-link-icn news-inner__fast-link-icn--next" aria-hidden="true">
              <icon-sprite icon="arrow-l" />
            </span>
            Следующая новость
          </strong>

          <div class="news-inner__fast-link-title-box">
            <h3 class="news-inner__fast-link-title" v-html="item.title" />

            <UiDate
              :date="formattingDate(item.date)"
              :custom-class-mods="{
                numElementClassMod: 'news-inner__fast-link-date-num',
                textElementClassMod: 'news-inner__fast-link-date-text',
              }"
              mode="primary"
              class="news-inner__fast-link-date"
            />
          </div>
        </NuxtLink>
      </li>
    </template>
  </menu>
</template>
