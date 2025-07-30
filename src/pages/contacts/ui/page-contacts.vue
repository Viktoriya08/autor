<script lang="ts" setup>
  import { theme } from '@/shared/theme'

  useSeo('contacts')

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.blue.class],
    }
  })
</script>

<template>
  <Contacts/>
</template>
