<script setup lang="ts">
  import { theme } from '@/shared/theme'

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.bluePromo.class],
    }
  })
</script>

<template>
  <error-msg />
</template>
