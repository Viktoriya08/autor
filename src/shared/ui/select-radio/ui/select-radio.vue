<script setup lang="ts">
  import modal from '@/widgets/modals/modal/modal.vue'

  type SelectRadio = {
    name: string
    items: Array<{
      value: string
      text: string
    }>
  }

  defineProps<SelectRadio>()

  const refModal = ref<InstanceType<typeof modal> | null>(null)
  const typeViewport = inject('typeViewport')
  const list = useTemplateRef('list')

  const state = reactive({
    isOpen: false,
    value: '',
    text: 'По умолчанию'
  })

  const model = defineModel<string>()

  watch(state, () => {
    model.value = state.value
  })

  const openSelect = (e: Event) => {
    e.stopPropagation()
    state.isOpen = !state.isOpen
  }

  const changeSelect = (value: string, text: string) => {
    state.isOpen = false
    state.value = value
    state.text = text
  }

  onMounted(() => {
    if (list.value) {
      window.addEventListener('click', (e) => {
        const target = e.target as HTMLElement

        if ((target !== list.value)) {
          state.isOpen = false
        }
      })
    }
  })
</script>

<template>
  <div :class="['select-radio', {'is-active': state.isOpen}]">
    <button class="select-radio__btn" @click="openSelect($event), refModal?.openModal()">
      <span>{{ state.text }}</span>

      <span class="select-radio__btn-icon">
        <icon-sprite icon="chevron-d-14"/>
      </span>
    </button>

    <div
      v-if="typeViewport !== 'mobile'"
      ref="list"
      class="select-radio__list">

      <radio-btn
        v-for="item, index in items"
        :key="index"
        class="radio-btn--blue radio-btn--m"
        :name="name"
        :value="item.value"
        :text="item.text"
        :checked="item.value === state.value"
        @click.self="changeSelect(item.value, item.text)"
      />
    </div>

    <modal
      v-else
      ref="refModal"
      heading="сортировка"
      theme="blue">

      <div class="select-radio__modal">
        <radio-btn
          v-for="item, index in items"
          :key="index"
          class="radio-btn--transparent radio-btn--l"
          :name="name"
          :value="item.value"
          :text="item.text"
          :checked="item.value === state.value"
          @click.self="changeSelect(item.value, item.text), refModal?.closeModal()"
        />
      </div>
    </modal>
  </div>
</template>

<style scoped lang="scss">
  @import './style';
</style>
