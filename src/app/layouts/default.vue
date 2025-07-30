<script setup lang="ts">
  // onMounted(() => {
  //   const { $lenis, nuxtApp } = useNuxtApp()

  //   nuxtApp?.hook('page:loading:end', () => {
  //     $lenis?.scrollTo(0, {
  //       immediate: true,
  //       force: true,
  //       duration: 0,
  //     })
  //   })
  // })
</script>

<template>
  <div id="page" class="page">
    <div class="page__core">
      <Header />
      <slot />
    </div>

    <Footer />
    <Cookies />
    <Toast />

    <div id="menu-main"/>
    <div id="modals"/>
  </div>
</template>
