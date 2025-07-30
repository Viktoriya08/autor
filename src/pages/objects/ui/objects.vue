<script setup lang="ts">
  import { theme } from '@/shared/theme'
  import { useObjectList } from '@/entities/object-list'
  import { useFilterObjects } from '@/features/filter-objects/model/useFilterObjects'
  import { getNoun } from '@/shared/utils/get-noun/getNoun'

  const data = await useAPI('api/v1/object/list')

  useSeo('filter-param')

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.blue.class],
    }
  })

  const { query } = useRoute()
  const storeObjectList = await useObjectList()
  const { updateFiltersFromQuery } = useFilterObjects(storeObjectList)

  storeObjectList.objects.value = data.value

  const { objects, loadObjects, isLoadingFilter } = storeObjectList

  if (Object.keys(query).length) {
    updateFiltersFromQuery(query)
  }

  const typeViewport: Ref<string> | undefined = inject('typeViewport')

  const panelFilter = ref(false)

  const closePanelFilter = () => {
    if (typeViewport?.value === 'desktop') {
      return
    }

    panelFilter.value = false
  }

  const togglePanelFilter = () => {
    panelFilter.value = !panelFilter.value
  }

  const btnLoadText = computed(() => {
    return loadObjects.value.items?.length
      ? `показать ${loadObjects.value.total} ${getNoun(loadObjects.value.total, 'вариант', 'варианта', 'вариантов')}`
      : 'показать'
  })

  onMounted(() => {
    const { $lenis} = useNuxtApp()

    watch(() => panelFilter.value, () => {
      if (typeViewport?.value === 'desktop') {
        return
      }

      if (panelFilter.value) {
        $lenis?.stop()
      } else {
        $lenis?.start()
      }
    })
  })
</script>

<template>
  <div :class="[cls['objects'], {[cls['is-active-filter']]: panelFilter }]">
    <SectionHead title="Апартаменты" :class="[cls['objects__header'], 'section-head--objects']">
      <template #section-head-breadcrumbs>
        <Breadcrumbs :links="[{name: 'Апартаменты по параметрам', url: '#'}]"/>
      </template>

      <template #section-head-info>
        <div :class="cls['objects__total']">
          <p :class="cls['objects__total-title']">
            <span :class="cls['objects__total-title--desktop']">всего</span>  номеров
          </p>
          <span :class="cls['objects__total-value']">{{ data.total }}</span>
        </div>
      </template>
    </SectionHead>

    <div :class="[cls['objects__block'], cls['objects__block--main']]">
      <!-- <div :class="cls['objects__carousel']">
        <carousel-object title="Лучшие варианты"/>
      </div> -->

      <div ref="main" :class="cls['objects__main']">
        <div :class="cls['objects__result']">
          <div :class="cls['objects__result-header']">
            <div :class="cls['objects__result-block']">
              <span :class="cls['objects__result-title']">найдено:</span>
              <span :class="cls['objects__result-value']">{{ `${objects.total} ${getNoun(objects.total, 'вариант', 'варианта', 'вариантов')}` }}</span>
            </div>

            <div :class="cls['objects__result-block']">
              <span :class="cls['objects__result-title']">Сортировка:</span>
              <filter-sort :store="storeObjectList"/>
            </div>
          </div>

          <div :class="cls['objects__result-list']">
            <object-list-filterable :store="storeObjectList"/>
          </div>
        </div>
      </div>
    </div>

    <div :class="[cls['objects__block'], cls['objects__block--aside']]">
      <div
        :class="cls['objects__overlay']"
        @click="togglePanelFilter"
      />

      <div
        :class="cls['objects__aside']"
        :data-lenis-prevent="panelFilter ? '' : null">

        <div :class="cls['objects__aside-header']">
          <p :class="cls['objects__aside-title']">Фильтры</p>

          <btn-link
            v-if="typeViewport === 'desktop'"
            class="btn-link--m btn-link--dark"
            text="свернуть"
            icon="panel"
            @click="togglePanelFilter"
          />

          <btn-close
            v-if="typeViewport !== 'desktop'"
            :class="['btn-close--l', 'btn-close--yellow']"
            name="close"
            text="скрыть фильтры"
            @click="togglePanelFilter"
          />
        </div>

        <div :class="cls['objects__form']">
          <filter-form :store="storeObjectList"/>
        </div>

        <div :class="cls['objects__controls']">
          <BtnPrimary
            class="btn-primary--m btn-primary--dark"
            :text="btnLoadText"
            :disabled="isLoadingFilter"
            @click="storeObjectList.applayLoadObjects(), closePanelFilter()"
          />

          <btn-link
            class="btn-link--m btn-link--dark"
            text="сбросить"
            icon="close"
            @click="storeObjectList.resetList"
          />
        </div>

        <div ref="preview" :class="cls['objects__preview']">
          <ObjectPreview />
        </div>
      </div>
    </div>

    <div :class="cls['objects__btn-filters']">
      <BtnRound
        class="btn-round--dark btn-round--xs"
        text="Фильтры"
        icon="filters"
        @click="togglePanelFilter"
      />
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
