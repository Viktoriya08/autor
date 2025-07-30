<script setup lang='ts'>
  const props = defineProps<{
    store: any
  }>()

  const { sort } = props.store
</script>

<template>
  <select-radio
    v-model="sort"
    :name="store.filterName.sort"
    :items="store.sortItems"
  />
</template>
