import { API_BASE_URL } from '../config'

export async function useAPI<T>(path: string) {
  // const { data, error, pending }
  const { data } = await useAsyncData<T>(path, () =>
    $fetch(`${API_BASE_URL}/${path}`, {
      // headers: {
      //   'Api-Key': 'MoreYuvaTestApi'
      // },
      onRequestError({ error }) {
        console.error(error)
      }
    })
  )

  // Если нужно, можно обработать error или pending
  // if (error.value) {
  //   console.error('API Error:', error.value)
  // }

  const value = computed(() => {
    if (!data.value) return null
    return data.value.data
  })

  return value
}
