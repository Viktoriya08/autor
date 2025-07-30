<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'
  // import { actionMetric } from '@/shared/utils/metrika'

  type APIData = {
    image: ImagePaths
    parametrs_apartment: { [key: string]: string }[]
    [key: string]: string | ImagePaths | { [key: string]: string }[]
  }

  const data = await useAPI<APIData>('api/v1/main/apartment')
  const btn = useTemplateRef('btn')
  const img = useTemplateRef('img');

  const links = [
    'objects?FILTER_TAGS=sea',
    'objects?FILTER_TAGS=mountains'
  ]

  onMounted(() => {
    const { $gsap } = useNuxtApp()
    const parent = document.querySelector('#anim')
    const hViewport = window.innerHeight

    if (parent && btn.value) {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          pin: false,
          start: `bottom bottom+=500px`,
          end: "bottom bottom",
          scrub: true,
        },
      })

      tl.fromTo(btn.value, {opacity: 0, y: 50}, {opacity:1, y:0, ease: "power2.inOut"})
    }

    if (parent && img.value) {
      const tl = $gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          pin: false,
          start: `bottom bottom+=${hViewport}`,
          end: `bottom center`,
          scrub: true,
        },
      })

      tl.fromTo(img.value, {y: 200}, {y:0, ease: "power1.in"})
    }
  })
</script>

<template>
  <section id="apartment" ref="parent" class="section-apartment">
    <div class="section-apartment__head">
      <div class="section-apartment__title">
        <h2 v-if="data && data.name" class="heading">{{ data.name }}</h2>
        <p v-if="data && data.text_mobile" class="section-apartment__subtitle">{{ data.text_mobile }}</p>
      </div>

      <div v-if="data && data.parametrs_apartment" class="section-apartment__counter">
        <CardCounter
          v-for="item, index in data.parametrs_apartment"
          :key="index"
          :count="item.number"
          :text="item.title_mobile"
          :img="item.img"
          :img-webp="item.img_webp"
          :href="links[index]"
        />
      </div>
    </div>

    <div ref="img" class="section-apartment__img">
      <img-media
        v-if="data && data.image"
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

    <div ref="btn" class="section-apartment__btn">
      <BtnRound
        text="выбрать апартаменты"
        icon="arrow"
        href="/objects"
        class="btn-round--m btn-round--blue"
      />
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
