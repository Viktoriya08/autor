export const useFetchGlobData = async() => {
  const config = useNuxtApp().$config
  const globData = useGlobData()

  if (Object.keys(globData.value).length) return // уже загружено

  const { data } = await useAsyncData('api/v1/list_contacts', () =>
    $fetch(`${config.public.apiBase}/api/v1/list_contacts`)
  )

  if (data.value?.status === 'success') {
    globData.value = data.value.data
  }
}
