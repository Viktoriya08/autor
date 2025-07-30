<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
</script>

<template>
  <section class="section-callback">
    <div class="section-callback__text-box">
      <hgroup class="section-callback__head">
        <h2 class="section-callback__title">Остались вопросы?</h2>
        <p class="section-callback__descr">Если нужна дополнительная информация или&nbsp;разъяснения, мы с радостью поможем!</p>
      </hgroup>

      <img class="section-callback__decor" :src="`${BASE_URL}/image/bg/offer-3.svg`" alt="">
    </div>

    <div class="section-callback__form-box">
      <form-request />
    </div>
  </section>
</template>

<style lang="scss">
  @import "./styles";
</style>
