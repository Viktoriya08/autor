<script setup lang="ts">
  import {
    // setLenisScroll,
    isTrustedEvent,
    typeViewport
  } from '@/app/providers'

  const config = useNuxtApp().$config

  useHead({
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'},
      { name: 'format-detection', content: 'telephone=no'},
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: `${config.public.apiBase}/upload/sharing/og-1024.jpg` },
      { property: 'twitter:image', content: `${config.public.apiBase}/upload/sharing/og-1024.jpg` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'fb:image', content: `${config.public.apiBase}/upload/sharing/og-500.jpg` },
      { name: 'vk:image', content: `${config.public.apiBase}/upload/sharing/og-510.jpg` },
    ]
  })

  // const lenis = setLenisScroll()

  // provide('lenis', lenis)
  provide('isTrustedEvent', isTrustedEvent)
  provide('typeViewport', typeViewport)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'fade', mode: 'out-in' }"/>
    </NuxtLayout>
  </div>
</template>

<style style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  @import '~/src/app/styles/styles';
  @import '~/src/shared/assets/styles/common';
</style>
