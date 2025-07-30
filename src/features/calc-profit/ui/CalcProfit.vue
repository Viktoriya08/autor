<script setup lang="ts">
  import modal from '@/widgets/modals/modal/modal.vue'
  import numberWithSpaces from '@/shared/utils/helpers/numberWithSpaces'
  import {calculateProfit, calculateProfitByRentPercent, calculateAccumulatedProfit, calculateProfitPercent} from '../model/calculateProfit'

  defineProps<{
    title?: string,
  }>()

  const refModal = ref<InstanceType<typeof modal> | null>(null)

  const investSum = ref(14250000) // Стоимость вложений
  const investPeriod = ref(10) // Срок вложений

  const openModalRequest = () => {
    if (refModal.value?.openModal) {
      refModal.value.openModal()
    }
  }

</script>

<template>
  <section class="calc-profit">
    <div class="wrapper wrapper--s">
      <h2 class="calc-profit__title" > {{ title }}</h2>

      <div class="calc-profit__calc calc">
        <div class="calc__left">
          <h3 class="calc__title">сколько <br> инвестируете?</h3>

          <div class="calc__inputs">
            <div class="calc__input">
              <span class="calc__input-label">укажите стоимость, рублей</span>
              <range v-model="investSum" class="range--blue range--m" :min="7000000" :max="155000000" :step="250000" right-prefix=""/>
            </div>

            <div class="calc__input ">
              <span class="calc__input-label">срок, лет</span>
              <range v-model="investPeriod" class="range--blue range--m" :min="5" :max="12" :step="1" right-prefix=""/>
            </div>
          </div>

          <p class="calc__text">
            Рассчет доходности предварительный на&nbsp;основе усредненных показателей. <a href="#" class="calc__link" @click.prevent="openModalRequest">Чтобы получить индивидуальные условия — заполните заявку</a>
          </p>
        </div>

        <div class="calc__right">
          <dl class="calc__list">
            <div class="calc__elem">
              <dt class="calc__elem-name">Среднегодовой доход от аренды<span class="calc__elem-n">, <span>₽</span></span></dt>
              <dd class="calc__elem-sum">{{numberWithSpaces(Math.round(calculateProfit(investSum)), ' ')}} <span class="calc__elem-s">₽</span> </dd>
            </div>
            <div class="calc__elem">
              <dt class="calc__elem-name">Рентабельность от сдачи в аренду </dt>
              <dd class="calc__elem-sum">{{calculateProfitByRentPercent(investSum, calculateProfit(investSum))}} %</dd>
            </div>
            <div class="calc__elem">
              <dt class="calc__elem-name">Срок окупаемости <span class="calc__elem-n">, <span>лет</span></span></dt>
              <dd class="calc__elem-sum">{{calculateAccumulatedProfit(investSum, calculateProfit(investSum))}}
                <span class="calc__elem-s">лет</span>
              </dd>
            </div>
            <div class="calc__elem">
              <dt class="calc__elem-name">Доходность </dt>
              <dd class="calc__elem-sum">{{calculateProfitPercent(investSum, investPeriod, calculateProfit(investSum))}}%</dd>
            </div>
          </dl>

          <BtnPrimary class="btn-primary btn-primary--m btn-primary--color-dark-blue calc__btn" text="получить подробный рассчет" @click="openModalRequest" />
        </div>
      </div>
    </div>

    <modal
      ref="refModal"
      mod="aside">

      <form-request class="form--modal" type="invest"/>
    </modal>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
