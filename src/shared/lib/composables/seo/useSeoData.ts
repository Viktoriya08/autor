type SeoItem = { title: string; description: string }
type SeoData = Record<string, SeoItem>

export const useSeoData = () => {
  return useState<SeoData>('seo-data', () => ({}))
}
