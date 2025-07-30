<script setup lang="ts">
  defineProps<{
    icon: string
    text: string,
    href?: string
    mod?: string
  }>()
</script>

<template>
  <a v-if="href" class="link-share" :href="href">
    <span class="link-share__icon">
      <icon-sprite :icon="icon"/>
    </span>

    <span
      :class="['link-share__text',  { [mod === 'icon' ? 'visually-hidden' : ''] : mod }]">
      {{ text }}
    </span>
  </a>

  <button v-else class="link-share" type="button">
    <span class="link-share__icon">
      <icon-sprite :icon="icon"/>
    </span>

    <span
      :class="['link-share__text',  { [mod === 'icon' ? 'visually-hidden' : `link-share__${mod}`] : mod }]">
      {{ text }}
    </span>
  </button>
</template>

<style lang="scss">
  @import './style';
</style>
