<script setup lang="ts">
  defineProps<{
    text: string
    icon: string
    href?: string
  }>()
</script>

<template>
  <NuxtLink v-if="href" class="btn-ghost" :href="href">
    <span class="btn-ghost__text">{{ text }}</span>

    <span class="btn-ghost__icon">
      <icon-sprite :icon="icon" />
    </span>
  </NuxtLink>

  <button v-else class="btn-ghost">
    <span class="btn-ghost__text">{{ text }}</span>

    <span class="btn-ghost__icon">
      <icon-sprite :icon="icon" />
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
