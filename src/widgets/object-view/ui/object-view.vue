<script setup lang="ts">
  import { API_BASE_URL, BASE_URL, PUBLIC_REMOTE } from '@/shared/config'

  defineProps<{
    imgs: {1: string, 2: string}
    minimap: string
    activeId: string
    pdf?: string
  }>()

  const typeViewport = inject('typeViewport')

  const itemSwitch = [
    {text: 'c мебелью'},
    {text: 'без мебели'}
  ]

  const indexActiveSlide = ref(1)

  const switchSlide = (index: number) => {
    indexActiveSlide.value = index + 1
  }
</script>

<template>
  <div :class="cls['object-view']">
    <div :class="cls['header']">
      <div :class="cls['header__center']">
        <popover-share />

        <btn-ghost
          v-if="(typeViewport === 'desktop') && pdf"
          :class="['btn-ghost--s', 'btn-ghost--dark']"
          text="Презентация в PDF"
          icon="document"
          download
          :href="`${PUBLIC_REMOTE}${pdf}`"
          target="_blank"
        />

        <btn-icon
          v-if="(typeViewport != 'desktop') && pdf"
          :class="['btn-icon--s', 'btn-icon--dark-bd']"
          name="pdf"
          text="скачать презентацию"
          download
          :href="`${PUBLIC_REMOTE}${pdf}`"
          target="_blank"
        />
      </div>

      <!-- <div :class="cls['header__right']">
        <btn-ghost
          v-if="typeViewport === 'desktop'"
          class="btn-ghost--s btn-ghost--dark"
          text="вид из окна"
          icon="eye"
        />

        <btn-main
          v-else
          class="btn-main--s btn-main--dark-bd"
          text="вид из окна"
          icon="eye"
        />
      </div> -->
    </div>

    <div :class="cls['gallery']">
      <div
        v-for="(img, index) in imgs"
        :key="index"
        :class="[cls['gallery__img'], {[cls['gallery__img--active']]: (index == indexActiveSlide)}]"
      >
        <picture v-if="img">
          <img :src="`${API_BASE_URL}${img}`" alt="планировка квартиры">
        </picture>

        <img-placeholder
          v-if="!img"
          class="img-placeholder--l img-placeholder--yellow"
        />
      </div>
    </div>

    <Switch
      :class="cls['controls']"
      :items="itemSwitch"
      @switch-item="switchSlide"
    />

    <img
      :class="cls['compass']"
      :src="`${BASE_URL}/image/compass/1.svg`"
      alt="роза ветров"
    >

    <div :class="cls['minimap']">
      <Minimap
        :img="minimap"
        :active-id="activeId"
      />
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
