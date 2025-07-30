<script setup lang="ts">
  import { theme } from '@/shared/theme'

  useSeo('news')

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.bronze.class],
    }
  })
</script>

<template>
  <News />
</template>
