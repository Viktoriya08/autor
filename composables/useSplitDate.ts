export const useSplitDate = (date: string) => {
  const values = date.split(' ')

  return { num: values[0], text: values[1] }
}
