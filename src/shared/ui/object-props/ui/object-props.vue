<script setup lang="ts">
  import { formatPrice } from '@/shared/utils/format-data/format-price'

  defineProps<{
    name: string
    price: string[]
    rooms: string
    params: { name: string, value: string}[]
    chips: { icon: string, name: string }[]
  }>()
</script>

<template>
  <div :class="cls['object-props']">
    <div :class="cls['header']">
      <div :class="cls['heading']">
        <p :class="cls['heading__title']">
          <span class="caption--xs">апартаменты №</span>
        </p>

        <p :class="cls['heading__name']">
          <span>{{ name }}</span>
        </p>
      </div>

      <div :class="cls['price']">
        <span v-if="price[0]" :class="[cls['price__value'], 'caption--xxl']">
          <span>{{ formatPrice(price[0]) }}</span>
          <span class="caption--xs">руб.</span>
        </span>

        <span v-if="price[1]" :class="[cls['price__value'], cls['price__value--old']]">
          <span>{{ formatPrice(price[1]) }}</span>
          <span class="caption--xs">руб.</span>
        </span>
      </div>
    </div>

    <ul :class="[cls['props'], 'caption--sm']">
      <li v-if="rooms" :class="cls['prop']">
        <span>комнаты</span>
        <span>{{ rooms }}</span>
      </li>

      <template v-for="param, index in params" :key="index">
        <li v-for="value, key in param" :key="key" :class="cls['prop']">
          <span>{{ key }}</span>
          <span>{{ value }}</span>
        </li>
      </template>

    </ul>

    <div :class="cls['chips']">
      <Chips
        v-for="item, index in chips"
        :key="index"
        :icon="item.icon"
        :name="item.name"
      />
    </div>
  </div>
</template>

<style lang="scss" module="cls">
@import './style';
</style>
