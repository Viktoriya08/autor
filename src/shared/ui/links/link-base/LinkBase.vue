<script lang="ts" setup>
  defineProps<{
    text?: string,
    icon?: string,
    href?: string
    target?: string
    fake?: boolean
  }>()
</script>

<template>
  <span v-if="fake" class="link-base">
    <span v-if="icon" class="link-base__icon">
      <icon-sprite :icon="icon" />
    </span>

    <span class="link-base__text">{{ text }}</span>
    <slot/>
  </span>

  <a v-else-if="!fake && href && (target === '_blank')" class="link-base" :href="href" target="_blank">
    <span v-if="icon" class="link-base__icon">
      <icon-sprite :icon="icon" />
    </span>

    <span class="link-base__text">{{ text }}</span>
    <slot/>
  </a>

  <NuxtLink v-else class="link-base" :href="href">
    <span v-if="icon" class="link-base__icon">
      <icon-sprite :icon="icon" />
    </span>

    <span class="link-base__text">{{ text }}</span>
    <slot/>
  </NuxtLink>
</template>

<style lang="scss">
  @import './styles';
</style>
