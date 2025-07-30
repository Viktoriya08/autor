<script setup lang="ts">
  import { useFloorPlan } from '../../model/useFloorPlan'
  import type { ListRoom } from '../../types';

  const props = defineProps<{
    plan: string
    rooms: ListRoom
  }>()

  const typeViewport = inject('typeViewport')
  const refPlan = useTemplateRef('plan')
  const tooltip = ref(null)

  const { init, activeRoom } = useFloorPlan(props.rooms, typeViewport)

  onMounted(() => {
    const elPlan = refPlan?.value
    const elTooltip = tooltip?.value?.$el

    if (elPlan && elTooltip) {
      init(elPlan, elTooltip)
    }
  })
</script>

<template>
  <div :class="cls['floor-plan']">
    <div
      ref="plan"
      :class="cls['floor-plan__img']"
      v-html="plan"
    />

    <tooltip-room
      ref="tooltip"
      :room="activeRoom?.room"
      :number="activeRoom?.number"
      :square="activeRoom?.square"
      :price="activeRoom?.price"
      :state="activeRoom?.free"
      :class="[cls['floor-plan__tooltip']]"
    />
  </div>
</template>

<style lang="scss" module="cls">
  @import './styles';
</style>
