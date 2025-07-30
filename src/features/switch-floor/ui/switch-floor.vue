<script setup lang="ts">
  import { useSwitchFloor } from '../model/useSwitchFloor'

  const props = defineProps<{
    store: any
  }>()

  const {
    changeFloor,
    nextFloor,
    prevFloor
  } = useSwitchFloor(props.store)
</script>

<template>
  <div :class="cls['nav-floor']">
    <btn-icon
      :class="['btn-icon--dark-bd', 'btn-icon--m', cls['nav-floor__next']]"
      name="arrow-u"
      text="следующий слайд"
      @click="nextFloor"
    />

    <div :class="[cls['nav-floor__main']]">
      <p :class="cls['nav-floor__title']">этаж</p>

      <div :class="cls['nav-floor__controls']">
        <label
          v-for="n in (store.count - 1)"
          :key="store.count - n"
          :class="cls['nav-floor__control']"
          @click="changeFloor(store.count - n + 1)">

          <span :class="cls['nav-floor__control-text']">{{ store.count - n + 1 }}</span>

          <input
            name="floor"
            type="radio"
            :value="store.count - n + 1"
            class="visually-hidden"
            :checked="store.count - n + 1 === store.current"
          >
        </label>
      </div>
    </div>

    <btn-icon
      :class="['btn-icon--dark-bd', 'btn-icon--m', cls['nav-floor__prev']]"
      name="arrow-d"
      text="предыдущий слайд"
      @click="prevFloor"
    />
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
