<script setup lang="ts">
  defineProps<{
    title: string
  }>()

  const elSwiper = ref(null)
  const swiper = useSwiper(elSwiper)

  onMounted(() => {
    if (elSwiper.value) {
      const root = (elSwiper.value as HTMLElement).shadowRoot
      const style = document.createElement('style')

      style.textContent = `.swiper {overflow: visible !important}`
      root?.appendChild(style)
    }
  })
</script>

<template>
  <div :class="cls['carousel']">
    <p :class="cls['carousel__title']">{{ title }}</p>

    <div :class="cls['carousel__controls']">
      <btn-icon
        class="btn-icon--dark-bd btn-icon--s"
        name="arrow-l"
        text="предыдущий слайд"
        @click="swiper.prev()"
      />
      <btn-icon
        class="btn-icon--dark-bd btn-icon--s"
        name="arrow-r"
        text="следующий слайд"
        @click="swiper.next()"
      />
    </div>

    <div :class="cls['carousel__main']">
      <swiper-container
        ref="elSwiper"
        :slides-per-view="'auto'"
        :space-between="'8px'"
      >
        <swiper-slide v-for="slide in [1,2,3]" :key="slide" :style="'width: auto'">
          <slide-object />
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
