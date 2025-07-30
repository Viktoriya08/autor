<script setup lang="ts">
  defineProps<{
    heading?: string
    theme?: string
    mod?: string
  }>()

  const { $lenis } = useNuxtApp()
  const isOpen = ref(false)

  const closeModal = () => {
    isOpen.value = false
    $lenis?.start()
  }

  const openModal = () => {
    isOpen.value = true
    $lenis?.stop()
  }

  defineExpose({ openModal, closeModal })
</script>

<template>
  <ClientOnly>
    <Teleport defer to="#modals">
      <Transition name="default">
        <div
          v-if="isOpen"
          :class="[
            cls['modal'],
            cls[`modal--${theme ? theme : 'yellow'}`],
            {[cls[`modal--${mod}`]]: mod}
          ]">

          <div
            :class="cls['modal__overlay']"
            @click="closeModal"
          />

          <div :class="cls['modal__main']" data-lenis-prevent>
            <btn-close
              :class="['btn-close--l', `btn-close--yellow`, cls['modal__close']]"
              name="close"
              text="закрыть модальное окно"
              @click="closeModal"
            />

            <div :class="cls['modal__body']">
              <div v-if="heading" :class="cls['modal__heading']">{{ heading }}</div>

              <slot />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
