<script setup lang="ts">
  const typeViewport: Ref<string> | undefined = inject('typeViewport')

  const cursorGetText = computed(() => {
    return {
      text: typeViewport?.value === 'desktop' ? 'Наведите' : 'Нажмите',
    }
  })
</script>

<template>
  <div class="custom-cursor" data-cursor>
    <span class="custom-cursor__text">{{cursorGetText.text}} на этаж, <br> чтобы выбрать</span>
  </div>
</template>

<style lang="scss">
  @import './style';
</style>
