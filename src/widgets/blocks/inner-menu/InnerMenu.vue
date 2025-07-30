<script setup lang="ts">
  import getLastDigits  from '@/shared/utils/helpers/getLastDigits'
  import { PUBLIC_REMOTE } from '@/shared/config'
  
  interface menuLink {
    type: string;
    month: string;
    year: string;
    link: string;
    image: string;
    image_webp: string
  }

  interface menuLinks {
    nuvLinks?: Array<menuLink>;
  }

  withDefaults(defineProps<menuLinks>(), {
    nuvLinks: () => [],
  });
</script>

<template>
  <div class="inner-menu">
    <ul class="inner-menu__list">
      <li
        v-for="(elem, index) in nuvLinks"
        :key="index" class="inner-menu__item" :class="elem == null ? 'inner-menu__item--last' : ''"
      >
        <template v-if="elem !== null">
          <template v-if="elem.type === 'prev'">
            <span class="inner-menu__icn" aria-hidden="true">
              <icon-sprite icon="arrow-l" />
            </span>
          </template>

          <template v-else>
            <span class="inner-menu__icn" aria-hidden="true">
              <icon-sprite icon="arrow-r" />
            </span>
          </template>

          <NuxtLink :to="elem.link" class="inner-menu__link">
            <span class="inner-menu__name">{{ elem.month }}</span>
            <span class="inner-menu__year">{{ getLastDigits(elem.year) }}</span>
          </NuxtLink>

          <div class="inner-menu__img-box">
            <img class="inner-menu__img" :src="`${PUBLIC_REMOTE}${elem.image}`" width="250" height="144" :alt="'ход строительства объекта '+elem.month+' '+elem.year">
          </div>
        </template>

        <template v-else>
          <div class="inner-menu__icn">
            <SpriteSymbol name="arrow"/>
          </div>
          <NuxtLink :to="'/construction'" class="inner-menu__link">
            <span class="inner-menu__name">Все месяцы</span>
          </NuxtLink>
        </template>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
