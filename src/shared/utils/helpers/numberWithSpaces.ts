const numberWithSpaces = (x: number, delimiter: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || ' ')
}

export default numberWithSpaces
