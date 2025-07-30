<script setup lang="ts">
  defineProps<{
    name: string,
    text?: string,
    href?: string,
  }>()
</script>

<template>
  <NuxtLink v-if="href" class="btn-icon" :href="href">
    <span class="btn-icon__icon">
      <icon-sprite :icon="name" />
    </span>

    <span v-if="text" class="visually-hidden">{{ text }}</span>
  </NuxtLink>

  <button v-else class="btn-icon">
    <span class="btn-icon__icon">
      <icon-sprite :icon="name" />
    </span>

    <span v-if="text" class="visually-hidden">{{ text }}</span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
