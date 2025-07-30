export interface FastLink {
  type: string
  link: string
  title: string
  date: string
}

export interface News {
  date_news: string
  text: string
  image: {
    [key: string]: string[]
  }
  title: string
  links: FastLink[]
  code: string
  id: string
  date: string
}

// export interface APIResponse {
//   status: string
//   data: News
// }
