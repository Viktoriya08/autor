<script setup lang="ts">

import type Lenis from 'lenis'

const showModal = ref(false)
const scroll: Lenis | undefined = inject('lenis')
const route = useRoute()
const isInternal = route.meta.type === 'internal'

defineProps<{
  mobileFor?: boolean,
  themeClass?: string,
}>()

const openModal = () => {
  const body = document.body
  showModal.value = true;
  scroll?.stop()

  body?.classList.add('modal-open')
}

const closeModal = () => {
  const body = document.body
  showModal.value = false;
  scroll?.start()

  body?.classList.remove('modal-open')
}

</script>

<template>
  <div class="tour-btn">
    <a v-if="mobileFor" href="#" :class="themeClass" @click.prevent="openModal">3D-тур</a>
    <LinkBase
      v-else
      href="#"
      :class="['link-base--m', 'link-base--nav', 'header__tel', isInternal ? 'link-base--dark' : 'link-base--blue']"
      text="3D-тур"
      @click.prevent="openModal"
    />

    <Teleport defer to="#modals">
      <ModalTour :show="showModal" title-modal="оставьте контакты" class="modal-base--full" @close="closeModal"  />
    </Teleport>
  </div>
</template>

<style style lang="scss">
  @import './styles';
</style>
