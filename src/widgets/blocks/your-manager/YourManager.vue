<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
  import type { YourManagerData } from '@/shared/types'
  import modal from '@/widgets/modals/modal/modal.vue'
  import YourManagerDefaultData from './data/your-manager-default-data'

  const refModal = ref<InstanceType<typeof modal> | null>(null)

  const openModalRequest = () => {
    if (refModal.value?.openModal) {
      refModal.value.openModal()
    }
  }

  const props = defineProps<{
    data?: YourManagerData
  }>()

  const managerData = computed(() => props.data ?? YourManagerDefaultData)
</script>

<template>
  <div class="your-manager theme-yellow">
    <div class="your-manager__grid">
      <h2 class="your-manager__title" v-html="managerData.title"/>

      <div class="your-manager__right">
        <div v-if="managerData.img" class="your-manager__img">
          <img :src="`${BASE_URL}/${managerData.img}`" width="896" height="983" alt="фото менеджера"  loading="lazy">
        </div>
        
        <div class="your-manager__info">
          <p class="your-manager__text">{{ managerData.text }}</p>

          <SocialLinks class="your-manager__social" theme-class="link-social--color-brown"/>

          <BtnPrimary
            class="btn-primary--yellow btn-primary--m your-manager__btn"
            text="оставить заявку"
            @click="openModalRequest"
          />
        </div>
      </div>
    </div>

    <modal
      ref="refModal"
      mod="aside">

      <form-request class="form--modal" type="payment"/>
    </modal>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
