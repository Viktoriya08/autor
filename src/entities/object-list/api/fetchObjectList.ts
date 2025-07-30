type FetchOptions = {
  abortController?: AbortController
}

export const fetchObjectList = async(url: string, options: FetchOptions = {} ) => {
  if (!url) {
    return
  }

  const { abortController } = options
  const signal = abortController?.signal

  return await $fetch(url, { signal })
}
