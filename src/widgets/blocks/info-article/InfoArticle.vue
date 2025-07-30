<script setup lang="ts">
  import modal from '@/widgets/modals/modal/modal.vue'

  defineProps<{
    title?: string,
    btnOffer?: boolean,
  }>()

  const refModal = ref<InstanceType<typeof modal> | null>(null)

  const openModalRequest = () => {
    if (refModal.value?.openModal) {
      refModal.value.openModal()
    }
  }
</script>

<template>
  <article class="info-article">
    <div class="wrapper wrapper--s">
      <div class="info-article__box">
        <div class="info-article__grid">
          <div class="info-article__left">
            <h2 v-if="title" class="info-article__title">{{ title }}</h2>
          </div>

          <div class="info-article__right">
            <div class="info-article__content">
              <slot name="info-article-text"/>
            </div>

            <BtnPrimary
              v-if="btnOffer"
              class="btn-primary--blue btn-primary--m"
              text="оставить заявку"
              @click="openModalRequest"
            />
          </div>
        </div>

        <slot name="info-article-info"/>
      </div>
    </div>

    <modal
      ref="refModal"
      mod="aside">

      <form-request class="form--modal" type="payment"/>
    </modal>
  </article>
</template>

<style lang="scss">
  @import './styles';
</style>
