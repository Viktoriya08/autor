import type { QueryParam } from './types'

export const useFilterObjects = ({
  filterName,
  filters,
  sort,
  page,
  isLoadingFilter,
  objects,
  loadObjects,
  urlFetch,
  fetchObjectList
}) => {

  const skipWatchFilters = ref(false)
  const skipWatchSort = ref(false)

  const preloadObjects = async(controller?: AbortController) => {
    const data = await fetchObjectList(urlFetch.value, controller)
    loadObjects.value = data.data
    isLoadingFilter.value = false
  }

  const getObjects = async(controller?: AbortController) => {
    const data = await fetchObjectList(urlFetch.value, controller)
    objects.value = data.data
  }

  const getMinMaxValueFromQuery = (string: string) => {
    const arr = string.split('-')

    return arr.map((item) => {
      return item.slice(3)
    })
  }

  const updateFiltersFromQuery = (query: QueryParam) => {
    if (!query) {
      return
    }

    Object.entries(query).forEach(([key]) => {

      switch(key) {
        case filterName.price:
        case filterName.square:
          skipWatchFilters.value = true
          filters.value[key] = getMinMaxValueFromQuery(query[key])
          return

        case filterName.room:
        case filterName.tag:
          skipWatchFilters.value = true
          filters.value[key] = query[key].split('|')
          return

        case filterName.sort:
          skipWatchSort.value = true
          sort.value = query[key]
          return

        case filterName.page:
          // page.value = Number(query[key])
          page.value = 1
          return

        case filterName.free:
          filters.value[key] = true
          return
      }
    })

    getObjects()
  }

  watch(filters,
    () => {
      page.value = 1

      if (skipWatchFilters.value) {
        skipWatchFilters.value = false
        return
      }

      preloadObjects()
    },
    { deep: true }
  )

  watch(() => sort.value,
    () => {
      page.value = 1

      if (skipWatchSort.value) {
        skipWatchSort.value = false
        return
      }

      getObjects()
    }
  )

  return {
    updateFiltersFromQuery
  }
}
