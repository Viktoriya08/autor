import { limitLoad, filterName, sortItems, urlApi } from '../config'
import type { FilterList } from '../types'
import { fetchObjectList } from '../api/fetchObjectList'
// import type { ObjectItem } from '@/entities/object/types'

export const useObjectList = async() => {
  const router = useRouter()

  const filterList = await useAPI<FilterList>('api/v1/object/filter_list')

  const page = ref(1)
  const objects = ref([])
  const loadObjects = ref([])

  const filters = ref({
    [filterName.price]: [
      filterList && filterList.value[filterName.price].value.min,
      filterList && filterList.value[filterName.price].value.max
    ],
    [filterName.square]: [
      filterList && filterList.value[filterName.square].value.min,
      filterList && filterList.value[filterName.square].value.max
    ],
    [filterName.room]: [],
    [filterName.tag]: [],
    [filterName.free]: false,
  })

  const sort = ref('')
  const stepLoad = ref(limitLoad)
  const isLoadingMore = ref(false)
  const isLoadingFilter = ref(true)
  const isEnd = ref(false)

  const urlFetch = computed(() => {
    let str = ''

    if (page.value != 1) {
      str = `${str}${filterName.page}=${page.value}`
    }

    if (filters.value[filterName.free]) {
      str = `${str}${filterName.free}=1`
    }

    if (filters.value[filterName.room].length != 0) {
      str = `${str}&${filterName.room}=${filters.value[filterName.room].join('|')}`
    }

    if (filters.value[filterName.tag].length != 0) {
      str = `${str}&${filterName.tag}=${filters.value[filterName.tag].join('|')}`
    }

    if ((filters.value[filterName.price][0] != filterList.value[filterName.price].value.min)
      || (filters.value[filterName.price][1] != filterList.value[filterName.price].value.max)) {
      str =`${str}&${filterName.price}=min${filters.value[filterName.price][0]}-max${filters.value[filterName.price][1]}`
    }

    if ((filters.value[filterName.square][0] != filterList.value[filterName.square].value.min)
      || (filters.value[filterName.square][1] != filterList.value[filterName.square].value.max)) {
      str =`${str}&${filterName.square}=min${filters.value[filterName.square][0]}-max${filters.value[filterName.square][1]}`
    }

    if (sort.value != '') {
      str = `${str}&${filterName.sort}=${sort.value}`
    }

    // router.push(`/objects?${str}`)
    router.replace(`/objects?${str}`)

    return `${urlApi}?${str}`
  })

  const applayLoadObjects = () => {
    objects.value = loadObjects.value
    isLoadingFilter.value = true
  }

  const loadMoreObjects = async() => {
    if (page.value >= objects.value.total_pages) {
      return
    }

    isLoadingMore.value = true
    page.value++

    const data = await fetchObjectList(urlFetch.value)

    objects.value.items.push(...data.data.items)
    objects.value.current_page = data.data.current_page
  }

  const resetList = () => {
    filters.value = {
      [filterName.price]: [
        filterList && filterList.value[filterName.price].value.min,
        filterList && filterList.value[filterName.price].value.max
      ],
      [filterName.square]: [
        filterList && filterList.value[filterName.square].value.min,
        filterList && filterList.value[filterName.square].value.max
      ],
      [filterName.room]: [],
      [filterName.tag]: [],
      [filterName.free]: false,
    }

    sort.value = ''
  }

  watch([() => objects.value.items, () => page.value],
    () => {
      page.value === objects.value.total_pages
        ? isLoadingMore.value = true
        : isLoadingMore.value = false
    }
  )

  return {
    sortItems,
    filterName,
    filterList,
    filters,
    sort,
    page,
    stepLoad,
    objects,
    loadObjects,
    isLoadingMore,
    isLoadingFilter,
    isEnd,
    urlFetch,
    fetchObjectList,
    applayLoadObjects,
    loadMoreObjects,
    resetList,
  }
}
