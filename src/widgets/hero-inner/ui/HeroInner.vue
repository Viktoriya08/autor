<script setup lang="ts">
  import { scrollToAnchor } from '@/shared/utils/scroll-to-anchor'
  // import { heroInfoTable } from '../data/data'
  import { PUBLIC_REMOTE } from '@/shared/config'
  import type { Indicator } from '@/pages/investments/types/index'

  enum imgType {
    JPG = 0,
    WEBP = 1
  }

  interface imgProps {
    390?: Array<[string | null, string | null]>
    780?: Array<[string | null, string | null]>
    768?: Array<[string | null, string | null]>
    1536?: Array<[string | null, string | null]>
    1920?: Array<[string | null, string | null]>
    3840?: Array<[string | null, string | null]>
  }

  const scrollOffset = 64

  const scrollto = (e: Event) => {
    const eTarget = e.target as HTMLElement
    const a = eTarget.closest('[href]') as HTMLElement

    if (a) {
      scrollToAnchor(a, scrollOffset)
    }
  }

  defineProps<{
      title?: string,
      infoData?: Array<Indicator>,
      img?: imgProps
    }>()
</script>

<template>
  <section class="hero-inner">
    <div class="wrapper hero-inner__wrapper">

      <div class="hero-inner__breadcrumbs">
        <slot name="hero-inner-breadcrumbs"/>
      </div>

      <div class="hero-inner__grid">
        <h1 class="hero-inner__title">{{ title }}</h1>

        <div class="hero-inner__content">
          <div class="hero-inner__text">
            <slot name="hero-inner-text"/>
          </div>

          <BtnIcon
            name="arrow-d"
            aria-hidden="true"
            class="btn-icon--blur btn-icon--size-m hero-inner__btn"
            href="#section-next"
            @click.prevent="scrollto($event)"
          />
        </div>

        <div v-if="infoData" class="hero-inner__data">
          <div class="hero-inner__data-title">показатели <br> доходности</div>

          <div class="hero-inner__data-grid">
            <div v-for="(elem, index) in infoData" :key="index" class="hero-inner__data-elem">
              <div class="hero-inner__data-name" v-html="elem.title" />

              <div class="hero-inner__data-data">
                <span class="hero-inner__data-text hero-inner__data-text--prefix">от</span>
                <span class="hero-inner__data-numbers">{{ elem.number }}</span>
                <span class="hero-inner__data-text">{{ elem.unit }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="img && img !== undefined" class="hero-inner__bg">
      <picture class="hero-inner__img">
        <source
          media="(max-width: 1279px) and (orientation: portrait)"
          :srcset="`${PUBLIC_REMOTE}${img[768]?.[imgType.WEBP]} 768w, ${PUBLIC_REMOTE}${img[1536]?.[imgType.WEBP]} 1536w`"
          type="image/webp"
        >

        <source
          media="(max-width: 1279px) and (orientation: portrait)"
          :srcset="`${PUBLIC_REMOTE}${img[768]?.[imgType.JPG]} 768w, ${PUBLIC_REMOTE}${img[1536]?.[imgType.JPG]} 1536w`"
          type="image/jpg"
        >

        <source
          :srcset="`${PUBLIC_REMOTE}${img[1920]?.[imgType.WEBP]} 1920w, ${PUBLIC_REMOTE}${img[3840]?.[imgType.WEBP]} 3840w`"
          type="image/webp"
        >

        <img class="" :src="`${PUBLIC_REMOTE}${img[1920]?.[imgType.JPG]}`" alt="Инвестиции" width="1920" height="1600" loading="lazy">
      </picture>

      </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
