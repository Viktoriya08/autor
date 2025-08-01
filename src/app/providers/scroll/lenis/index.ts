import Lenis from 'lenis'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const setLenisScroll = () => {
  if (import.meta.client) {
    const lenis = new Lenis({
      autoRaf: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return lenis
  }
  // const lenis = new Lenis({
  //   autoRaf: true,
  // })

  // // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  // lenis.on('scroll', ScrollTrigger.update);

  // // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  // });

  // // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  // gsap.ticker.lagSmoothing(0);
  // return lenis
}
