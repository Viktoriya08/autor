export const usePreload = () => {
  const { $gsap, $lenis } = useNuxtApp()

  const isShow = ref(true)
  const loading = reactive({
    total: 0,
    value: 0,
    load: 0
  })

  let tlBase: ReturnType<typeof setInterval> | null = null
  let tlJump: ReturnType<typeof setInterval> | null = null

  const initPreload = (preloader: HTMLElement) => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    $lenis.stop()

    tlBase = setInterval(() => {
      if (loading.value < 100) {
        loading.value++
      }
    }, 1000)

    const increaseLoadValue = () => {
      loading.load = loading.load + 1
    }

    const images = document.querySelectorAll('img:not([loading="lazy"])')
    const videos = document.querySelectorAll('video:not([loading="lazy"])')

    loading.total = images.length + videos.length

    const step = (100 / loading.total)

    const tlHidePreloader = $gsap.timeline({ paused: true })
      .fromTo(preloader,
        { '--size-mask': '0%' },
        { '--size-mask': '100%', duration: 2, ease: 'power2.inOut',
          onComplete: () => {
            isShow.value = false
            $lenis.start()
          }
        }
      )

    images.forEach((item) => {
      if(item.complete) {
        increaseLoadValue ()
      } else {
        item.addEventListener('load', () => increaseLoadValue())
      }
    })

    videos.forEach((item) => {
      if(item.readyState === 4) {
        increaseLoadValue ()
      } else {
        item.addEventListener('canplaythrough', () => increaseLoadValue())
      }
    })

    watch(() => loading.load, () => {
      if (tlJump) {
        clearInterval(tlJump)
      }

      tlJump = setInterval(() => {
        if ((loading.value < (step * loading.load)) && (loading.value < 100)) {
          loading.value++
        } else {
          if (tlJump) {
            clearInterval(tlJump)
          }
        }
      }, 100)
    }, { immediate: true })

    watch(() => loading.value, () => {
      if (loading.value >= 100) {
        tlHidePreloader.restart()
      }
    })
  }

  return {
    isShow,
    loading,
    tlBase,
    tlJump,
    initPreload
  }
}
