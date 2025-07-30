<script setup lang="ts">
  import { PUBLIC_REMOTE, BASE_URL } from '@/shared/config'

  type APIData = {
    image: ImagePaths
    [key: string]: string | ImagePaths
  }

  const data = await useAPI<APIData>('api/v1/main/offer')
</script>

<template>
  <section id="offer" class="section-offer" data-switch-theme="blue-promo">
    <div class="wrapper">
      <div class="section-offer__grid">

        <img class="bg-center" :src="`${BASE_URL}/image/bg/offer-3.svg`" loading="lazy" alt="">

        <img-media
          v-if="data && data.image"
          :public-path="PUBLIC_REMOTE"
          :sources="[
            {
              w: 490,
              img: [data.image['490'], data.image['980']]
            },
          ]"
          :fallback="data.image['490'][0]"
          width="490"
          height="344"
          class="img-sea"
          loading="lazy"
        />

        <div class="section-offer__head">
          <h2
            v-if="data && data.title"
            class="title title--md">{{ data.title }}
          </h2>

          <p
            v-if="data && data.text"
            class="section-offer__head-text">{{ data.text }}
          </p>
        </div>

        <div class="section-offer__form-box">
          <div class="section-offer__form">
            <form-request type="offer"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
