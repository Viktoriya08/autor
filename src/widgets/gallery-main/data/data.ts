import type { ParamImage } from '../model/types'

export const paramImage: ParamImage = {
  xs: {
    width: '438',
    height: '413',
    sizes: '(max-width: 767px) 176px, 438px'
  },
  s: {
    width: '560',
    height: '413',
    sizes: '(max-width: 767px) 225px, 560px'
  },
  m: {
    width: '566',
    height: '566',
    sizes: '(max-width: 767px) 228px, 566px'
  },
  l: {
    width: '860',
    height: '563',
    sizes: '(max-width: 767px) 346px, 860px'
  },
  xl: {
    width: '955',
    height: '649',
    sizes: '(max-width: 767px) 386px, 955px'
  },
  xxl: {
    width: '1070',
    height: '649',
    sizes: '(max-width: 767px) 430px, 1070px'
  },
}

export const gallerySection = {
  title: 'Галерея',
  slides: [
    {
      size: 'xs',
      image: {
        176: ['image/gallery-main/1-176.jpg', 'image/gallery-main/1-176.webp'],
        438: ['image/gallery-main/1-438.jpg', 'image/gallery-main/1-438.webp'],
        876: ['image/gallery-main/1-876.jpg', 'image/gallery-main/1-876.webp'],
        1752: ['image/gallery-main/1-1752.jpg', 'image/gallery-main/1-1752.webp'],
      },
      fullscreen: {
        width: '1752'
      },
      alt: 'дом'
    },
    {
      size: 'xl',
      image: {
        386: ['image/gallery-main/2-386.jpg', 'image/gallery-main/2-386.webp'],
        955: ['image/gallery-main/2-955.jpg', 'image/gallery-main/2-955.webp'],
        1910: ['image/gallery-main/2-1910.jpg', 'image/gallery-main/2-1910.webp'],
      },
      fullscreen: {
        width: '1910'
      },
      alt: 'дом'
    },
    {
      size: 'm',
      image: {
        228: ['image/gallery-main/3-228.jpg', 'image/gallery-main/3-228.webp'],
        566: ['image/gallery-main/3-566.jpg', 'image/gallery-main/3-566.webp'],
        1132: ['image/gallery-main/3-1132.jpg', 'image/gallery-main/3-1132.webp'],
        2264: ['image/gallery-main/3-2264.jpg', 'image/gallery-main/3-2264.webp'],
      },
      fullscreen: {
        width: '2264'
      },
      alt: 'дом'
    },
    {
      size: 's',
      image: {
        225: ['image/gallery-main/4-225.jpg', 'image/gallery-main/4-225.webp'],
        560: ['image/gallery-main/4-560.jpg', 'image/gallery-main/4-560.webp'],
        1120: ['image/gallery-main/4-1120.jpg', 'image/gallery-main/4-1120.webp'],
        2240: ['image/gallery-main/4-2240.jpg', 'image/gallery-main/4-2240.webp'],
      },
      fullscreen: {
        width: '2240'
      },
      alt: 'дом'
    },
    {
      size: 'l',
      image: {
        346: ['image/gallery-main/5-346.jpg', 'image/gallery-main/5-346.webp'],
        860: ['image/gallery-main/5-860.jpg', 'image/gallery-main/5-860.webp'],
        1720: ['image/gallery-main/5-1720.jpg', 'image/gallery-main/5-1720.webp'],
      },
      fullscreen: {
        width: '1720'
      },
      alt: 'дом'
    },
    {
      size: 'xxl',
      image: {
        430: ['image/gallery-main/6-430.jpg', 'image/gallery-main/6-430.webp'],
        1070: ['image/gallery-main/6-1070.jpg', 'image/gallery-main/6-1070.webp'],
        2140: ['image/gallery-main/6-2140.jpg', 'image/gallery-main/6-2140.webp'],
      },
      fullscreen: {
        width: '2140'
      },
      alt: 'дом'
    }
  ]
}
