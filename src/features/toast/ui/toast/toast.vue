<script setup lang="ts">
  import { useToast } from '../../model/useToast'

  const { toasts, remove } = useToast()
</script>

<template>
  <div :class="'toast'" >
    <TransitionGroup name="toast">
      <toast-message
        v-for="toast in toasts"
        :key="toast.id"
        :text="toast.message"
        :type="toast.type"
        :icon="toast.icon"
        @click="remove(toast.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
