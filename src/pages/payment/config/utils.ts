import type { APIReqDataInstallmentItem } from './types'

/**
 * Utility-функция (адаптер) для конвертации данных с сервера
 * в формат, используемый во Vue-компонентах экрана «Рассрочка» */
export const InstallmentItemsResponseAdapter = (installmentItemsResponse: APIReqDataInstallmentItem[] | undefined) => {
  if (!installmentItemsResponse) {
    return null
  }

  return [
    ...installmentItemsResponse.map((item) => {
      const {
        id,
        item_name,
        term,
        first_installment,
        features,
        monthly_payment,
      } = item

      return {
        id,
        name: item_name,
        term: {
          number: term.number.toString().trim(),
          unit: term.unit.toString().trim(),
        },
        contribution: {
          number: first_installment.number.toString().trim(),
          unit: first_installment.unit.toString().trim(),
        },
        text: features,
        payment: {
          number: monthly_payment.number.toString().trim(),
          unit: monthly_payment.unit.toString().trim(),
        },
      }
    })
  ]
}
