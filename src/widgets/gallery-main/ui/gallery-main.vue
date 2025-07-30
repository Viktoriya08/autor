<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'
  import { useGalleryMain } from '../model/useGalleryMain'
  import type { SwiperContainer } from 'swiper/element'

  const containerRef = ref(null)

  const data = await useAPI('api/v1/main/gallery')

  const {
    isFullscreen,
    currentSlideIndex,
    closeFullscreen,
    slideNext,
    slidePrev,
    // getParamImage
  } = useGalleryMain(containerRef)
</script>

<template>
  <section class="gallery-main" data-switch-theme="brown-promo">
    <div class="wrapper">
      <div class="gallery-main__head">
        <h2 v-if="data && data.title" class="gallery-main__title" >{{ data.title }}</h2>

        <div class="gallery-main__slider-btns">
          <btn-icon
            name="arrow-l"
            class="btn-icon--brown btn-icon--slider gallery-main__slider-btn"
            @click="slidePrev"
          />

          <btn-icon
            name="arrow-r"
            class="btn-icon--brown btn-icon--slider gallery-main__slider-btn"
            @click="slideNext"
          />
        </div>
      </div>

      <div v-if="data && data.images" class="gallery-main__slider">
        <swiper-container
          ref="containerRef"
          slides-per-view='auto'>

          <swiper-slide
            v-for="(slide, index) in data.images"
            :key="index"
            :class="['swiper-slide', {[`swiper-slide--${slide.size}`]: slide.size}]">
            <!-- :style="'width: auto'"  -->

            <div :class="['gallery-main__slide', {[`gallery-main__slide--${slide.size}`]: slide.size}]">

              <img-sizes
                :public-path="PUBLIC_REMOTE"
                :img="slide.image"
                :alt="slide.alt"
                sizes="(max-width: 767px) 430px, 1070px"
                loading="lazy"
              />
              <!-- v-bind="getParamImage(slide.size)" -->

              <!-- <a :data-id="index" href="#" class="section-gallery__link " title="смотреть фото подробнее" @click.prevent="openModal">
                <span class="section-gallery__icon">
                  <SpriteSymbol name="zoom" />
                </span>
              </a> -->
            </div>
          </swiper-slide>
        </swiper-container>
      </div>

      <link-base
        v-if="data && data.text"
        class="link-base--flex link-base--s link-base--yellow gallery-main__info"
        :text="data.text"
        icon="arrow-r"
        @click="slideNext"
      />
    </div>

    <Teleport defer to="#modals">
      <Transition name="gallery-fullscreen">
        <gallery-fullscreen
          v-if="isFullscreen"
          :slides="data.images"
          :current-slide-index="currentSlideIndex"
          @close="closeFullscreen"
        />
      </Transition>
    </Teleport>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
