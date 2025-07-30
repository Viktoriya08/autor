<script setup lang="ts">
  import type { CardFeature } from './types';
  import { PUBLIC_REMOTE } from '@/shared/config'

  const props = defineProps<CardFeature>()
  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  const isClient = import.meta.client

  const currContent = computed(() => {
    return {
      title: typeViewport?.value === 'mobile' ? props.title.mobile : props.title.default,
      text: typeViewport?.value === 'mobile' ? props.text.mobile : props.text.default,
      params: (typeViewport?.value === 'mobile') && props.params
        ? (props.params.mobile || props.params.default)
        : props.params && props.params.default,
    }
  })
</script>

<template>
  <article class="card-feature">
    <div class="card-feature__bg">
      <img-media
        v-if="img"
        :public-path="PUBLIC_REMOTE"
        :sources="[
          {
            w: 390, media: '(max-width: 767px)',
            img: [img['390'], img['780']]
          },
          {
            w: 768, media: '(min-width: 768px) and (max-width: 1279px)',
            img: [img['768'], img['1536']]
          },
          {
            w: 1920, media: '(min-width: 1280px)',
            img: [img['1920'], img['3840']]
          },
        ]"
        :fallback="img['1920'][0]"
        width="1920"
        height="1080"
        alt=""
        loading="lazy"
      />
    </div>

    <div class="card-feature__main">
      <h2
        v-if="heading"
        v-split-text:lines,chars
        :class="['card-feature__title', 'title--md']"
        v-html="heading"
      />

      <div class="card-feature__body">
        <p
          v-if="currContent.title"
          :class="['card-feature__caption', 'caption--md']"
          v-html="currContent.title"
        />

        <div
          v-if="currContent.text"
          class="card-feature__text"
          v-html="currContent.text"
        />

        <BtnSecond
          v-if="link"
          :class="['btn-second--blue', 'btn-second--m']"
          text="Узнать больше"
          :href="link"
          icon="arrow-ur-14"
        />
      </div>

      <div class="card-feature__props">
        <div
          v-for="prop, index in currContent.params"
          :key="index"
          class="card-feature__prop">

          <span v-if="prop.prefix" :class="['card-feature__prop-prefix', 'caption--sm']">{{ prop.prefix }}</span>
          <span :class="['card-feature__prop-value', 'title--accent']">{{ prop.value }}</span>
          <span v-if="prop.unit" :class="['card-feature__prop-unit', 'subtitle--accent']">{{ prop.unit }}</span>
          <span :class="['card-feature__prop-name', 'caption--sm']">{{ prop.name }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
  @import './styles';
</style>
