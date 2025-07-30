<script setup lang="ts">
  import { useSendRequset } from '../model/useSendRequest'
  import { actionMetric } from '@/shared/utils/metrika'
  import { PUBLIC_REMOTE, PERSONAL_POLITIC, PERSONAL_CONSENT } from '@/shared/config'
  import { paramForm } from '../data'

  const props = defineProps<{
    type?: string
    dataId?: string
  }>()

  const { v$, formData, isSubmitting, isSend, handlerSubmit } = useSendRequset()

  const submitForm = (e: Event) => {
    if (e.target instanceof HTMLFormElement) {
      const data = new FormData(e.target)
      const sessionId = window.ct('calltracking_params','nfkfy4ye')?.sessionId

      if (sessionId) {
        data.set('calltracking_params', sessionId)
      }

      handlerSubmit(data)
      actionMetric('form_submit')
    }
  }

  const formParam = computed(() => {
    switch(props.type) {
      case 'offer':
        return paramForm['offer']

      case 'product':
        return paramForm['product']

      case 'payment':
        return paramForm['payment']

      case 'invest':
        return paramForm['invest']

      default:
        return paramForm['default']
    }
  })
</script>

<template>
  <Form
    :title="formParam.title"
    :class="cls['form-request']"
    :result="isSend"
    @submit.prevent="submitForm($event)">

    <template #default>
      <InputMain
        v-model="formData.name"
        type="text"
        name="name" placeholder="имя"
        :errors="v$.name.$errors"
        maska-input-type="name"
      />

      <InputMain
        v-model="formData.phone"
        type="text"
        name="phone"
        placeholder="телефон"
        maska="+7 ###-###-##-##"
        :errors="v$.phone.$errors"
      />

      <InputMain
        type="text"
        name="comment"
        placeholder="комментарий"
      />

      <input v-if="dataId" type="text" name="id" :value="dataId" hidden>

      <input type="text" name="fail-name" hidden>
    </template>

    <template #form-submit>
      <BtnPrimary
        :text="formParam.submit.text"
        :class="`btn-primary--${formParam.submit.theme} btn-primary--m`"
        :disabled="isSubmitting"
        type="submit"
      />
    </template>

    <template #form-note>
      <p class="form__note">
        Нажимая на кнопку "{{ formParam.submit.text }}" я даю
        <link-base
          class="link-base--dark-invert"
          text="согласие "
          :href="`${PUBLIC_REMOTE}${PERSONAL_CONSENT}`"
          target="_blank"
        />
        на обработку персональных данных согласно
        <link-base
          class="link-base--dark-invert"
          text="политике&nbsp;обработки персональных данных"
          :href="`${PUBLIC_REMOTE}${PERSONAL_POLITIC}`"
          target="_blank"
        />
      </p>
    </template>

    <template #form-result>
      <div :class="['form-result', {[`form-result--${formParam.result?.theme}`] : formParam.result?.theme}]">
        <span class="form-result__icon">
          <icon-sprite icon="heart-big" />
        </span>

        <h3 class="form-result__title">Ваше Сообщение <br> отправлено! </h3>
        <p class="form-result__text">Мы обязательно свяжемся с вами в ближайшее время</p>
      </div>
    </template>
  </Form>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
