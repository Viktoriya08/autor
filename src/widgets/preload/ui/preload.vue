<script setup lang="ts">
  import { stylePreloader } from '../data/style'
  import { usePreload } from '../model/usePreload'
  import { usePageLoaded } from '../model/usePageLoaded'

  useHead({
    style: [
      {
        children: stylePreloader.replace(/\s+/g, ' '),
        type: 'text/css',
      }
    ]
  })

  const route = useRoute()
  const pageLoaded = usePageLoaded()
  const isPageLoaded = pageLoaded.value.get(route.path)
  const preloader = useTemplateRef('preloader')

  const {
    initPreload,
    isShow,
    loading,
    tlBase,
    tlJump
  } = usePreload()

  onMounted(async () => {
    await nextTick()

    if (!isPageLoaded && preloader.value) {
      initPreload(preloader.value)
    }
  })

  onUnmounted(() => {
    if (tlBase) {
      clearInterval(tlBase)
    }

    if (tlJump) {
      clearInterval(tlJump)
    }
  })

  watch(() => isShow.value, () => {
    if (!isShow.value) {
      pageLoaded.value.set(route.path, true)
    }
  })
</script>

<template>
  <div v-if="!isPageLoaded && isShow" ref="preloader" class="preload">
    <div class="preload__main">
      <div class="preload__img">
        <svg width="137" height="141" viewBox="0 0 137 141" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path :class="{'is-hide': loading.value < 14}" d="M116.61 20.1625C110.467 13.9678 103.172 9.00935 94.9203 5.41876C86.6425 1.82818 77.6966 0 68.2923 0C58.888 0 49.9291 1.81502 41.6643 5.41876C33.4127 9.00935 26.1172 13.9546 19.9743 20.1625C13.8183 26.3573 8.89345 33.6963 5.35703 41.9428C1.8206 50.1498 0.0261958 59.0802 0 68.471H17.3416C17.3809 61.6844 18.7561 55.1345 21.4543 49.0187C24.2048 42.7845 27.9378 37.2474 32.5351 32.552C37.1325 27.8566 42.5812 24.1082 48.7503 21.3988C54.8932 18.7026 61.4552 17.3216 68.2923 17.3216C75.1294 17.3216 81.6914 18.6895 87.8474 21.3988C94.0034 24.0951 99.4653 27.8566 104.063 32.5389C108.66 37.2474 112.406 42.7845 115.143 49.0056C117.842 55.1214 119.23 61.6712 119.256 68.4578H136.598C136.558 59.0671 134.777 50.1498 131.241 41.9296C127.678 33.67 122.766 26.331 116.623 20.1494L116.61 20.1625Z" fill="#C2DCF2"/>
          <path :class="{'is-hide': loading.value < 56}" d="M37.7896 115.271C51.084 115.415 20.1075 110.115 28.1103 105.104C36.6894 100.093 18.7715 100.777 6.13202 100.395C-6.57292 100.014 10.3627 105.104 10.3627 105.104C18.2214 106.248 10.1531 108.602 10.5329 112.535C10.939 116.494 24.4821 115.113 37.8158 115.271H37.7896Z" fill="#C2DCF2"/>
          <path :class="{'is-hide': loading.value < 28}" d="M22.5381 94.5361C23.6383 92.5238 16.0939 91.9846 15.1902 90.9981C14.2602 89.9986 23.4811 90.8798 18.648 85.7767C17.574 84.7376 17.037 84.0011 16.8405 83.4355H2.27567C2.0923 86.0792 -2.13832 90.9455 2.10539 93.6549C7.20046 97.0614 21.4903 96.5616 22.5381 94.5361Z" fill="#C2DCF2"/>
          <path :class="{'is-hide': loading.value < 70}" d="M121.54 109.247C106.464 103.605 89.9082 109.326 96.3786 111.062C102.862 112.799 102.757 116.955 99.4697 117.349C98.8802 117.428 88.6508 118.099 89.0962 121.4C89.5415 124.701 113.904 124.701 109.634 120.243C105.364 115.771 133.393 113.667 121.553 109.247H121.54Z" fill="#C2DCF2"/>
          <path :class="{'is-hide': loading.value < 84}" d="M62.1965 123.038C58.8041 118.474 24.4353 120.21 27.3954 124.708C30.3555 129.193 46.4004 125.997 46.5445 125.787C49.6094 121.144 65.5888 127.615 62.1965 123.051V123.038Z" fill="#C2DCF2"/>
          <path :class="{'is-hide': loading.value < 42}" d="M119.949 84.0083C116.557 84.4029 108.934 85.2973 115.614 90.1636C115.876 90.3609 116.243 94.2277 113.073 94.8195C109.943 95.4114 110.087 99.2256 119.032 100.501C127.808 101.79 131.515 97.1475 129.236 94.9248C126.878 92.702 135.313 90.5713 132.576 88.2434C130.179 86.2837 136.047 84.9421 136.518 83.4033H121.194C120.945 83.6927 120.578 83.9163 119.962 83.9952L119.949 84.0083Z" fill="#C2DCF2"/>
          <path :class="{'is-hide': loading.value < 98}" d="M79.0237 131.91C74.7407 133.581 69.5539 132.081 61.8917 130.24C54.2294 128.412 52.7625 134.909 52.7625 134.909C52.6577 137.079 63.5813 141.235 73.4964 140.42C83.4115 139.578 91.0737 133.331 88.5982 130.582C86.1227 127.833 83.2936 130.253 79.0106 131.91H79.0237Z" fill="#C2DCF2"/>
        </svg>
      </div>
      <p class="preload__value">Загрузка <span>{{ loading.value }}</span>%</p>
    </div>
  </div>
</template>

<!-- <style lang="scss">
  @import './styles';
</style> -->
