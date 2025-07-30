<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
  import { usePromoSecond } from '../model/usePromoSecond'
  import type { APIData } from '../model/types'

  const data = await useAPI<APIData>('api/v1/main/promo_second')

  // const isClient = import.meta.client
  const wrap = useTemplateRef('wrap')
  const over = useTemplateRef('over')
  const refVideo = useTemplateRef('refVideo')
  const subtitle = useTemplateRef('subtitle')

  onMounted(() => {
    usePromoSecond(refVideo.value, over.value, subtitle.value, wrap.value, data)
  })
</script>

<template>
  <section id="promo-second" ref="wrap" class="promo-second">
    <div class="promo-second__main">
      <div ref="over" class="promo-second__over" data-parallax="parent">
        <div class="promo-second__bg promo-second__bg--1">
          <!-- <img :src="`${BASE_URL}/image/bg/promo-1.svg`" width="666" height="380" alt="" data-parallax data-param="-15"> -->
          <img :src="`${BASE_URL}/image/bg/promo-1.svg`" width="666" height="380" loading="lazy" alt="">
        </div>

        <div class="promo-second__bg promo-second__bg--2">
          <!-- <img :src="`${BASE_URL}/image/bg/promo-2.svg`" width="364" height="300" alt="" data-parallax data-param="05"> -->
          <img :src="`${BASE_URL}/image/bg/promo-2.svg`" width="364" height="300" loading="lazy" alt="">
        </div>

        <div class="promo-second__bg promo-second__bg--3">
          <!-- <img :src="`${BASE_URL}/image/bg/promo-3.svg`" width="257" height="138" alt="" data-parallax data-param="15"> -->
          <img :src="`${BASE_URL}/image/bg/promo-3.svg`" width="257" height="138" loading="lazy" alt="">
        </div>

        <div class="promo-second__body">
          <h2
            v-split-text:lines,chars
            v-animate-text:char
            class="promo-second__heading heading heading--md">

            Произведения <br> искусства <br>
            <span>вне <span class="promo-second__heading-icon">времени</span></span>
          </h2>

          <p
            v-if="data && data.title"
            v-split-text:lines
            v-animate-text:line
            class="promo-second__title caption caption--xl"
            v-html="data.title"/>
          <!-- data-parallax data-param="05" -->

          <p
            v-if="data && data.text"
            v-split-text:lines
            v-animate-text:line
            class="promo-second__descript text text--md"
            v-html="data.text"/>

          <!-- data-parallax data-param="-2" -->
        </div>
      </div>

      <div ref="under" class="promo-second__under">

        <div  class="promo-second__video-wrap">
          <div ref="refVideo" class="promo-second__video" />
        </div>

        <p ref="subtitle" class="promo-second__subtitle heading heading--accent">
          <span
            v-split-text:chars>more yuva
          </span>

          <span
            v-split-text:chars>Это...
          </span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
