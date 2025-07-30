<script setup lang="ts">
  import type { InfoTableItem } from './config/types'

  defineProps<{
    infoData?: InfoTableItem[]
  }>()
</script>

<template>
  <div class="info-table">
    <div
      v-for="({
        id, name, term, contribution, text, payment
      }) in infoData"
      :key="id"
      class="info-table__elem">

      <div class="info-table__name info-table__item">
        <div class="info-table__title">рассрочка</div>

        <div class="info-table__info info-table__info--l">{{ name }}</div>
      </div>

      <div class="info-table__term info-table__item">
        <div class="info-table__title">срок</div>

        <div class="info-table__info">
          <span class="info-table__info info-table__info--m">{{ term.number }}</span>&nbsp;&nbsp;{{ term.unit }}
        </div>
      </div>

      <div class="info-table__contribution info-table__item">
        <div class="info-table__title">перв. взнос</div>

        <div class="info-table__info">
          <span class="info-table__info info-table__info--m">{{ contribution.number }}</span>&nbsp;&nbsp;{{ contribution.unit }}
        </div>
      </div>

      <div class="info-table__text info-table__item">
        <div class="info-table__title">особенности</div>

        <div class="info-table__info info-table__info--text" >
          <span>{{ text }}</span>
        </div>
      </div>

      <div class="info-table__payment info-table__item">
        <div class="info-table__title">платеж в месяц</div>

        <div v-if="payment" class="info-table__info">
          <span class="info-table__info info-table__info--m">{{ payment.number }}</span>&nbsp;&nbsp;{{ payment.unit }}
        </div>

        <div v-else class="info-table__info">
          <span class="info-table__info info-table__info--m"> _ </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
