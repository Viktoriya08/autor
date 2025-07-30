<script setup lang="ts">
  import { PUBLIC_REMOTE } from '@/shared/config'

  const video = ref<HTMLVideoElement>();
  const videoIsLoad = ref(true)
  const isPlaying = ref(false)

  const props = defineProps<{
    videoSrc?: string | null,
  }>()

  onUnmounted(() => {
    video.value?.removeEventListener('play', playHandler)
    video.value?.removeEventListener('pause', pauseHandler)
  })


  function playHandler() {
    isPlaying.value = true;
  }

  function pauseHandler() {
    isPlaying.value = false;
  }

  function clickHandler() {
    if(videoIsLoad.value && video.value?.readyState == 4) {
      videoIsLoad.value = true

      if (isPlaying.value) {
        video.value?.pause();
      } else {
        video.value?.play();
      }
    } else {
      videoIsLoad.value = false
      console.log('Ошибка загрузки src видео = ' + props.videoSrc)
    }
  }

  onMounted(() => {
    video.value?.addEventListener('play', playHandler);
    video.value?.addEventListener('pause', pauseHandler);
  })
</script>

<template>

  <div class="video-player" :class="{ 'is-playing': isPlaying, 'is-error': !videoIsLoad }" @click="clickHandler">
    <video
      ref="video"
      class="video-player__video"
      width="810"
      height="518"
      disablepictureinpicture
    >
      <source :src="`${PUBLIC_REMOTE}${videoSrc}`" type="video/mp4">
    </video>

    <div
      v-if="videoIsLoad" class="video-player__btn" >
      <slot name="video-player-btn"/>
    </div>

    <span v-if="!videoIsLoad" class="video-player__error" >Ошибка загрузки видео</span>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
