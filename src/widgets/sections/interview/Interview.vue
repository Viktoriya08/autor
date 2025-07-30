<script setup lang="ts">
  import type { APIRequestVideo } from '@/widgets/sections/interview/types'

  const dataVideo = await useAPI<APIRequestVideo>(`api/v1/invest/interview`)
</script>

<template>

  <section v-if="dataVideo" class="interview" data-switch-theme="bronze-promo">
    <div class="wrapper wrapper--s">
      <h2 class="interview__title" v-html="dataVideo.name"/>

      <VideoPlayer :video-src="dataVideo.video_review" class="interview__video-box">
        <template #video-player-btn>
          <BtnPlay text="смотреть"/>
        </template>
      </VideoPlayer>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
