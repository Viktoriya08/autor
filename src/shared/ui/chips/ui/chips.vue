<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    icon: string
    name: string
  }>()
</script>

<template>
  <span :class="cls['chips']">
    <span :class="cls['icon']">
      <!-- <icon-sprite :icon="icon"/> -->
       <img
        v-if="icon"
        :src="`${PUBLIC_REMOTE}${icon}`"
        alt=""
      >
    </span>

    <span>{{ name }}</span>
  </span>
</template>

<style lang="scss" module="cls">
@import './style.scss';
</style>
