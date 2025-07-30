export interface ImgProps {
  720?: Array<[string, string]>;
  2230?: Array<[string, string]>
}

export interface MenuLink {
  type: string;
  month: string;
  year: string;
  link: string;
  image: string;
  image_webp: string
}

export interface APIRequest {
  status: string
  data: {
    code: string
    month: string
    year: string
    image?: Array<ImgProps>;
    links?: Array<MenuLink>;
  }
}
