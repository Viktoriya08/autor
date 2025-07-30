<script setup lang="ts">
  import { PUBLIC_REMOTE, BASE_URL } from '@/shared/config'
  import { scrollToAnchor } from '@/shared/utils/scroll-to-anchor'

  type APIData = {
    name: string
    text: string
    image: {
      [key: string]: string[]
    }
  }

  const data = await useAPI<APIData>('api/v1/main/')

  const scrollOffset = 64

  const scrollto = (e: Event) => {
    const eTarget = e.target as HTMLElement
    const a = eTarget.closest('[href]') as HTMLElement

    if (a) {
      scrollToAnchor(a, scrollOffset)
    }
  }
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__slider">
      <!-- <SliderMain :duration="1000" :delay="10000" :slides="slides"/> -->
      <img-media
        v-if="data"
        :public-path="PUBLIC_REMOTE"
        :sources="[
          {
            w: 390, media: '(max-width: 767px)',
            img: [data.image['390'], data.image['780']]
          },
          {
            w: 768, media: '(min-width: 768px) and (max-width: 1279px)',
            img: [data.image['768'], data.image['1536']]
          },
          {
            w: 1920, media: '(min-width: 1280px)',
            img: [data.image['1920'], data.image['3840']]
          },
        ]"
        :fallback="data.image['1920'][0]"
        width="1920"
        height="1080"
      />
    </div>

    <div class="hero__main">
      <div class="hero__body">
        <h1 v-if="data && data.name" class="hero__heading heading heading--lg">{{ data.name }}</h1>

        <p v-if="data && data.text" class="hero__descript caption caption--md">{{ data.text }}</p>

        <BtnIcon
          name="arrow-d"
          aria-hidden="true"
          class="btn-icon--blur btn-icon--size-m hero-inner__btn"
          href="#promo-main"
          @click.prevent="scrollto($event)"
        />
      </div>
      <div class="hero__labels">
        <div class="hero__label hero__label--icon">
          <img :src="`${BASE_URL}/image/trophy/1.svg`" alt="">
          <span class="visually-hidden">победитель "рекорды рынка недвижимости 2025"</span>
        </div>
        <!-- <p class="hero__label caption caption--sm">30+ наград</p>
        <p class="hero__label hero__label--icon caption caption--sm">
          <IconInline
            name="numberOne"
            text="№1 рекорды ранка недвижимости 2021"
          />
        </p>
        <p class="hero__label hero__label--icon">
          <IconInline
            name="union"
            text="победа Union"
          />
        </p> -->
        <!-- <p class="hero__label caption caption--sm">Сдача — II&nbsp;кв.&nbsp;2028</p> -->
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
