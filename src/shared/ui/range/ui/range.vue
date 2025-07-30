<script setup lang="ts">
  import numberWithSpaces from '@/shared/utils/helpers/numberWithSpaces'
  import Slider from '@vueform/slider'

  export interface InputRangeProps {
    min?: number;
    max?: number;
    step?: number;
    tooltips?: boolean;
    leftPrefix?: string;
    rightPrefix?: string;
  }

  const props = withDefaults(defineProps<InputRangeProps>(), {
    min: 0,
    max: 100,
    step: 1,
    tooltips: false,
    leftPrefix: 'от',
    rightPrefix: 'до',
  });

  // const innerValue = ref<number | [number, number]>([0, 50]);
  const innerValue = ref<number | [number, number]>([props.min, props.max])
  const modelValue = defineModel <number | [number, number]>({
    get(v) {
      return v ?? innerValue.value;
    },
    set(v) {
      innerValue.value = v;
      return v;
    },
  });
</script>

<template>
  <div class="range">
    <div v-if="Array.isArray(modelValue)" class="range__value">
      <span v-if="leftPrefix" class="range__value-prefix">{{leftPrefix}}</span>

      <span v-if="Array.isArray(modelValue)" class="range__value-result">
        {{ numberWithSpaces(modelValue[0], '') }}
      </span>
    </div>

    <div class="range__value">
      <span v-if="rightPrefix" class="range__value-prefix">{{rightPrefix}}</span>

      <span v-if="Array.isArray(modelValue)" class="range__value-result">
        {{ numberWithSpaces(modelValue[1], '') }}
      </span>

      <span v-else class="range__value-result">{{ numberWithSpaces(modelValue, '') }}</span>
    </div>

    <div class="range__slider">
      <Slider
        v-model="modelValue"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :tooltips="false"
      />
    </div>
  </div>
</template>

<style lang="scss">
  @import './style';
</style>
