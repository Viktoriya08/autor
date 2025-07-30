export interface InfoTableItem {
  id: string | number
  name: string
  term: {
    number: string | number
    unit: string
  }
  contribution: {
    number: string | number
    unit: string
  }
  text: string
  payment: {
    number: string | number
    unit: string
  }
}
