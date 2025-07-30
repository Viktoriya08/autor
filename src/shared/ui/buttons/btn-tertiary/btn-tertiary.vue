<script setup lang="ts">
  defineProps<{
    icon?: string,
    href?: string
    text: string,
  }>()
</script>

<template>
  <nuxt-link v-if="href" :href="href" class="btn-tertiary">
    <span class="btn-tertiary__text">{{ text }}</span>

    <span v-if="icon" class="btn-tertiary__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </nuxt-link>

  <button v-else class="btn-tertiary">
    <span class="btn-tertiary__text">{{ text }}</span>

    <span v-if="icon" class="btn-tertiary__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
