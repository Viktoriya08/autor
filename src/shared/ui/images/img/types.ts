type SourceImg = {
  size: number,
  media?: string
}

export interface IImg {
  name: string,
  path: string,
  ext: string,
  fallback: string,
  width?: string,
  height?: string,
  webp?: boolean
  alt?: string,
  sources?: SourceImg[]
  loading?: 'eager' | 'lazy' | undefined
}
