<script setup lang="ts">
  import { animateHorizontalScrollAll } from '@/shared/animation/horizontal-scroll'
  import { animateCurve } from '@/shared/animation/curve'
  import { setParallax } from '@/shared/animation/parallax'
  import { setAnimate } from '@/shared/animation/animate'
  import { splitText } from '@/shared/animation/split-text'
  import { getSliderFeatureController } from '@/widgets/slider-feature/api'

  useSeo('main')

  const isTrustedEvent: Ref<boolean> | undefined = inject('isTrustedEvent')

  const wrap = useTemplateRef('wrap')
  const promo = useTemplateRef('promo')
  const wrapSlider = useTemplateRef('wrap-slider')
  const apart = useTemplateRef('apart')

  onMounted(() => {
    const { $lenis, $gsap } = useNuxtApp()

    const mm = $gsap.matchMedia()
    const hViewport = window.innerHeight

    // высота раскрытия маски для блока apart
    const scrollApart = hViewport * 2

    // высота под блок apart внутри wrap
    const hApartAnimation = scrollApart

    let tlShowSlider: GSAPTimeline
    let tlShowApart: GSAPTimeline

    animateCurve()
    setParallax()
    setAnimate()
    splitText()

    nextTick(() => {
      const { enableSliderFeature, disableSliderFeature } = getSliderFeatureController()
      disableSliderFeature()

      const hPromo = promo.value?.offsetHeight
      const hSlider = wrapSlider.value?.offsetHeight
      const hWrap = wrap.value?.offsetHeight
      const hApart = apart.value?.offsetHeight

      mm.add('(min-width: 1280px)', () => {
        $gsap.set(wrap.value, {height: `${hWrap + hApartAnimation}px`})

        animateHorizontalScrollAll()

        // const header = document.getElementById('header')

        if (promo.value) {
          tlShowSlider = $gsap.timeline({
            scrollTrigger: {
              trigger: promo.value,
              // start: `bottom bottom+=${hViewport * 3}px`,
              // end: `bottom bottom+=${hViewport * 1}px`,
              start: `bottom bottom+=${hViewport}px`,
              // end: `bottom bottom`,
              end: `+=${hViewport}px`,
              scrub: true,
              onEnter() {
                // костыль - убирает темный цвет с шапки
                // header?.classList.remove(`theme-dark`)
              },
              onLeave: () => {
                if (!isTrustedEvent?.value) {
                  return
                }

                $lenis?.stop()
                console.log('onLeave')

                $gsap.to(window, {
                  duration: 1.5,
                  ease: 'none',
                  scrollTo: {
                    y: "#anim",
                    // offsetY: -window.innerHeight * (stateSlider.activeSlide + 1)
                    // offsetY: -hPromo + hViewport
                    offsetY: -hPromo
                    // offsetY: -hPromo
                    // offsetY: 0
                  },
                  onComplete: () => {
                    console.log('activate slider')
                    // slider.value?.activateSlider()
                    enableSliderFeature()

                    // slider.value?.deactivateSlider()

                    // scroll?.start()
                    // observer.enable()
                  },
                })

                // setTimeout(() => {
                //   // scroll?.start()
                //   slider.value?.activateSlider()
                // }, 1500)
              },
              onEnterBack: () => {
                if (!isTrustedEvent?.value) {
                  return
                }

                console.log('onEnterBack')
                console.log('deactivate slider')
                disableSliderFeature()

                // scroll.start()
                // gsap.to(window, {
                //   duration: 1.5,
                //   scrollTo: {
                //     y: "#p",
                //     // offsetY: -window.innerHeight * (stateSlider.activeSlide + 1)
                //     offsetY: -hPromo
                //   },
                //   onComplete: () => {
                //     console.log('ddd')
                //     slider.value?.deactivateSlider()
                //     // observer.enable()
                //   },
                // })
              }
            },
          })

          tlShowApart = $gsap.timeline({
            scrollTrigger: {
              trigger: wrap.value,
              start: `bottom bottom+=${scrollApart}px`,
              end: `+=${scrollApart}px`,
              scrub: true,
              onEnter: () => {
                apart.value?.classList.add('is-active')

                if (!isTrustedEvent?.value) {
                  return
                }

                console.log('onEnter tlShowApart')
                disableSliderFeature()
                // scroll.start()
              },
              onEnterBack: () => {
                console.log('onEnterBack tlShowApart')
                // scroll.stop()
                // setTimeout(() => {
                //   s.value.activateSlider()
                // }, 1000)
              },
              onLeave: () => {
                console.log('onLeave tlShowApart')
                // scroll?.stop()
                // setTimeout(() => {
                //   slider.value?.activateSlider()
                // }, 1000)
              },
              onLeaveBack: () => {
                apart.value?.classList.remove('is-active')

                if (!isTrustedEvent?.value) {
                  return
                }

                console.log('onLeaveBack tlShowApart')
                $lenis?.stop()
                setTimeout(() => {
                  enableSliderFeature()
                }, 1000)
              }
            },
          })

          tlShowSlider.fromTo(wrapSlider.value,
            { '--t': 0 + 'vh' },
            { '--t': 100 + 'vh', ease: "power1.out" }
          )
          tlShowApart.fromTo(apart.value, { '--t': 0 + '%' }, { '--t': 75 + '%', ease: "power2.inOut"})
        }
      })
    })

    // if (promo.value) {
    //   const tlActiveSlider = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: promo.value,
    //       start: `bottom bottom+=100px`,
    //       end: 'bottom bottom',
    //       scrub: true,
    //     },
    //   })

    //   tlActiveSlider.fromTo(slider.value, { '--t': 100 + '%' }, { '--t': 0 + '%' })
    // }

    onUnmounted(() => {
      tlShowSlider?.kill()
      tlShowApart?.kill()

      // hotfix для перехода на другие страницы
      // когда index прокручен за sliderFeature
      setTimeout(() => {
        $lenis?.start()
      }, 500)
    })
  })
