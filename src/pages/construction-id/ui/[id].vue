<script lang="ts" setup>
  import { theme } from '@/shared/theme'

  const route = useRoute()
  const id = route.path.split('/').filter(Boolean).pop()

  const data = await useAPI(`api/v1/construction/${id}`)
  const dataInner = data.value

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.bluePromo.class],
    }
  })
</script>

<template>
  <ConstructionInner
    v-if="dataInner"
    :month='dataInner?.month'
    :year='dataInner?.year'
    :img-arr='dataInner?.image'
    :menu-links='dataInner?.links'
  />
</template>
