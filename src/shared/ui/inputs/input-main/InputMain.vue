<script setup lang="ts">
  import { vMaska } from "maska/vue"  // https://beholdr.github.io/maska/v3/#/vue
  import type { ErrorObject } from '@vuelidate/core';

  export interface InputTemplateProps {
    type?: string
    name?: string
    placeholder?: string
    errors?: string[] | ErrorObject[]
    maska?: string
    maskaInputType?: string
  }

  withDefaults(defineProps<InputTemplateProps>(), {
    type: '',
    name: '',
    placeholder: '',
    maska: '',
    maskaInputType: '',
    errors: () => [],
  });

  const modelValue = defineModel<string | number>();

  const nameInputMaska = {
    mask: 'A',
    tokens: {
      A: { pattern: /[A-Za-zА-Яа-я\s-]/, multiple: true },
    },
  }
</script>

<template>
  <div
    class="input-main"
    :class="{ error: errors.length }"
  >
    <div class="input-main__box">
      <input
        v-if="maskaInputType === 'name'"
        v-model="modelValue"
        v-maska="nameInputMaska"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        class="input-main__input"
      >

      <input
        v-else
        v-model="modelValue"
        v-maska="maska"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        class="input-main__input"
      >
    </div>
    <div v-if="errors.length" class="input-main__error text text--sm">
      {{ typeof errors[0] === 'string' ? errors[0] : errors[0].$message }}
    </div>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
