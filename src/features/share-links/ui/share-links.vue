<script setup lang="ts">
  import { useShareLinks } from '../model/useShareLinks'

  defineProps<{
    mod?: string
    linkSize: string
    linkTheme: string
    linkMod?: string
  }>()

  const { links, copyLink } = useShareLinks()
</script>

<template>
  <div :class="[cls['list-share'], { [cls[`list-share--${mod}`]]: mod }]">
    <link-share
      v-for="link, index in links"
      :key="index"
      :text="link.text"
      :icon="link.icon"
      :href="link.href"
      :mod="linkMod"
      :class="[
        `link-share--${linkSize}`,
        `link-share--${linkTheme}`,
      ]"
      target="_blank"
    />

    <link-share
      text="ссылка"
      icon="link"
      :mod="linkMod"
      :class="[
        `link-share--${linkSize}`,
        `link-share--${linkTheme}`,
      ]"
      @click="copyLink"
    />
  </div>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
