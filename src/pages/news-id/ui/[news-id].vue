<script lang="ts" setup>
  import { theme } from '@/shared/theme'

  useHead({
    bodyAttrs: {
      class: ['is-internal has-padding-top', theme.bronze.class],
    }
  })
</script>

<template>
  <NewsInner />
</template>
