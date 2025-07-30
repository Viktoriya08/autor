<script setup lang="ts">
  defineProps<{
    show: boolean,
    titleModal?: string,
  }>()

  const emit = defineEmits(['close'])
</script>

<template>
  <Transition name="tour">
    <div v-if="show" class="modal-base">
      <div class="modal-base__bg"/>

      <div class="modal-base__body">
        <div class="tour">ссылка 3D-ТУР</div>
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
