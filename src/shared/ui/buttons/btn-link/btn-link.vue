<script setup lang="ts">
  defineProps<{
    text: string
    icon?: string
    href?: string
    target?: string
  }>()
</script>

<template>
  <a v-if="href && (target === '_blank')" class="btn-link" :href="href" target="_blank">
    <span>{{ text }}</span>

    <span v-if="icon" class="btn-link__icon">
      <icon-sprite :icon="icon" />
    </span>
  </a>

  <NuxtLink v-else-if="href" class="btn-link" :href="href">
    <span>{{ text }}</span>

    <span v-if="icon" class="btn-link__icon">
      <icon-sprite :icon="icon" />
    </span>
  </NuxtLink>

  <button v-else class="btn-link">
    <span>{{ text }}</span>

    <span v-if="icon" class="btn-link__icon">
      <icon-sprite :icon="icon" />
    </span>
  </button>
</template>
