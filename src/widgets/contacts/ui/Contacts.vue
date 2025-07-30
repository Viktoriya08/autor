<script setup lang="ts">
  import type { APIData } from '../model/types'

  const data = await useAPI<APIData>('api/v1/contacts')
</script>

<template>
  <main>
    <SectionHead
      class="section-head--border-r"
      title="контакты">

      <template #section-head-breadcrumbs>
        <Breadcrumbs :links="[{name: 'контакты', url: '#'}]"/>
      </template>

      <template #section-head-info>
        <address v-if="data && data.address" class="section-head-addr-block">
          <span class="section-head-addr-block__title">адрес</span>
          <strong class="section-head-addr-block__address">{{ data.address }}</strong>
        </address>
      </template>

    </SectionHead>

    <SectionMapMarkerOnly
      v-if="data && data.coords"
      :is-marker-accent="true"
      :coords="data.coords"
      marker-page-mods="contacts-map-marker"
      class="contacts-map"
    />

    <SectionContactCards v-if="data && data.offices" :contacts="data.offices"/>

    <SectionCallback />
  </main>
</template>

<style lang="scss">
  @import './styles';
</style>
