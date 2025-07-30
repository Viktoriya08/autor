const calculateProfit = (invest: number) => {

  // Среднегодовой доход от аренды
  const baseCost = 10000000
  const baseADR = 12000 //Базовый ADR


  const averageADR = baseADR * ((invest / baseCost) ** 0.4) // средний ADR
  const averageLoad = 0.64 // средняя загрузка
  const seasonalityFactor = 1.4 // коэффициент сезонности

  const result2 = averageADR * averageLoad * 365 * seasonalityFactor
  // console.log('средний ADR = ' + averageADR)

  return Math.round(result2)
}

function netProfit(profitYear: number) {
  // Среднегодовая чистая прибыль
  const managerExpenses = 0.4 // Управленческие расходы 40% от доходв
  const tax = 0.06 // налог от чистого дохода 6%

  const result = profitYear * (1 - managerExpenses - tax)
  // console.log('Среднегодовая чистая прибыль = ' + Math.round(result))

  return Math.round(result)
}

const calculateProfitByRentPercent = (invest: number, profitYear: number) => {
  // Рентабельность от сдачи в аренду = (Чистая прибыль/Стоимость апартаментов) * 100%

  const result = (netProfit(profitYear) / invest) * 100

  return Math.round(result)
}

// Срок окупаемости = Сумма вложений / Среднегодовая чистая прибыль
const calculateAccumulatedProfit = (invest: number, profitYear: number) => {
  let result = ``
  const accumulate = invest / netProfit(profitYear)

  // console.log(accumulate)

  if (accumulate < 5) {
    result = `менее 5`
    return result
  } else if (accumulate < 6) {
    result = `5`
    return result
  } else if (accumulate < 7) {
    result = `6`
    return result
  } else if (accumulate < 8) {
    result = `7`
    return result
  } else if (accumulate < 9) {
    result = `8`
    return result
  } else if (accumulate < 10) {
    result = `9`
    return result
  } else {
    result = `Более 10`
    return result
  }
}

// Доходность = (((Среднегодовая ЧП * Срок инвестирования) - Стоимость апартаментов) / Стоимость апартаментов) * 100
const calculateProfitPercent = (invest: number, period: number, profitYear: number) => {
  const sumProfitPeriod = netProfit(profitYear) * period // Суммарный доход за весь период
  let result = ((sumProfitPeriod - invest) / invest) * 100
  // console.log('Доходность = ' + result)

  // if (Math.ceil(result) < 0) {
  //   result = 'менее ' + 1
  //   return result
  // } else if (Math.ceil(result) > 200) {
  //   result = 'более ' + 200
  //   return result
  // } else {
  //   return Math.ceil(result)
  // }

  if (invest <= 7000000) {
    result = 31 + (period * 0.5)
    return Math.ceil(result)
  } else if (invest > 7000000 && invest < 15000000) {
    result = 20 + (period * 0.5)
    return Math.ceil(result)
  } else if (invest >= 15000000 && invest < 25000000) {
    result = 11 + (period * 0.5)
    return Math.ceil(result)
  } else if (invest >= 25000000 && invest < 40000000) {
    result = 9 + (period * 0.5)
    return Math.ceil(result)
  } else if (invest >= 40000000 && invest < 60000000) {
    result = 7 + (period * 0.5)
    return Math.ceil(result)
  } else if (invest >= 60000000 && invest < 100000000) {
    result = 4 + (period * 0.3)
    return Math.ceil(result)
  } else if (invest >= 100000000) {
    result = 0.5 + (period * 0.3)
    return Math.ceil(result)
  }

}

export { calculateProfit, calculateProfitByRentPercent, calculateAccumulatedProfit, calculateProfitPercent }
