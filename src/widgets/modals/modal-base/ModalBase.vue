<script setup lang="ts">
  defineProps({
    show: Boolean
  })

  const emit = defineEmits(['close'])
</script>

<template>
  <Transition>
    <div v-if="show" class="modal-base">
      <div class="modal-base__bg"/>

      <div class="modal-base__body modal-base__body--right">
        <div class="modal-base__content modal-order">
          <slot name="modal-reviews" />
        </div>

        <!-- <slot name="modal-video" /> -->
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
