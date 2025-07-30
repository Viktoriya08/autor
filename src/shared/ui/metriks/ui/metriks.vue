<script setup lang="ts">
  const data = await useAPI('api/v1/metrika')
</script>

<template>
  <div
    v-if="data"
    class="visually-hidden"
    v-html="data"
  />
</template>
