<script setup lang="ts">
  import { LinkBase } from '@/shared/ui/links'

  defineProps<{
    title?: string,
    items: { href: string, text: string }[]
  }>()
</script>

<template>
  <div class="list-contacts">
    <p v-if="title" class="list-contacts__title">{{ title }}</p>
    <ul class="list-contacts__list">
      <li v-for="item, index in items" :key="index" class="list-contacts__item">
        <LinkBase
          v-if="item.text"
          class="link-base--m link-base--blue"
          :href="item.href"
          :text="item.text"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
