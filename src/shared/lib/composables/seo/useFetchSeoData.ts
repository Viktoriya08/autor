export const useFetchSeoData = async() => {
  const config = useNuxtApp().$config
  const seoData = useSeoData()

  if (Object.keys(seoData.value).length) return // уже загружено

  const { data } = await useAsyncData('api/v1/seo', () =>
    $fetch(`${config.public.apiBase}/api/v1/seo`)
  )

  if (data.value?.status === 'success') {
    seoData.value = data.value.data
  }
}
