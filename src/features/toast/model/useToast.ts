let counter = 0
const toasts = ref<{ id: number, message: string, type: string, icon?: string }[]>([])

export const useToast = () => {
  const info = (message: string, icon?: string) => {
    const id = counter++
    const type = 'info'
    toasts.value.push({ id, message, type, icon })

    setTimeout(() => remove(id), 4000)
  }

  const remove = (id: number) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts,
    info,
    remove,
  }
}
