<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'

  const data = {
    visualLink: {
      title: 'Выбор <br>на этаже',
      link: '/floors',
      img: '/image/choice-links/pic-floor.svg',
      alt: 'дом',
      icon: 'eye'
    },
    paramLink:  {
      title: 'Выбор по параметрам',
      link: '/objects',
      img: '/image/choice-links/pic-filter.svg',
      alt: 'горы',
      icon: 'filters'
    },
  }

</script>

<template>
  <section class="choice-links" data-switch-theme="blue-promo">

    <div class="choice-links__wrapper" >

      <div v-for="item, index in data" :key="index" class="choice-links__box">
        <BtnIcon :name="item.icon" aria-hidden="true" class="btn-icon--size-s btn-icon--bg choice-links__link" :href="item.link"/>

        <h2 class="wrapper choice-links__title" v-html="item.title"/>

        <div class="choice-links__bg">
          <img class="choice-links__img" :src="`${BASE_URL}${item.img}`" width="620" height="430" :alt="item.alt" loading="lazy">
        </div>
      </div>

    </div>
  </section>

</template>

<style lang="scss">
  @import './styles';
</style>
