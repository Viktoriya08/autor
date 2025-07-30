import { required, helpers, minLength } from '@vuelidate/validators'

export const requiredField = helpers.withMessage(
  'Поле обязательно для заполнения',
  required
)

export const phoneMinLength = helpers.withMessage(
  'Некорректный номер телефона',
  minLength(16)
)

