<script lang="ts" setup>
  import { theme } from '@/shared/theme'
  import { animateCurve } from '@/shared/animation/curve'

  import {
    getFirstScreenData,
    getTransactionScreenData,
    getInstallmentScreenData,
    getHowToGetScreenData,
    getManagerData,
    getPriceData,
  } from '../data/data'

  const FirstScreenData = await getFirstScreenData()
  const TransactionScreenData = await getTransactionScreenData()
  const InstallmentScreenData = await getInstallmentScreenData()
  const HowToGetScreenData = await getHowToGetScreenData()
  const ManagerData = await getManagerData()
  // const PriceData = await getPriceData()

  useSeo('payment')

  useHead({
    bodyAttrs: {
      class: [theme.bronze.class],
    }
  })

  onMounted(() => {
    animateCurve()
  })
</script>

<template>
  <div>
    <div class="wrap-sticky">
      <div class="wrap-sticky__sticky">
        <HeroInner
          :title="FirstScreenData.name"
          :img="FirstScreenData?.image">

          <template #hero-inner-breadcrumbs>
            <Breadcrumbs :links="[{name: FirstScreenData.name, url: ''}]" theme="breadcrumbs--light"/>
          </template>

          <template #hero-inner-text>
            <div v-html="FirstScreenData.text" />
          </template>
        </HeroInner>
      </div>

      <div class="wrap-sticky__next">
        <div id="section-next" class="wrap-decor">
          <InfoArticle :title="TransactionScreenData.name" btn-offer>
            <template #info-article-text>
              <h2>{{ TransactionScreenData.subtitle }}</h2>
              <div v-html="TransactionScreenData.text" />
            </template>

            <template #info-article-info>
              <PartnersGrid
                :partners="
                  TransactionScreenData.logoBanks && TransactionScreenData.logoBanks.map(({url, alt}) => {
                    return { url: url, alt: `Логотип «${alt}»` }
                  })
                "/>
            </template>
          </InfoArticle>

          <InfoArticle :title="InstallmentScreenData.name" btn-offer class="info-article--second">
            <template #info-article-text>
              <h2>{{ InstallmentScreenData.text }}</h2>
            </template>

            <template #info-article-info>
              <InfoTable :info-data="InstallmentScreenData.items"/>
            </template>
          </InfoArticle>

          <!-- Оверлей для безопасного перекрытия фона под `mask` -->
          <div class="wrap-decor__safe-overlay wrap-decor__safe-overlay--yellow" aria-hidden="true"/>
        </div>
      </div>
    </div>

    <Steps
      :title="HowToGetScreenData.name"
      :steps="HowToGetScreenData.steps"
      :manager-data="ManagerData"
    />

    <DecorPrice
      theme-class="decor-price--oval"
      data-animation="curve"
    />

    <ChoiceLinks />
  </div>
</template>
