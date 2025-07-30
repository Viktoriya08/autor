<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'
  import IconInline from '@/shared/ui/icon-inline'

  type APIData = {
    image1: ImagePaths
    image2: ImagePaths
    [key: string]: string | ImagePaths
  }

  const data = await useAPI<APIData>('api/v1/main/people')

  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  // const isClient = import.meta.client

  const currContent = computed(() => {
    return  data.value ? {
        heading: typeViewport?.value === 'mobile' ? data.value.title_mobile : data.value.title,
        title: typeViewport?.value === 'mobile' ? data.value.text_mobile : data.value.text,
        subtitle: typeViewport?.value === 'mobile' ? data.value.title_video_mobile : data.value.title_video,
      } : null
  })
</script>

<template>
  <section id="section-people" class="section-people" data-switch-theme="brown-promo">
    <div class="wrapper">
      <div class="section-people__grid">
        <h2
          v-if="currContent && currContent.heading"
          v-split-text:lines,chars
          v-animate-text:char
          class="section-people__heading title title--page"
          v-html="currContent.heading"
        />

        <p
          v-if="currContent && currContent.title"
          v-split-text:lines
          v-animate-text:line
          class="section-people__title caption caption--xl"
          v-html="currContent.title"
        />

        <!-- убрали text--sm по просьбе клиента -->
        <div
          v-if="data && data.text2"
          v-split-text:lines
          v-animate-text:line
          class="section-people__text text"
          v-html="data.text2"
        />

        <div class="section-people__media">
          <IconInline name="line_people" class="line-svg"/>

          <div class="item item--left" >
            <div
              v-animate-text:line
              class="tag tag--left">

              <span v-split-text:lines class="tag__elem">искренние</span>
              <span v-split-text:lines class="tag__elem">эмоции</span>
            </div>

            <div class="item__video" data-parallax="parent" data-animate="translate-y" data-from="-10px" data-to="20px">
              <video
                v-if="data && data.video1"
                width="228"
                height="196"
                muted
                loop
                autoplay
                playsinline
                disablepictureinpicture
                data-param="-5"
                data-parallax="type-1"
              >
                <source :src="`${PUBLIC_REMOTE}${data.video1}`" type="video/mp4">
              </video>
            </div>
          </div>

          <div class="item item--center" >
            <div class="item__img" data-parallax="parent" data-animate="translate-y" data-from="20px" data-to="-50px">
              <img-media
                v-if="data && data.image1"
                :public-path="PUBLIC_REMOTE"
                :sources="[
                  {
                    w: 460,
                    img: [data.image1['460'], data.image1['920']]
                  },
                ]"
                :fallback="data.image1['460'][0]"
                width="460"
                height="586"
                alt=""
                data-param="10"
                data-parallax="type-1"
                loading="lazy"
              />
            </div>
          </div>

          <div class="item item--right" >
            <div class="item__img" data-parallax="parent" data-animate="translate-y" data-from="10px" data-to="-20px">
              <img-media
                v-if="data && data.image2"
                :public-path="PUBLIC_REMOTE"
                :sources="[
                  {
                    w: 290,
                    img: [data.image2['290'], data.image2['580']]
                  },
                ]"
                :fallback="data.image2['290'][0]"
                width="290"
                height="230"
                alt=""
                data-param="-5"
                data-parallax="type-1"
                loading="lazy"
              />
            </div>

            <div
              v-animate-text:line
              class="tag tag--left"
              data-split-text="words">

              <span
                v-split-text:lines
                class="tag__elem">душевное
              </span>

              <span
                v-split-text:lines
                class="tag__elem">сообщество
              </span>
            </div>

          </div>
        </div>

        <div class="section-people__aside">
          <h3
            v-if="currContent && currContent.subtitle"
            v-split-text:lines
            v-animate-text:line
            class="section-people__subtitle subtitle subtitle--sm"
            v-html="currContent.subtitle"
          />

          <div v-if="data && data.video2" class="section-people__aside-video">
            <video
              class="section-people__video"
              width="810"
              height="518"
              muted
              data-animate="zoom-out"
              data-param="1.3"
              autoplay
              loop
              disablepictureinpicture
              playsinline>

              <source :src="`${PUBLIC_REMOTE}${data.video2}`" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
