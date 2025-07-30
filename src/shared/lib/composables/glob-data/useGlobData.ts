// type GlobData = Record<string, SeoItem>

export const useGlobData = () => {
  return useState('glob-data', () => ({}))
}
