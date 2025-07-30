<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
  import { useMenuMain } from '../menu-main'

  const props = defineProps<{
    theme: string
    text: string
    href?: string
  }>()

  const emit = defineEmits(['click'])

  const isActive = ref(false)
  const choiceBox = useTemplateRef('choice-catalog')
  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  const { $lenis } = useNuxtApp()
  const { closeMenu } = useMenuMain()

  function clickOutside(event: MouseEvent) {
    const eventClick = event.target as HTMLElement;

    if (eventClick === choiceBox.value || choiceBox.value?.contains(eventClick)) return

    closeModal()
  }

  const openModal = () => {
    isActive.value = !isActive.value ? true : false;

    if(typeViewport?.value === 'mobile') {
      $lenis?.stop()
    }

    const body= document.getElementById('page')
    body?.addEventListener("click", clickOutside, false);
  }

  const closeModal = () => {
    isActive.value = false;
    $lenis?.start()

    const body= document.getElementById('page')
    body?.removeEventListener("click", clickOutside, false);
  }

  const imgSrc = computed(() => {
    switch(props.theme) {
      case 'yellow':
      case 'bronze':
        return [
          '/image/choice-links/nav-filters_floor-yellow.svg',
          '/image/choice-links/nav-filters_filter-yellow-2.svg'
        ]

      default:
        return [
          '/image/choice-links/nav-filters_floor.svg',
          '/image/choice-links/nav-filters_filter.svg'
        ]
    }
  })

  const closeMenuMain = () => {
    closeMenu()
    emit('click', false)
  }
</script>

<template>
  <div
    ref="choice-catalog"
    :class="['nav-filters', {[`nav-filters--${theme}`] : theme}]">

    <btn-tertiary
      :class="['btn-tertiary--m', `btn-tertiary--${theme}`]"
      icon="arrow-ur"
      :text="text"
      :href="href"
      @click="href ? closeMenuMain() : openModal()"
    />

    <Transition name="nav-filters">
      <div v-if="isActive" class="nav-filters__wrap">
        <div class="nav-filters__head">
          <h3 class="nav-filters__title">выбрать апартаменты</h3>

          <div class="nav-filters__close">
            <btn-close
              :class="['btn-close--l', `btn-close--yellow`]"
              name="close"
              text="закрыть модальное окно"
              @click="closeModal"
            />
          </div>
        </div>

        <div class="nav-filters__box">
          <div class="nav-filters__elem" @click="closeModal">
            <div class="nav-filters__icon">
              <icon-sprite icon="eye" />
            </div>

            <div class="nav-filters__img">
              <img
                class="nav-filters__picture"
                :src="`${BASE_URL}${imgSrc[0]}`"
                width="620"
                height="430"
                alt="дом"
              >
            </div>

            <NuxtLink
              to="/floors"
              class="nav-filters__link"
              @click="closeMenu(), $emit('click', false)">

              <span class="nav-filters__text">Выбор на <br> плане</span>
            </NuxtLink>
          </div>

          <div class="nav-filters__elem" @click="closeModal">
            <div class="nav-filters__icon">
              <icon-sprite icon="filters" />
            </div>

            <div class="nav-filters__img">
              <img
                class="nav-filters__picture"
                :src="`${BASE_URL}${imgSrc[1]}`"
                width="620"
                height="430"
                alt="горы"
              >
            </div>

            <NuxtLink
              to="/objects"
              class="nav-filters__link"
              @click="closeMenu(), $emit('click', false)">

              <span class="nav-filters__text">выбор по <br> параметрам</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
