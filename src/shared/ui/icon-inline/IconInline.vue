<script setup lang="ts">
  import {
    IconSound as sound,
    Line_3 as line_3,
    Line_4 as line_4,
    Line_5 as line_5,
    LinePeople as line_people,
    IconStore as store,
    IconSwim as swim,
    IconFood as food,
    IconHotel as hotel,
  } from '../icons'

  const icons = new Map([
    ['sound', sound],
    ['line_3', line_3],
    ['line_4', line_4],
    ['line_5', line_5],
    ['line_people', line_people],
    ['store', store],
    ['swim', swim],
    ['food', food],
    ['hotel', hotel],
  ])

  defineProps<{
    name: string
  }>()
</script>

<template>
  <span aria-hidden="true">
    <component :is="icons.get(name)" />
  </span>
</template>
