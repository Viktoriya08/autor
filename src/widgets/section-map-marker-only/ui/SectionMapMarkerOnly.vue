<script setup lang="ts">
  import type { YMap, VectorCustomizationItem, LngLat } from '@yandex/ymaps3-types'
  import {
    YandexMap,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultSchemeLayer,
    YandexMapMarker,
  } from 'vue-yandex-maps'
  import theme from '@/shared/ui/map/theme/main.json'

  const map = shallowRef<null | YMap>(null)

  defineProps<{
    isMarkerAccent?: boolean
    markerPageMods?: string
    coords: LngLat | null
  }>()

  const defaultCoords = [34.284454, 44.546663] as LngLat
</script>

<template>
  <section id="map" :class="cls['section-map']">
    <div :class="cls.map">
      <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: coords ? coords: defaultCoords,
            zoom: 16,
          },
          behaviors: ['drag', 'dblClick', 'pinchZoom'],
        }"
        width="100%"
        height="100%"
      >
        <yandex-map-default-scheme-layer :settings="{ customization: theme as VectorCustomizationItem[] }"/>
        <yandex-map-default-features-layer/>

        <yandex-map-marker :settings="{ coordinates: coords ? coords : defaultCoords }">
          <MarkerMain :is-accent="isMarkerAccent" :class="markerPageMods" />
        </yandex-map-marker>
      </yandex-map>
    </div>
  </section>
</template>

<style lang="scss" module="cls">
  /**
    Styles imported from common 'map' UI-styles.
    Used in all similar Map-widgets.
  */
  @import "@/shared/ui/map/ui/styles.scss";
</style>
