import useVuelidate from '@vuelidate/core'
import { requiredField, phoneMinLength } from '@/shared/lib/validators'
import { submitSendRequest } from '../api/submitSendRequest'
import type { RequestData } from '../model/types'

export const useSendRequset = () => {
  const isSubmitting = ref(false)
  const isSend = ref(false)

  const formData = ref({
    name: '',
    phone: '',
  })

  const rules = computed(() => ({
    name: { required: requiredField },
    phone: {
      required: requiredField,
      minLength: phoneMinLength
    },
  }))

  const v$ = useVuelidate(rules, formData)

  const handlerSubmit = async(data: RequestData) => {
    if (!data) {
      return
    }

    v$.value.$touch()

    if (!v$.value.$invalid) {
      isSubmitting.value = true

      try {
        await submitSendRequest(data)

        formData.value = { name: '', phone: '' }
        isSend.value = true
        v$.value.$reset()
      } catch(error) {
        console.error(error)
      }

      isSubmitting.value = false
    }
  }

  return {
    v$,
    formData,
    isSubmitting,
    isSend,
    handlerSubmit,
  }
}
