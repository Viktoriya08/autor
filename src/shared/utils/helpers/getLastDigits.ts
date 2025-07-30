const getLastDigits = (str: string) => {
  if (typeof str === 'string') {
    return str.slice(-2)
  } else {
    return
  }
}

export default getLastDigits
