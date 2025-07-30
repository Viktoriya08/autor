<script setup lang="ts">
  import { theme } from '@/shared/theme'
  import {GetCursorCustom} from '@/features/cursor-custom/GetCursorCustom'

  const data = await useAPI('api/v1/object/filter_home')

  useSeo('filter-home')

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.blue.class],
    }
  })

  const filterHome = useTemplateRef('filter-home')

  onMounted(() => {
    GetCursorCustom(filterHome.value)
  })
</script>

<template>
  <div ref="filter-home" :class="cls['filter-home']">
    <div :class="cls['filter-home__header']" data-cursor-default>
      <breadcrumbs :links="[{name: 'визуальный выбор', url: '#'}]"/>

      <btn-link
        class="btn-link--s btn-link--dark"
        text="похожие апартаменты на more.yalta"
        icon="arrow-ur"
        target="_blank"
        href="https://moreyalta.ru/"
        rel ="nofollow noopener noreferrer"
      />
    </div>

    <div :class="cls['filter-home__main']">
      <div :class="cls['filter-home__bg-back']">
        <img src="/image/filter-home/back-520.png" alt="горы">
      </div>

      <div :class="cls['filter-home__home']">
        <home-floor
          :data="data"
        />
      </div>

      <div :class="cls['filter-home__bg-front']">
        <img src="/image/filter-home/front-1328.png" alt="горы и деревья">
      </div>
    </div>

    <div :class="cls['filter-home__aside']">
      <CursorCustom/>
      <floor-info
        :data="data"
      />
    </div>
  </div>
</template>

<style lang="scss" module="cls">
 @import './style';
</style>
