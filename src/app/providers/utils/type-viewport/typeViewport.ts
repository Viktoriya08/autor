import { ref } from 'vue'
import bp from '@/shared/data/breakpoints/bp.json'

let initValue = 'desktop'

const getTypeViewport = (viewport: number) => {
  let type: string = 'desktop'

  switch(true) {
    case viewport < bp['tablet']:
      type = 'mobile'
      break

    case (viewport >= bp['tablet']) && (viewport < bp['hd']):
      type = 'tablet'
      break

    case viewport >= bp['hd']:
      type = 'desktop'
      break
  }

  return type
}

// onMounted(() => {
//   window.addEventListener('resize', () => {
//     const newViewport = window.innerWidth
//     const newTypeViewport = getTypeViewport(newViewport)

//     if (newTypeViewport !== typeViewport.value) {
//       typeViewport.value = newTypeViewport
//     }
//   })

//   const viewport = window.innerWidth
//   initValue = getTypeViewport(viewport)
// })

if (import.meta.client) {
  window.addEventListener('resize', () => {
    console.log('resize')
    const newViewport = window.innerWidth
    const newTypeViewport = getTypeViewport(newViewport)

    if (newTypeViewport !== typeViewport.value) {
      typeViewport.value = newTypeViewport
      console.log(typeViewport.value)
    }
  })

  const viewport = window.innerWidth
  initValue = getTypeViewport(viewport)
}

export const typeViewport = ref(initValue)
