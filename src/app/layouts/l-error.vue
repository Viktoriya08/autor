<script setup lang="ts">
  defineProps<{
    code?: number
    link?: string
    title?: string
  }>()
</script>

<template>
  <div id="page" class="page">
    <div class="page__core">
      <Header />
      <error-msg
        :code="code"
        :title="title"
        link="/objects"
      />
    </div>

    <div id="menu-main"/>
  </div>
</template>
