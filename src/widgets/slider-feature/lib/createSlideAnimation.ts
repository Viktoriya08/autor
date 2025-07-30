import { splitType } from '@/shared/lib/split-type'

export const createSlideAnimation = (slide: HTMLElement) => {
  const { $gsap } = useNuxtApp()

  const heading = slide.querySelector('.card-feature__title')
  const charsHeading = heading?.querySelectorAll('.card-feature__title .char')
  const elemsBody = slide.querySelectorAll('p')
  const elemParam = slide.querySelectorAll('.card-feature__prop')
  const link = slide.querySelectorAll('.btn-second')
  const linesBody: HTMLElement[] = []

  elemsBody?.forEach((el) => {
    const split = splitType(el, 'lines')

    if (split.lines) {
      linesBody.push(...split.lines)
    }
  })

  const tl = $gsap.timeline({ paused: true })

  const tlHead = $gsap.timeline()
    .call(() => heading && heading.classList.remove('is-complete'))
    .fromTo(
      charsHeading || [],
      { opacity: 0, y: '-100%' },
      { opacity: 1, y: 0, stagger: { each: 0.03, ease: 'power1.in' },
        onComplete: () => {
          heading && heading.classList.add('is-complete')
        }
      }
    )

  const tlBody = $gsap.timeline().fromTo(
    linesBody,
    { opacity: 0, y: '-5px' },
    { opacity: 1, y: 0, stagger: { each: 0.08, ease: 'power1.in' } }
  )

  const tlParam = $gsap.timeline().fromTo(
    elemParam,
    { opacity: 0, y: '100%' },
    { opacity: 1, y: 0, stagger: { each: 0.2, from: 'end', ease: 'power1.in' } }
  )

  const tlLink =  $gsap.timeline().fromTo(
    link,
    { opacity: 0, y: '-5px' },
    { opacity: 1, y: 0,  ease: 'power1.in' }
  )

  tl.add(tlHead, '+=1.3').add(tlBody, '<+=0.2').add(tlParam, '<+=0.2').add(tlLink, '<+=0.2')

  return tl
}
