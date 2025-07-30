<script setup lang="ts">
  defineProps<{
    id: string
    square: string
    floor: { value: string, unit: boolean }
    type: { value: string, unit: boolean }
    view: { icon: string, text: string }
    price: string[]
    booked?: boolean
    image: {
      [key: string]: string[]
    }
  }>()
</script>

<template>
  <div :class="[cls['card-object'], {[cls['card-object--booked']]: booked}]">
    <div :class="cls['plan']">

      <picture>
        <source :scrset="`${image[380][0]} 380w, ${image[760][0]} 760w`">
        <img :src="`${image[380][0]}`" alt="планировка апартаментов">
      </picture>

      <div :class="cls['plan__overlay']">
        <span :class="cls['plan__overlay-icon']">
          <icon-sprite icon="zoom" />
        </span>
      </div>
    </div>

    <div :class="cls['features']">
      <div :class="[cls['feature'], cls['feature--square']]">
        <span :class="cls['card-object__title']">Площадь</span>

        <div :class="cls['feature__value']">
          <span>{{ square }}</span>
          <span :class="cls['feature__unit']">м²</span>
        </div>
      </div>

      <div :class="cls['features__list']">
        <div v-if="floor.value" :class="[cls['feature'], cls['feature--floor']]">
          <span :class="cls['card-object__title']">Этаж</span>

          <span :class="cls['feature__value']">
            <span>{{ floor.value }}</span>
            <span :class="cls['feature__unit']">этаж</span>
          </span>
        </div>

        <div v-if="type.value" :class="cls['feature']">
          <span :class="cls['card-object__title']">тип</span>

          <span :class="cls['feature__value']">
            <span>{{ type.value }}</span>
            <span v-if="type.unit" :class="cls['feature__unit']">к</span>
          </span>
        </div>

        <div :class="[cls['feature'], cls['feature--view']]">
          <span :class="cls['card-object__title']">виды</span>

          <span :class="cls['feature__value']">
            <span :class="cls['feature__icon']">
              <icon-sprite :icon="view.icon" />
            </span>
            <span v-if="view.text" :class="cls['feature__unit']">{{ view.text }}</span>
          </span>
        </div>
      </div>
    </div>

    <div v-if="price[0]" :class="cls['price']">
      <span :class="cls['card-object__title']">стоимость</span>

      <div v-if="price[1]" :class="[cls['price__value'], cls['price__value--old']]">
        <span>{{ price[1] }}</span>
        <span :class="cls['price__unit']">руб.</span>
      </div>

      <div :class="cls['price__value']">
        <span>{{ price[0] }}</span>
        <span :class="cls['price__unit']">руб.</span>
      </div>
    </div>

    <a href="#" :class="cls['link']">
      <span class="visually-hidden">перейти на страницу обьекта</span>
    </a>

    <div v-if="booked" :class="cls['booked']">
      <span :class="cls['booked__icon']">
        <icon-sprite icon="lock" />
      </span>
      <span :class="cls['booked__text']">Забронировано</span>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
