<script setup lang="ts">
  import type { YourManagerData } from '@/shared/types'
  import { stepsData as stepsDataDefault } from './data'

  const props = defineProps<{
    title?: string,
    steps?: string[],
    managerData?: YourManagerData
  }>()

  const stepsData = computed(() => props.steps ?? stepsDataDefault)
</script>

<template>
  <section class="steps" data-switch-theme="bronze-promo">
    <div class="wrapper wrapper--s">
      <h2 class="steps__title">{{ title }}</h2>

      <ol class="steps__list">
        <li v-for="elem in stepsData" :key="elem" class="steps__item">
          <div class="steps__text" v-html="elem"/>
        </li>
      </ol>

      <YourManager v-if="managerData" />
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
