import { API_BASE_URL } from '@/shared/config'
import type { RequestData } from '../model/types'

const apiPath = 'api/v1/form'

export const submitSendRequest = async(data: RequestData) => {
  const urlParam = new URLSearchParams(data).toString()

  const response = await $fetch(`${API_BASE_URL}/${apiPath}?${urlParam}`, {
    method: 'POST',
  })

  return response
}
