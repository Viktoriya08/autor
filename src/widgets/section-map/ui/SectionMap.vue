<script setup lang="ts">
  import type { YMap, VectorCustomizationItem, LngLat, VectorCustomization } from '@yandex/ymaps3-types'
  import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapMarker,
  } from 'vue-yandex-maps'
  import { mainPoint, points } from '@/shared/ui/map/data/data'
  import theme from '@/shared/ui/map/theme/main.json'

  const data = await useAPI(`api/v1/main/location`)

  const map = shallowRef<null | YMap>(null);
  const mapPoints = new Map()

  data.value?.points.forEach((item) => {
    mapPoints.set(item.name, true)
  })

  const statePoints = reactive(mapPoints)

  const togglePoints = (name: string) => {
    statePoints.set(name, !statePoints.get(name))
  }
</script>

<template>
  <section id="map" :class="cls['section-map']" data-switch-theme="blue-promo">
    <div :class="cls.header">
      <h2 :class="[cls.heading]">расположение</h2>
      <div :class="cls.props">
        <span :class="[cls.prop, 'caption--sm']">40 мин до аэропорта</span>
        <span :class="[cls.prop, 'caption--sm']">20 мин до Ялты</span>
        <span :class="[cls.prop, 'caption--sm']">10 мин до моря</span>
      </div>
    </div>

    <div :class="cls.map">
      <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: mainPoint,
            zoom: 16,
          },
          behaviors: ['drag', 'dblClick', 'pinchZoom'],
        }"
        width="100%"
        height="100%"
      >
        <yandex-map-default-scheme-layer :settings="{ customization: theme as VectorCustomizationItem[] }"/>
        <yandex-map-default-features-layer/>

        <yandex-map-marker :settings="{ coordinates: mainPoint }">
          <MarkerMain />
        </yandex-map-marker>

        <template v-for="item in data?.points">
          <yandex-map-marker
            v-for="point in item.items"
            :key="point.toString()"
            :settings="{ coordinates: point as LngLat }"
          >
            <MarkerSecond v-show="statePoints.get(item.name)" :icon="item.icon"/>
          </yandex-map-marker>
        </template>
      </yandex-map>
    </div>

    <div :class="cls.controls">
      <div :class="cls['controls__box']">
        <btn-main
          v-for="item in data?.points"
          :key="item.name"
          :text="item.text"
          type="button"
          :class="{'is-active': statePoints.get(item.name)}"
          class="btn-main--blue btn-main--m"
          @click="togglePoints(item.name)"
        />
      </div>
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
