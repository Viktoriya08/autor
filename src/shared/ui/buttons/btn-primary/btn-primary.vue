<script setup lang="ts">
  defineProps<{
    icon?: string
    href?: string
    text: string
    fake?: boolean
  }>()
</script>

<template>
  <span v-if="fake" class="btn-primary">
    <span class="btn-primary__text">{{ text }}</span>

    <slot name="btn-content" />

    <span v-if="icon" class="btn-primary__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </span>

  <nuxt-link v-else-if="!fake && href" :href="href" class="btn-primary">
    <span class="btn-primary__text">{{ text }}</span>

    <slot name="btn-content" />

    <span v-if="icon" class="btn-primary__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </nuxt-link>

  <button v-else class="btn-primary">
    <span class="btn-primary__text">{{ text }}</span>

    <slot name="btn-content" />

    <span v-if="icon" class="btn-primary__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
