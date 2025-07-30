<script setup lang="ts">
  defineProps<{
    result?: false | true
    title?: string
  }>()
</script>

<template>
  <form :class="['form', {['is-send'] : result}]">
    <h2 v-if="title" class="form__title">{{ title }}</h2>

    <div class="form__body">
      <slot name="form-head" />

      <div class="form__inputs">
        <slot/>
      </div>

      <div class="form__bottom">
        <slot name="form-submit" />
        <slot name="form-note" />
      </div>
    </div>

    <div class="form__result">
      <slot name="form-result" />
    </div>
  </form>
</template>

<style lang="scss">
  @import './styles';
</style>
