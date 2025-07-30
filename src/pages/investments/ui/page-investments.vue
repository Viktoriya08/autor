<script lang="ts" setup>
  import { animateCurve } from '@/shared/animation/curve'
  import { theme } from '@/shared/theme'
  import type { APIRequest } from '../types'

  useSeo('investments')

  const data = await useAPI<APIRequest>(`api/v1/invest/`)

  // const dataVideo = await useAPI<APIRequestVideo>(`api/v1/invest/interview`)

  const investHeroReceived = data.value

  const typeViewport: Ref<string> | undefined = inject('typeViewport')

  const currContent = computed(() => {
    return {
      text: typeViewport?.value === 'desktop' ? investHeroReceived?.text : investHeroReceived?.text_mobile,
    }
  })

  onMounted(() => {
    animateCurve()
  })

  useHead({
    bodyAttrs: {
      class: [theme.bronze.class],
    }
  })
</script>

<template>
  <div>
    <!-- <preload /> -->

    <HeroInner
      :title="investHeroReceived?.name"
      :info-data="investHeroReceived?.profit_indicators"
      :img="investHeroReceived?.image"
      class="hero-inner--second">

      <template #hero-inner-breadcrumbs>
        <Breadcrumbs :links="[{name: 'инвесторам', url: ''}]" theme="breadcrumbs--light"/>
      </template>

      <template #hero-inner-text>
        <div v-html="currContent?.text"/>
      </template>
    </HeroInner>

    <div id="section-next" class="wrap-decor" data-animation="curve" >

      <div class="wrap-decor__box">
        <CalcProfit title="Рассчитайте вашу прибыль" />

        <ReviewsSlider />
      </div>
    </div>

    <Interview/>

    <Advantages />

    <DecorPrice
      theme-class="decor-price--oval"
      data-animation="curve"
      />

    <ChoiceLinks/>
  </div>
</template>
