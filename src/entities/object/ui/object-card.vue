<script setup lang="ts">
  import { OBJECT_PAGE_URL } from '../config'
  import { PUBLIC_REMOTE } from '@/shared/config'
  import type { ObjectItem } from '../types'
  import { formatPrice } from '@/shared/utils/format-data/format-price'

  defineProps<ObjectItem>()
</script>

<template>
  <div :class="[cls['object-card'], {[cls['object-card--booked']]: free !== 'AVAILABLE'}]">
    <div :class="cls['plan']">

      <picture v-if="image">
        <!-- <source :scrset="`${image[380][0]} 380w, ${image[760][0]} 760w`"> -->
        <!-- <img :src="`${image[380][0]}`" alt="планировка апартаментов"> -->
        <img :src="`${PUBLIC_REMOTE}/${image}`" alt="планировка апартаментов">
      </picture>

      <img-placeholder
        v-if="!image"
        class="img-placeholder--m img-placeholder--yellow"
      />

      <div :class="cls['plan__overlay']">
        <span :class="cls['plan__overlay-icon']">
          <icon-sprite icon="zoom" />
        </span>
      </div>
    </div>

    <div :class="cls['features']">
      <div :class="[cls['feature'], cls['feature--square']]">
        <span :class="cls['object-card__title']">Площадь</span>

        <div :class="cls['feature__value']">
          <span>{{ total_area }}</span>
          <span :class="cls['feature__unit']">м²</span>
        </div>
      </div>

      <div :class="cls['features__list']">
        <div v-if="floor" :class="[cls['feature'], cls['feature--floor']]">
          <span :class="cls['object-card__title']">Этаж</span>

          <span :class="cls['feature__value']">
            <span>{{ floor }}</span>
            <span :class="cls['feature__unit']">этаж</span>
          </span>
        </div>

        <div v-if="rooms.value" :class="[cls['feature'], cls['feature--type']]">
          <span :class="cls['object-card__title']">тип</span>

          <span :class="cls['feature__value']">
            <span>{{ rooms.value }}</span>
            <span v-if="rooms.unit" :class="cls['feature__unit']">к</span>
          </span>
        </div>

        <div v-if="window" :class="[cls['feature'], cls['feature--view']]">
          <span :class="cls['object-card__title']">виды</span>

          <span v-if="window" :class="cls['feature__value']">
            <span :class="cls['feature__icon']">
              <img
                v-if="window.icon"
                :src="`${PUBLIC_REMOTE}${window.icon}`"
                :lt="window.name"
              >
              <!-- <icon-sprite :icon="window.icon" /> -->
            </span>
            <span v-if="window.name" :class="cls['feature__unit']">{{ window.name }}</span>
          </span>
        </div>
      </div>
    </div>

    <div v-if="price[0]" :class="cls['price']">
      <span :class="cls['object-card__title']">стоимость</span>

      <div v-if="price[1]" :class="[cls['price__value'], cls['price__value--old']]">
        <span>{{ formatPrice(price[1]) }}</span>
        <span :class="cls['price__unit']">руб.</span>
      </div>

      <div :class="cls['price__value']">
        <span>{{ formatPrice(price[0]) }}</span>
        <span :class="cls['price__unit']">руб.</span>
      </div>
    </div>

    <NuxtLink
      v-if="free"
      :href="`${OBJECT_PAGE_URL}${number}`"
      :class="cls['link']"
    >
      <span class="visually-hidden">перейти на страницу аппартамента № {{ number }}</span>
    </NuxtLink>

    <div v-if="free !== 'AVAILABLE'" :class="cls['booked']">
      <span :class="cls['booked__icon']">
        <icon-sprite icon="lock" />
      </span>
      <span :class="cls['booked__text']">{{ free === 'BOOKED' ? 'Забронировано' : 'Продано'}}</span>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
