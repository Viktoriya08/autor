import { InstallmentItemsResponseAdapter } from '../config/utils'
import { planInstallment } from './default-data'

import {
  firstScreenDataResponse,
  transactionScreenDataResponse,
  installmentScreenDataResponse,
  howToGetScreenDataResponse,
  managerDataResponse,
  priceDataResponse,
} from './api-responses-data'

export const getFirstScreenData = async () => {
  const _data = await firstScreenDataResponse()

  return {
    name: _data?.name ?? 'Способы покупки',
    image: _data?.image,
    text: _data?.text ?? '<h2>Покупка апартаментов в More Yuva может стать как реализацией давней мечты, так и разумной инвестицией.</h2><p>Мы предлагаем несколько способов приобретения: с помощью выгодных ипотечных программ, используя гибкую рассрочку или 100% оплату.</p>',
  }
}

export const getTransactionScreenData = async () => {
  const _data = await transactionScreenDataResponse()

  return {
    name: _data?.name ?? 'Сделка без границ',
    subtitle: _data?.subtitle ?? 'В проекте предусмотрена возможность удаленного заключения сделок, как при полной оплате апартаментов, так и при использовании ипотечных программ.',
    text: _data?.text ?? '<p>Дистанционная сделка — это комфорт, экономия времени и уверенность в каждом шаге, на котором вас сопровождает персональный менеджер.</p> <p>Независимо от вашей цели, ипотечная программа поможет достигнуть ее максимально выгодно и быстро в банках-партнерах. Мы работаем с ведущими банками, подбирая выгодные программы индивидуально под каждого клиента.</p>',
    logoBanks: _data?.logo_banks ?? []
  }
}

export const getInstallmentScreenData = async () => {
  const _data = await installmentScreenDataResponse()

  return {
    name: _data?.name ?? 'Рассрочка',
    text: _data?.text ?? 'Программа рассрочки позволит легко приобрести апартаменты, внося оплату частями и без переплат.',
    items: InstallmentItemsResponseAdapter(_data?.items) ?? planInstallment,
  }
}

export const getHowToGetScreenData = async () => {
  const _data = await howToGetScreenDataResponse()

  return {
    name: _data?.name ?? 'Как получить',
    steps: _data?.steps,
  }
}

export const getManagerData = async () => {
  const _data = await managerDataResponse()

  return {
    title: _data?.name ?? 'Это Оля <br> ваш менеджер',
    text: _data?.text ?? 'Подскажет как всё оформить и ответит на любые вопросы, касающиеся способов покупки жилья',
    img: _data?.photo ?? 'image/payment/manager.jpg',
  }
}

export const getPriceData = async () => {
  const _data = await priceDataResponse()

  // data?.trim() error
  // return _data?.trim() ?? '6.5'
}
