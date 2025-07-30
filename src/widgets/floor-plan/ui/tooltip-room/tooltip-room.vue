<script setup lang="ts">
  import { formatPrice } from '@/shared/utils/format-data/format-price'

  withDefaults(defineProps<{
      room?: string
      number?: string
      square?: string
      price?: string[]
      state?: string
    }>(),
    {
      room: '',
      number: '',
      square: '',
      price: () => [''],
      state: 'AVAILABLE'
    }
  )
</script>

<template>
  <div :class="cls['tooltip-room']">
    <button
      :class="cls['tooltip-room__btn']"
      type="button">

      <icon-sprite
        :class="cls['tooltip-room__btn-icon']"
        icon="plus"
      />
    </button>

    <div :class="cls['tooltip-room__popover']" data-tooltip="popover">
      <span :class="cls['tooltip-room__room']"> {{ room }}</span>

      <div :class="cls['tooltip-room__aside']">
        <span :class="cls['tooltip-room__number']">№{{ number }}</span>

        <link-base
          v-if="state === 'AVAILABLE'"
          :href="`/objects/${number}`"
          text="подробнее"
          :class="[cls['tooltip-room__link'], 'link-base--blue', 'link-base--s', 'link-base--underline-reverse']"
        />

        <link-base
          v-if="state !== 'AVAILABLE'"
          :fake="true"
          :text="state === 'BOOKED' ? 'забронировано' : 'продано'"
          :class="[cls['tooltip-room__label'], 'link-base--blue', 'link-base--s']"
        />
      </div>

      <span :class="cls['tooltip-room__prop']">
        <span :class="cls['tooltip-room__prop-title']">Площадь</span>

        <span :class="cls['tooltip-room__prop-value']">
          {{ square }}
          <span :class="cls['tooltip-room__prop-unit']">м²</span>
        </span>
      </span>

      <span :class="cls['tooltip-room__prop']">
        <span :class="cls['tooltip-room__prop-title']">стоимость</span>

        <span :class="cls['tooltip-room__prop-value']">
          {{ formatPrice(price[0]) }}
          <span :class="cls['tooltip-room__prop-unit']">Руб.</span>
        </span>
      </span>

      <NuxtLink
        v-if="state === 'AVAILABLE'"
        :to="`/objects/${number}`"
        :class="cls['tooltip-room__link-full']">
        
        <span class="visually-hidden">перейти на страницу объекта</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
