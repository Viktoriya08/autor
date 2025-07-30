<script lang="ts" setup>
  import { theme } from '@/shared/theme'

  useSeo('construction')

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.bluePromo.class],
    }
  })
</script>

<template>
  <div>
    <Construction/>
    <DecorPrice />
    <ChoiceLinks/>
  </div>
</template>
