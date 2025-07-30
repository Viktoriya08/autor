import type {
  APIRequestFirstScreen,
  APIRequestInstallment,
  APIRequestTransaction,
  APIRequestHowToGet,
  APIRequestManager,
} from '../config/types'

export const firstScreenDataResponse = async () => await useAPI<APIRequestFirstScreen>('api/v1/payment/').then((res) => res.value)
export const transactionScreenDataResponse = async () => await useAPI<APIRequestTransaction>('api/v1/payment/transaction').then((res) => res.value)
export const installmentScreenDataResponse = async () => await useAPI<APIRequestInstallment>('api/v1/payment/installment').then((res) => res.value)
export const howToGetScreenDataResponse = async () => await useAPI<APIRequestHowToGet>('api/v1/payment/how_to_get').then((res) => res.value)
export const managerDataResponse = async () => await useAPI<APIRequestManager>('api/v1/payment/manager').then((res) => res.value)
export const priceDataResponse = async () => await useAPI<string>('api/v1/payment/price').then((res) => res.value)
