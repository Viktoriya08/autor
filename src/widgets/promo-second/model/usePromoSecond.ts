// import gsap from 'gsap'
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo'
import { PUBLIC_REMOTE } from '@/shared/config'
import type { APIData } from './types'
import { updateThemeCookie } from '@/widgets/cookies'
import { updateThemeHeader } from '@/widgets/header'

export const usePromoSecond = (
  wrapVideo: HTMLElement | null,
  elOver: HTMLElement | null,
  subtitle: HTMLElement | null,
  wrap: HTMLElement | null,
  data: APIData | null
) => {
  const { $gsap } = useNuxtApp()
  const typeViewport = inject<Ref<string>>('typeViewport')

  const hAnimateMask = window.innerHeight * 1.5
  const hAnimateSubtitle = window.innerHeight * 2
  const hAnimateVideo = 5000 + hAnimateMask

  const urlVideo = typeViewport?.value === 'mobile'
    ? data?.value?.video_phone
    : data?.value?.video

  if (elOver) {
    // const startOffset = typeViewport?.value !== 'desktop' ? 0 : 200

    const tlMask = $gsap.timeline({
      scrollTrigger: {
        trigger: elOver,
        start: `bottom bottom`,
        end: `+=${hAnimateMask}`,
        scrub: true,
      },
    })

    const tlMaskSize = $gsap.timeline()
      .fromTo(elOver, { '--size-mask': '0' }, { '--size-mask': '150', ease: 'power2.inOut' })

    const tlMaskOpacity = $gsap.timeline()
      .call(() => { if (updateThemeCookie) {
        tlMask.scrollTrigger.direction === 1
          ? updateThemeCookie('dark-transparent')
          : updateThemeCookie('blue-promo')
      }})
      .fromTo(elOver, { opacity: 1 }, { opacity: 0, ease: 'power2.inOut' })
      .call(() => { if (updateThemeHeader) {
        tlMask.scrollTrigger.direction === 1
          ? updateThemeHeader('dark-transparent')
          : updateThemeHeader('blue-promo')
      }}, null, '<30%')

    const tlMaskOffset = $gsap.timeline({
      scrollTrigger: {
        trigger: elOver,
        start: `bottom bottom+=${window.innerHeight / 2}px`,
        end: `+=${window.innerHeight}`,
        // start: `bottom bottom+=${startOffset}px`,
        // end: `+=${window.innerHeight / 4}px`,
        scrub: true,
      },
    })

    tlMaskOffset.fromTo(elOver, { '--offset': 0 }, { '--offset': 100, ease: 'power2.inOut' })

    tlMask
      .add(tlMaskSize)
      .add(tlMaskOpacity, '<30%')

    onUnmounted(() => {
      tlMask.kill()
      tlMaskSize.kill()
      tlMaskOpacity.kill()
      tlMaskOffset.kill()
    })
  }

  if (elOver && wrapVideo) {
    const scrollyInstance = new ScrollyVideo({
      scrollyVideoContainer: wrapVideo,
      src: `${PUBLIC_REMOTE}${urlVideo}`,
      trackScroll: false
    })

    const tlVideo = $gsap.timeline({
      scrollTrigger: {
        trigger: elOver,
        start: `bottom bottom-=${window.innerHeight / 4}`,
        end: `+=${hAnimateVideo}px`,
        scrub: true,
        onUpdate: (self) => {
          const value = (self.progress * 100).toFixed(0)
          scrollyInstance.updateScrollPercentage(value)
        }
      },
    })

    onUnmounted(() => {
      tlVideo.kill()
    })
  }

  if (subtitle) {
    const subtitles = Array.from(subtitle.children)

    const firstChars = subtitles && subtitles[0].querySelectorAll('.char') || []
    const secondChars = subtitles && subtitles[1].querySelectorAll('.char') || []

    const tlSubtitleFull = $gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: `bottom bottom+=${window.innerHeight * 1.5 + hAnimateSubtitle}px`,
        end: `+=${hAnimateSubtitle}px`,
        scrub: true,
      },
    })

    const tlShowFirst = $gsap.fromTo(firstChars,
      { opacity: 0, y: '10%' },
      { opacity: 1, y: '0%', stagger: { each: 0.1 }, ease: 'power1.in' }
    )

    const tlHideFirst = $gsap.fromTo(firstChars,
      { opacity: 1, y: '0' },
      { opacity: 0,  y: '-10%', stagger: { each: 0.1 }, ease: 'power1.in' }
    )

    const tlShowSecond = $gsap.fromTo(secondChars,
      { opacity: 0, y: '10%' },
      { opacity: 1, y: '0%', stagger: { each: 0.1 }, ease: 'power1.in' }
    )

    tlSubtitleFull
      .add(tlShowFirst)
      .add(tlHideFirst, '>25%')
      .add(tlShowSecond, '>25%')

    $gsap.set(firstChars, { opacity: 0 })

    onUnmounted(() => {
      tlShowFirst.kill()
      tlHideFirst.kill()
      tlShowSecond.kill()
      tlSubtitleFull.kill()
    })
  }
}
