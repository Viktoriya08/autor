export const planInstallment = [
  {
    id: 1,
    name: '30/70',
    term: {
      number: '18',
      unit: 'мес.',
    },
    contribution: {
      number: '30',
      unit: '%',
    },
    text: 'Остаток выплачивается через 18 месяцев от дду',
    payment: {
     number: 'от 140 000',
     unit: 'руб.',
    }
  },
  {
    id: 2,
    name: '20/10/70',
    term: {
      number: '12',
      unit: 'мес.',
    },
    contribution: {
      number: '20',
      unit: '%',
    },
    text: 'Через 6 мес. от дду вносится платеж 10% / Остаток 70% через 12 мес.',
    payment: ''
  },
  {
    id: 3,
    name: '30/70',
    term: {
      number: '16',
      unit: 'мес.',
    },
    contribution: {
      number: '30',
      unit: '%',
    },
    text: 'Второй платеж в размере 70% через 6 месяцев / Дополнительная выгода',
    payment: ''
  },
  {
    id: 4,
    name: '40/60',
    term: {
      number: '24',
      unit: 'мес.',
    },
    contribution: {
      number: '40',
      unit: '%',
    },
    text: 'Остаток выплачивается равными ежемесячными платежами',
    payment: {
      number: 'от 200 000',
      unit: 'руб.',
    }
  },
]

export const paymentHero = {
  title: 'СПОСОБЫ ПОКУПКИ',
  img: {
    name: '1',
    path: 'image/payment',
    ext: 'jpg',
    fallback: '1920',
    width: '1920',
    height: '1080',
    alt: 'alt text',
    sources: [
      { size: 768, media: '(max-width: 1279px) and (orientation: portrait)' },
      { size: 1920 }
    ]
  }
}
