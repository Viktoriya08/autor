<script setup lang="ts">
  defineProps<{
    title?: string,
  }>()
</script>

<template>
  <div class="section-head">
    <div class="wrapper">
      <div class="section-head__grid">
        <div class="section-head__left">
          <div class="section-head__breadcrumbs">
            <slot name="section-head-breadcrumbs" />
          </div>

          <h1 class="section-head__title">{{ title }}</h1>
        </div>

        <div class="section-head__right">
          <slot name="section-head-info" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
