<script setup lang="ts">
  // import { advantagesData } from './data'
  // import type { APIRequest } from './types/index'
  // import { API_BASE_URL } from '@/shared/config'

  // const { data } = await useFetch<APIRequest>(`${API_BASE_URL}api/v1/invest/profit`, {
  //   onRequestError({ error }) {
  //     console.log(error)
  //   }
  // })
  const data = await useAPI('api/v1/invest/profit')

  const advantagesReceived = data.value

    defineProps<{
      title?: string,
    }>()
</script>

<template>

  <section v-if="advantagesReceived" class="advantages" data-switch-theme="bronze-promo">
    <div class="wrapper wrapper--s">
      <h2 class="advantages__title" > {{ advantagesReceived?.name }}</h2>

      <ul class="advantages__list">
        <li v-for="(elem, index) in advantagesReceived?.profit_indicators" :key="index" class="advantages__item">
          <div class="advantages__text" v-html="elem"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
