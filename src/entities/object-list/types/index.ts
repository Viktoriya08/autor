type FilterValue = {
  value: {
    min: string
    max: string
  }
}

export interface FilterList {
  [key: string]: {
    title: string
    type: string
    value: FilterValue | FilterValue[]
  }
}

