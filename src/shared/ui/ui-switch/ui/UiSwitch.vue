<script setup lang="ts">
  import { ref, onMounted, onUnmounted, onUpdated } from 'vue'
  import type { IUiSwitchTrigger, IUiSwitchActiveTriggerCb } from '../config/types'
  import UiSwitch from '../config/UiSwitch'
  import { scrollToAnchor } from '@/shared/utils/scroll-to-anchor'

  defineProps<{
    triggers: IUiSwitchTrigger[]
    activeTab?: string
    customTriggerClickCb?: ((e: MouseEvent) => void) | ((e: Event) => void)
    theme?: string
    linkElem?: boolean
  }>()

  const emit = defineEmits(['switchItem']);

  const uiSwitchRef = ref<HTMLElement | null>(null)

  let uiSwitchInstance: UiSwitch | null = null

  function activateTrigger({ index, activeTab, key }: IUiSwitchActiveTriggerCb): Record<string, string | null> {
    const isActive = activeTab ? activeTab === key : index === 0

    return {
      'data-ui-switch-active-trigger': isActive ? '' : null,
      'aria-pressed': isActive.toString(),
    }
  }

  const scrollToNext = (e: Event) => {
    const target = e.target as HTMLElement
    const link = target?.closest('[href]') as HTMLElement

    if(link) {scrollToAnchor(link)}
  }

  onMounted(() => {
    if (uiSwitchRef.value) {
      uiSwitchInstance = new UiSwitch(uiSwitchRef.value)
      uiSwitchInstance.init()
    }
  })

  onUnmounted(() => {
    uiSwitchInstance?.destroy()
    uiSwitchInstance = null
  })

  onUpdated(() => {
    uiSwitchInstance?.reinit()
  })
</script>

<template>
  <div
    ref="uiSwitchRef"
    :class="[uiSwitch['ui-switch'], uiSwitch[`ui-switch--${theme}`]]"
    data-ui-switch="parent"
  >
    <menu :class="uiSwitch['ui-switch__triggers-list']">
      <li
        v-for="({
        key,
        name,
        attrs,
        scopedWidgetClassMods = [],
        classMods = [],
      }, index) in triggers"
        :key="key"
        :class="uiSwitch['ui-switch__item']"
      >
        <a
          v-if="linkElem"
          :href="`#elem-` + name"
          :data-index="index"
          :class="[
            uiSwitch['ui-switch__trigger'],
            ...scopedWidgetClassMods.map((mod: string) => uiSwitch[mod]),
            ...classMods,
          ]"
          v-bind="{
            ...activateTrigger({index, activeTab, key}),
            ...attrs,
          }"
          type="button"
          data-ui-switch="trigger"
          @click.prevent="scrollToNext"
          >{{ name }}
        </a>
        <button
          v-else
          :class="[
          uiSwitch['ui-switch__trigger'],
          ...scopedWidgetClassMods.map((mod: string) => uiSwitch[mod]),
          ...classMods,
          ]"
            v-bind="{
            ...activateTrigger({index, activeTab, key}),
            ...attrs,
          }"
            type="button"
            data-ui-switch="trigger"
            @click="emit('switchItem', index)"
          >{{ name }}
        </button>
      </li>
    </menu>

    <span
      :class="uiSwitch['ui-switch__indicator']"
      aria-hidden="true"
      data-ui-switch="indicator"
    >~</span>
  </div>
</template>

<style lang="scss" module="uiSwitch">
  @import './styles';
</style>
