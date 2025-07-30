<script setup lang="ts">
  defineProps<{
    error: {
      url?: string
      statusCode?: number
      statusMessage?: string
      message?: string
      stack?: string
      // cause?: any
    }
  }>()

  const err =  defineAsyncComponent(() => import('./src/app/layouts/l-error.vue'))
</script>

<template>
  <err
    :code="error.statusCode"
  />
</template>
