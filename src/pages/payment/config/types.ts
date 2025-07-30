import type { ImgProps, Indicator } from '@/shared/types'
/**
 * Интерфейс `data` для «Первого Экрана» */
export interface APIRequestFirstScreen {
  name: string
  text: string
  text_mobile: string
  image: ImgProps
  profit_indicators: Indicator[]
}
/**
 * Интерфейс `data` для экрана «Сделка без границ» */
export interface APIRequestTransaction {
  id: string | number
  name: string
  subtitle: string
  text: string
  logo_banks: string[]
}
/**
 * Интерфейс для `item` на экране «Рассрочка».
 *
 * Используется также внтури utility-функции `InstallmentItemsResponseAdapter()`,
 * которая конвертирует приходящие данные с сервера в формат, используемый
 * во Vue-компонентах экрана «Рассрочка». */
export interface APIReqDataInstallmentItem {
  id: string | number
  item_name: string
  term: {
    number: string | number
    unit: string
  }
  first_installment: {
    number: string | number
    unit: string
  }
  features: string
  monthly_payment: {
    number: string | number
    unit: string
  }
}
/**
 * Интерфейс `data` для экрана «Рассрочка» */
export interface APIRequestInstallment {
  name: string
  text: string
  items: APIReqDataInstallmentItem[]
}
/**
 * Интерфейс `data` для экрана «Как получить» */
export interface APIRequestHowToGet {
  id: string | number
  name: string
  steps: string[]
}
/**
 * Интерфейс `data` для экрана «Ваш менеджер» */
export interface APIRequestManager {
  id: string | number
  name: string
  text: string
  photo: string
  photo_webp: string
}
