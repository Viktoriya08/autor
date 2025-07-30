<script setup lang="ts">
  import modal from '@/widgets/modals/modal/modal.vue'

  const isOpen = ref(false)
  const body = useTemplateRef('body')
  const typeViewport = inject('typeViewport')
  const refModal = ref<InstanceType<typeof modal> | null>(null)

  const togglePopover = (e: Event) => {
    e.stopPropagation()
    isOpen.value = !isOpen.value
  }

  const openModal = () => {
    if (refModal?.value?.openModal) {
      refModal.value.openModal()
    }
  }

  onMounted(() => {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement

      if ((target !== body.value)) {
        isOpen.value = false
      }
    })
  })
</script>

<template>
  <div :class="[cls['popover-share'], {[cls['is-active']]: isOpen}]">
    <btn-ghost
      v-if="typeViewport === 'desktop'"
      :class="[cls['popover-share__control'], 'btn-ghost--s', 'btn-ghost--dark']"
      text="поделиться"
      icon="arrow-ur"
      @click="togglePopover($event)"
    />

    <btn-icon
      v-if="typeViewport !== 'desktop'"
      :class="['btn-icon--s', 'btn-icon--dark-bd']"
      name="arrow-ur"
      text="поделиться страницей"
      @click="openModal"
    />

    <div
      v-if="typeViewport === 'desktop'"
      ref="body"
      :class="cls['popover-share__body']">

      <share-links
        link-size="m"
        link-theme="white"
      />
    </div>

    <modal
      v-else
      ref="refModal"
      heading="поделиться">

      <share-links
        mod="modal"
        link-size="l"
        link-theme="white"
      />
    </modal>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
