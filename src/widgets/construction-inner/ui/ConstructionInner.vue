<script setup lang="ts">
  // import { pageConstructionInner } from '../data/data' // для верстки
  import getLastDigits  from '@/shared/utils/helpers/getLastDigits'
  import { PUBLIC_REMOTE } from '@/shared/config'
  import type { MenuLink, ImgProps} from '../../../pages/construction-id/types/index'

  enum imgType {
    JPG = 0,
    WEBP = 1
  }

  defineProps<{
    month: string
    year: string
    imgArr: ImgProps
    menuLinks: MenuLink
    }>()
</script>

<template>
  <section class="const-inner">
    <div class="wrapper">
      <div class="const-inner__grid">
        <div class="const-inner__aside">
          <div class="const-inner__aside-box">
            <Breadcrumbs :backward="{nameBack: 'Все месяцы', urlBack: `/construction`}" theme="breadcrumbs--light"/>

            <h2 class="const-inner__title">
              <span class="const-inner__name">
                {{ month }}
              </span>

              <span class="const-inner__year">
                {{ getLastDigits(year) }}
              </span>
            </h2>
          </div>
        </div>

        <div v-if="imgArr !== null" class="const-inner__gallery">
          <picture v-for="(elem, index) in imgArr" :key="index" class="const-inner__img">
            <source
              media="(max-width: 1279px) and (orientation: portrait)"
              :srcset="`${PUBLIC_REMOTE}${elem[720]?.[imgType.WEBP]} 768w, ${PUBLIC_REMOTE}${elem[2230]?.[imgType.WEBP]} 1536w`"
              type="image/webp"
            >

            <source
              :srcset="`${PUBLIC_REMOTE}${elem[720]?.[imgType.JPG]} 768w, ${PUBLIC_REMOTE}${elem[2230]?.[imgType.JPG]} 1536w`"
              type="image/jpg"
            >

            <img class="" :src="`${PUBLIC_REMOTE}${elem[2230]?.[imgType.JPG]}`" :alt="'ход строительства объекта '+month+' '+year" width="1115" height="600" loading="lazy">
          </picture>
        </div>
      </div>

      <InnerMenu :nuv-links="menuLinks" />
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
