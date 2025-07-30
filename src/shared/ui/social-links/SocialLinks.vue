<script setup lang="ts">
  import { LinkSocial } from '@/shared/ui/links'
  import { useSocialLinks } from './model/useSocialLinks'

  defineProps<{
    themeClass?: string,
  }>()

  const { links } = useSocialLinks()
</script>

<template>
  <ul class="social-links">
    <li v-for="item in links" :key="item.name" class="social-links__item">
      <LinkSocial :href="item.href" :name="item.name" :text="item.text" :theme="themeClass" />
    </li>
  </ul>
</template>

<style lang="scss">
  @import './styles';
</style>
