<script setup lang="ts">
  import { useAudioBg } from '../model/useAudioBg'

  const { isExist, isActive, toggleAudioBg } = useAudioBg()
</script>

<template>
  <btn-audio
    :class="[{'is-active': isActive}, {'is-hidden': !isExist}]"
    @click="toggleAudioBg"
  />
</template>
