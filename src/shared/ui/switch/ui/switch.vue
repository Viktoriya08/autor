<script setup lang="ts">
import gsap from 'gsap'

defineProps<{
  items: {
    text: string
  }[]
}>()

const emit = defineEmits(['switchItem']);

const btns = useTemplateRef('items')
const bgActive = useTemplateRef('bg-active')

const switchItem = (index: number) => {
  if (!btns.value || !bgActive.value) {
    return
  }

  const itemActive = btns.value[index]
  const wItemActive = itemActive.offsetWidth
  const offsetLeft = itemActive.offsetLeft

  gsap.to(bgActive.value, {
    width: wItemActive,
    x: offsetLeft,
    duration: 0.3,
    ease: 'power2'
  })

  emit('switchItem', index)
}
</script>

<template>
  <div class="switch">
    <div class="switch__inner">
      <span ref="bg-active" class="switch__bg-active" aria-hidden="true"/>

      <button
        v-for="(item, index) in items"
        :key="index"
        ref="items"
        class="switch__item"
        type="button"
        @click="switchItem(index)"
      >
        {{ item.text }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
  @import './style';
</style>
