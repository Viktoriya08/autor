<script lang="ts" setup>
  import { theme } from '@/shared/theme'

  useSeo('documents')

  const data = await useAPI(`api/v1/documents`)

  const documentsRequest = data.value

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.bronze.class],
    }
  })
</script>

<template>
  <Documents
    v-if="documentsRequest"
    :list-docs="documentsRequest?.documents"
    :archive="documentsRequest?.download_all_files"
  />
</template>
