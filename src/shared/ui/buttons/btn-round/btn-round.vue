<script setup lang="ts">
  defineProps<{
    icon?: string,
    href?: string
    text: string,
  }>()
</script>

<template>
  <!-- <a v-if="href" class="btn-round" :href="href">
    <span v-if="icon" class="btn-round__icon">
      <icon-sprite :icon="icon" />
    </span>

    <span class="btn-round__text">
      {{ text }}
    </span>
  </a> -->

  <NuxtLink v-if="href" class="btn-round" :to="href">
    <span v-if="icon" class="btn-round__icon">
      <icon-sprite :icon="icon" />
    </span>

    <span class="btn-round__text">
      {{ text }}
    </span>
  </NuxtLink>

  <button v-else class="btn-round">
    <span v-if="icon" class="btn-round__icon">
      <icon-sprite :icon="icon" />
    </span>

    <span class="btn-round__text">
      {{ text }}
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