</script>

<template>
  <main>
    <!-- <preload /> -->

    <div class="wrap-sticky">
      <div class="wrap-sticky__sticky">
        <Hero />
      </div>
      <div class="wrap-sticky__next">
        <PromoMain />
      </div>
    </div>

    <div id="anim" ref="wrap" class="section-animation">
      <div ref="promo" class="section-animation__promo">
        <PromoSecond/>
      </div>

      <div ref="wrap-slider" class="section-animation__slider">
        <SliderFeature ref="slider"/>
      </div>

      <div ref="apart" class="section-animation__apart">
        <SectionApartment />
      </div>
    </div>

    <div class="wrap-sticky wrap-sticky--desktop">
      <div class="wrap-sticky__sticky">
        <SectionHistory />
      </div>

      <div class="wrap-sticky__next">
        <SectionPeople />
      </div>
    </div>

    <gallery-main />

    <SectionMap />
    <SectionOffer />
  </main>
</template>

<style lang="scss">
  .section-animation {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr;
    position: relative;
  }

  .section-animation__promo {
    grid-column: 1/2;
    grid-row: 1/2;
    position: sticky;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .section-animation__slider {
    --t: 0vh;

    position: sticky;
    bottom: 0;
    clip-path: polygon(0 100%, 0 calc( 100% - var(--t)), 100% calc(100% - var(--t)), 100% 100%);
    display: flex;
    flex-direction: column;
    justify-content: end;
    grid-row: 2/4;
  }

  .section-animation__apart {
    --t: 0%;

    position: sticky;
    top: 0;
    clip-path: circle(var(--t) at 50% 42%);
    pointer-events: none;
    display: flex;
    align-items: start;
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: start;
  }

  .section-animation__apart.is-active {
    pointer-events: all;
  }

  @include media(hd-after) {

    .section-animation__slider {
      clip-path: none;
      position: initial;
      grid-row: initial;
    }

    .section-animation__apart {
      clip-path: none;
      pointer-events: all;
      position: initial;
      grid-row: initial;
    }
  }
</style>
