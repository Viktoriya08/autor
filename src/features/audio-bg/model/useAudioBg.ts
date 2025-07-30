import { getAudioUrl } from '../api/getAudioUrl'

const isExist = ref(false)
const isActive = ref(false)
let audio: HTMLAudioElement | null = null

export const useAudioBg = () => {

  onMounted(async() => {
    try {
      const url = await getAudioUrl()

      if (!url) throw new Error('backend response without url')

      audio = new Audio(url)

      if (audio) {
        audio.loop = true
        isExist.value = true
      }
    } catch(error) {
      console.error(error)
    }
  })

  const toggleAudioBg = () => {
    isActive.value = !isActive.value
  }

  watch(isActive, () => {
    if (!audio) return

    isActive.value ? audio.play() : audio.pause()
  })

  return {
    isExist,
    isActive,
    toggleAudioBg,
  }
}
