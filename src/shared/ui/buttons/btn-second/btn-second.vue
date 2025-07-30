<script setup lang="ts">
  defineProps<{
    icon: string,
    text: string,
    href?: string
  }>()
</script>

<template>
  <a v-if="href" :href="href" class="btn-second">
    <span>{{ text }}</span>
    
    <span class="btn-second__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </a>

  <button v-else class="btn-second">
    <span>{{ text }}</span>

    <span class="btn-second__icon">
      <icon-sprite :icon="icon"/>
    </span>
  </button>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
