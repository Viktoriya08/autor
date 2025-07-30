<script setup lang="ts">
  import { useHeader } from '../model/useHeader'
  import { useSwitchTheme } from '@/features/switch-theme/model/useSwitchTheme'
  // import { actionMetric } from '@/shared/utils/metrika'

  const {
    theme,
    updateTheme,
    resetTheme
  } = useHeader()

  const app = useNuxtApp()
  let observer: IntersectionObserver | undefined
  const globData = useGlobData()
  const header = useTemplateRef('header')

  const typeTheme = ref('base')

  const isMenuOpen = ref(false)
  const toggleStateMenu = (state: boolean) => {
    isMenuOpen.value = state
  }

  const setObserver = () => {
    if (header.value) {
      observer = useSwitchTheme(header.value, updateTheme, resetTheme)
    }
  }

  onMounted(() => {
    observer?.disconnect()
    setObserver()
  })

  app.hook('page:transition:finish', async() => {
    observer?.disconnect()

    await nextTick()
    setObserver()
  })

  watch(
    () => isMenuOpen.value,
    () => {
      typeTheme.value = isMenuOpen.value ? 'alt' : 'base'
    }
  )
</script>

<template>
  <header
    id="header"
    ref="header"
    :class="['header', `header--${theme.active.main[typeTheme]}`, {['header--transparent']: isMenuOpen}]">

    <div class="wrapper header__wrapper">
      <div class="header__controls">
        <menu-main
          :theme="theme.active.controls[typeTheme]"
          @click="toggleStateMenu"
        />
        <!-- <LinkBase
          :class="['link-base--m', 'link-base--nav', 'header__tel', `link-base--${mainStyle.active}`]"
          href="#"
          text="3D-тур"
        /> -->

        <!-- <TourBtn class="header__3d" /> -->
        <!-- <audio-bg-toggle :class="`btn-icon--${mainStyle.active}`"/> -->
        <audio-bg-toggle :class="`btn-icon--${theme.active.controls[typeTheme]}`"/>
      </div>

      <LogoMain
        :link="true"
        class="header__logo"
      />

      <div class="header__controls">
        <LinkBase
          v-if="globData.phone['1']"
          :class="['link-base--m', 'link-base--nav', 'header__tel', `link-base--${theme.active.controls[typeTheme]}`]"
          :href="`tel:${globData.phone['1'].value}`"
          :text="globData.phone['1'].text"
        />

        <div class="header__choice ">
          <nav-filters
            :theme="theme.active.navFilter.theme[typeTheme]"
            :text="theme.active.navFilter.text"
            :href="theme.active.navFilter.href"
            @click="toggleStateMenu"
          />
        </div>

        <!-- <BtnPrimary class="btn-primary btn-primary--icon" text="получить предложение" icon="arrowUR" @click.prevent="scrollToOffer($event), actionMetric('click_get_offer')" href="#offer"/> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  @import './styles';
</style>
