<script setup lang="ts">
  defineProps({
    show: Boolean
  })

  const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="default">
    <div v-if="show" class="modal-base modal-base--size-l" data-lenis-prevent>
      <div class="modal-base__bg"/>

      <div class="modal-base__body modal-base__body--right">
        <div class="modal-base__content-box">
          <div class="modal-base__content">
            <slot name="modal-reviews" />
          </div>
        </div>
      </div>

      <BtnIcon
        name="close" class="btn-icon--size-s btn-icon--color-yellow modal-base__close"
        @click="emit('close')"
      />
    </div>
  </Transition>
</template>

<style lang="scss">
  @import './styles';
</style>
