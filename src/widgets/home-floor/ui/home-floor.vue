<script setup lang="ts">
  import { floors } from '../data/data'
  import { updateFloorInfo, toggleVisibilityFloorInfo } from '@/widgets/floor-info'

  defineProps<{
    data: any
  }>()

  const linkToFloorPage = (index: number) => {
    navigateTo(`/floors/${index}`)
  }
</script>

<template>
  <div :class="cls['home-floor']">
    <img :class="cls['home-floor__home']" src="@images/filter-home/home-1146.png" alt="дом">

    <div :class="cls['home-floor__floors']">
      <svg viewBox="0 0 894 416" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          v-for="floor, index in floors"
          :key="index"
          :d="floor.path"
          :data-id="floor.id"
          :data-active="data[index].active"
          @mouseenter="toggleVisibilityFloorInfo(true); updateFloorInfo(floor.id)"
          @mouseleave="toggleVisibilityFloorInfo(false)"
          @click="data[index].active ? linkToFloorPage(floor.id) : ''"
        />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
