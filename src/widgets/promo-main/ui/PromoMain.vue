<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'
  import IconInline from '@/shared/ui/icon-inline'

  type APIData = {
    image1: ImagePaths
    image2: ImagePaths
    [key: string]: string | ImagePaths
  }

  const data = await useAPI<APIData>('api/v1/main/promo')
  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  const isClient = import.meta.client
  const paint = useTemplateRef('paint')

  onMounted(() => {
    const { $gsap } = useNuxtApp()

    $gsap.timeline({
      scrollTrigger: {
        trigger: paint.value,
        start: `center center`,
        scrub: true,
        onToggle: () => {
          paint.value?.classList.toggle('is-active')
        },
        onEnter: () => {
          paint.value?.classList.add('line-active')
        }
      },
    })
  })
</script>

<template>
  <section id="promo-main" class="promo-main" data-animation="curve" data-switch-theme="brown-promo">
    <div class="promo-main__grid">
      <div class="promo-main__body">
        <h2
          v-if="data && data.name"
          v-split-text:lines,chars
          v-animate-text:char
          class="promo-main__heading heading heading--md">{{ data.name }}</h2>

        <p
          v-if="data && data.title"
          v-split-text:lines
          v-animate-text:line
          class="promo-main__subtitle caption caption--xl"
          v-html="typeViewport === 'mobile' ? data.title_mobile : data.title"
        />
      </div>

      <div class="promo-main__aside">
        <div ref="paint" class="promo-main__media">
          <div
            v-animate-text:line
            class="tag tag--left">

            <span
              v-if="data && data.author_image_left"
              v-split-text:lines
              class="tag__elem">{{ data.author_image_left }}</span>

            <span
              v-if="data && data.name_image_left"
              v-split-text:lines
              class="tag__elem">{{ data.name_image_left }}</span>
          </div>

          <div class="promo-main__paint promo-main__paint--1">
            <img-sizes
              v-if="data && data.image1"
              :public-path="PUBLIC_REMOTE"
              :img="data.image1"
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 56vw, 44vw"
            />
          </div>

          <div class="promo-main__paint promo-main__paint--2">
            <img-sizes
              v-if="data && data.image2"
              :public-path="PUBLIC_REMOTE"
              :img="data.image2"
              sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 56vw, 44vw"
            />
          </div>

          <div
            v-animate-text:line
            class="tag tag--right">

            <span
              v-if="data && data.data_image_right"
              v-split-text:lines
              class="tag__elem">{{ data.data_image_right }}</span>

            <span
              v-if="data && data.caption_image_right"
              v-split-text:lines
              class="tag__elem tag__elem--gap">{{ data.caption_image_right }}</span>
          </div>

          <div class="promo-main__line">
            <IconInline name="line_5" class="line"/>
          </div>
        </div>

        <p
          v-if="data && data.text"
          v-split-text:lines
          v-animate-text:line
          class="promo-main__text text text--md">{{ data.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
