<script setup lang="ts">
  defineProps({
    show: Boolean
  })

  const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="default">
    <div v-show="show" class="modal-base modal-base--gallery" data-lenis-prevent>
      <div class="modal-base__bg"/>

      <div class="modal-base__body">
        <div class="modal-base__content modal-gallery">
          <slot name="modal-gallery" />
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
