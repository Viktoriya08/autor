export const useSeo = (key: string) => {
  const defaultSeo = {
    title: 'MoreYuva',
    description: 'Подлинник курортной жизни в Гурзуфе. Роскошные апартаменты с отделкой и мебелью и видами на море и горы. Всесезонный бассейн и паркинг.',
  }

  const seoData = useSeoData()
  const seo = seoData.value[key] || defaultSeo

  useHead({
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
    ],
  })
}
