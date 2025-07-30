<script setup lang="ts">
  import { PUBLIC_REMOTE, PERSONAL_CONSENT } from '@/shared/config'
  import { useSwitchTheme } from '@/features/switch-theme/model/useSwitchTheme'
  import { useCooks } from '../model/useCooks'

  const {
    stateCookies,
    setCookie,
    hasCookie,
    updateTheme,
    resetTheme,
    stateTheme
  } = useCooks()

  const app = useNuxtApp()
  let observer: IntersectionObserver | undefined
  const el = useTemplateRef('cookie')

  const setObserver = () => {
    if (el.value) {
      observer = useSwitchTheme(el.value, updateTheme, resetTheme)
    }
  }

  onMounted(async() => {
    if(hasCookie()) {
      stateCookies.value = false
    } else {
      stateCookies.value = true

      observer?.disconnect()

      await nextTick()
      setObserver()
    }
  })

  app.hook('page:transition:finish', async() => {
    observer?.disconnect()

    await nextTick()
    setObserver()
  })
</script>

<template>
  <Transition>
    <div
      v-if="stateCookies"
      id="cookies"
      ref="cookie"
      :class="['cookies', {[`cookies--${stateTheme.active}`]: stateTheme.active}]">

      <div class="cookies__box">
        <div class="cookies__text">Мы используем файлы cookie.
          <!-- <a :href="`${PUBLIC_REMOTE}${PERSONAL_CONSENT}`" class="cookies__link"> Подробнее</a> -->
          <link-base
            :class="[
              'link-base--m',
              'link-base--underline-reverse',
              `link-base--${stateTheme.active}`
            ]"
            :href="`${PUBLIC_REMOTE}${PERSONAL_CONSENT}`"
            text="Подробнее"
            target="_blank"
          />
        </div>

        <BtnPrimary
          :class="['cookies__btn', 'btn-primary--s', `btn-primary--${stateTheme.active}`]"
          text="Принять"
          @click="setCookie()"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
  @import './styles';
</style>
