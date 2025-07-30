<script setup lang="ts">
  // import { reviewsPage } from './data'
  // import type Lenis from 'lenis'
  import type { APIRequest, Review } from './types/index'
  import { PUBLIC_REMOTE } from '@/shared/config'

  const data = await useAPI<APIRequest>('api/v1/invest/investors')

  const { $lenis } = useNuxtApp()
  const reviewsReceived = data.value
  const containerRef = ref(null)
  // const slides = ref(reviewsPage.slides)
  const showModal = ref(false)
  const modalCurrentSlide = ref(0)
  // const scroll: Lenis | undefined = inject('lenis')
  const modalHasVideo = ref(false)

  const swiper = useSwiper(containerRef, {
    breakpoints: {
      320: {
        slidesPerView: 1.27,
      },
      768: {
        slidesPerView: 1.7,
      },
      1280: {
        slidesPerView: 3.05,
      },
      1920: {
        slidesPerView: 4,
      }
    }
  })


  function clickOutside(event: MouseEvent) {
    const modalBox = document.getElementById('modals')
    const modalContent = modalBox?.querySelector('.modal-base__content')
    const eventClick = event.target as HTMLElement;

    if (eventClick === modalContent || modalContent?.contains(eventClick)) return

    closeModal()
  }

  function openModal(event: MouseEvent) {
    const body = document.body
    const eventClick = event.target as HTMLElement;
    modalCurrentSlide.value = eventClick.dataset.id

    if(reviewsReceived?.items[modalCurrentSlide.value].video_review != null) {
      modalHasVideo.value = true
    } else {
      modalHasVideo.value = false
    }

    body?.classList.add('modal-open')

    showModal.value = true;
    $lenis?.stop()

    const modalBox = document.getElementById('modals')
    modalBox?.addEventListener("click", clickOutside, false);
  }

  const closeModal = () => {
    const body = document.body
    showModal.value = false;
    $lenis?.start()

    body?.classList.remove('modal-open')

    const modalBox = document.getElementById('modals')
    modalBox?.removeEventListener("click", clickOutside, false);
  }

  onMounted(() => {
    if (containerRef.value) {
      const root = (containerRef.value as HTMLElement).shadowRoot;
      const style = document.createElement('style');

      style.textContent = `.swiper {overflow: visible !important}`
      root?.appendChild(style)
    }
  })
</script>

<template>

  <section v-if="reviewsReceived" class="reviews-slider">
    <div class="wrapper wrapper--s">
      <div class="reviews-slider__head">
        <h2 class="reviews-slider__title" > {{ reviewsReceived?.name }}</h2>

        <div v-if="reviewsReceived?.text != null" class="reviews-slider__subtitle" v-html="reviewsReceived?.text"/>

        <div class="reviews-slider__slider-btns">
          <BtnIcon text="prev" name="arrow-l" class="btn-icon--blue-trans btn-icon--m" @click="swiper.prev()"/>
          <BtnIcon name="arrow-r" class="btn-icon--blue-trans btn-icon--m" @click="swiper.next()"/>
        </div>
      </div>

      <div class="reviews-slider__slider">
          <swiper-container ref="containerRef">
            <swiper-slide
              v-for="(slide, index) in reviewsReceived?.items"
              :key="index">

              <CardReviews
                :id-card="index"
                :img="slide.image"
                :image-webp="slide.image_webp"
                :name="slide.item_name"
                :invest-sum="slide.invest_text"
                :profit-sum="slide.profit_text"
                :profit-currency="slide.profit_text_rubles"
                :profit-info="slide.profit_text_how">

              <template #card-reviews-link>
                <a title="развернуть отзыв" href="#" :data-id="index" class="card-reviews__link" @click.self.prevent="openModal" />
              </template>

              </CardReviews>
            </swiper-slide>
          </swiper-container>

        <ClientOnly>
        <Teleport defer to="#modals">
          <ModalReviews :show="showModal" @close="closeModal">
            <template #modal-reviews>
              <div class="modal-reviews">
                <div class="modal-reviews__title">
                  {{ reviewsReceived?.items[modalCurrentSlide].title_modal }}
                </div>

                <div class="modal-reviews__box">
                  <div class="modal-reviews__left" :class="{ 'has-video': modalHasVideo }">
                    <template v-if="modalHasVideo">
                      <VideoPlayer  :video-src="reviewsReceived?.items[modalCurrentSlide].video_review" class="modal-reviews__video">
                        <template #video-player-btn>
                          <BtnIcon name="eye" class="btn-icon--default btn-icon--size-s btn-icon--color-yellow-light"/>
                          <span class="modal-reviews__video-text">видео-отзыв</span>
                        </template>
                      </VideoPlayer>
                    </template>

                    <div class="modal-reviews__left-box">
                      <div class="modal-reviews__head">
                        <div class="modal-reviews__name modal-reviews__text">{{ reviewsReceived?.items[modalCurrentSlide].item_name }}</div>
                        <div class="modal-reviews__info">
                          <span class="modal-reviews__text modal-reviews__text--grey">{{ reviewsReceived?.items[modalCurrentSlide].age }}</span>
                          <span class="decor-ellipse"/>
                          <span class="modal-reviews__text modal-reviews__text--grey">{{ reviewsReceived?.items[modalCurrentSlide].city}}</span>
                        </div>
                      </div>
                      <picture v-if="reviewsReceived?.items[modalCurrentSlide].image != null" class="modal-reviews__img">
                        <source :srcset="`${PUBLIC_REMOTE}${reviewsReceived?.items[modalCurrentSlide].image_webp}`" type="image/webp">
                        <img :src="`${PUBLIC_REMOTE}${reviewsReceived?.items[modalCurrentSlide].image}`" alt="аватар-фото" width="88" height="88" loading="lazy">
                      </picture>
                      <div class="modal-reviews__bottom">
                        <div class="modal-reviews__bottom-elem">
                          <span class="modal-reviews__text modal-reviews__text--grey">вложил</span>
                          <span class="modal-reviews__text">{{ reviewsReceived?.items[modalCurrentSlide].invest_detail }}</span>
                        </div>
                        <div class="modal-reviews__bottom-elem">
                          <span class="modal-reviews__text modal-reviews__text--grey">заработал</span>
                          <span class="modal-reviews__text">{{ reviewsReceived?.items[modalCurrentSlide].profit_detail }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="modal-reviews__content" v-html="reviewsReceived?.items[modalCurrentSlide].text_modal"/>
                </div>
              </div>
            </template>
          </ModalReviews>
        </Teleport>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
