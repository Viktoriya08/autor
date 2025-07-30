import { BASE_URL } from '@/shared/config'

const URL_TO_STATIC_BG_SOUND = `${BASE_URL}/sound/bg-sound.mp3`

export const getAudioUrl = async() => {
  try {
    const fetchAudioFileRes = await fetch(URL_TO_STATIC_BG_SOUND, { method: 'GET' })
    const isAudioFetchSuccess = fetchAudioFileRes.ok && fetchAudioFileRes.headers.get('content-type')?.startsWith('audio')

    if (isAudioFetchSuccess) {
      return fetchAudioFileRes.url
    } else {
      console.error('Wrong fetching audio file')
    }
  } catch(error) {
    console.error((error as Error).message)
  }
}
