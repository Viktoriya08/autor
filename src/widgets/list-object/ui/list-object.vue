<script setup lang="ts">
  import type { ObjectPreview } from '@/widgets/object-preview/model/types'
  import { toggleVisibilityPreview, updateDataPreview } from '@/widgets/object-preview/api'

  defineProps<{
    items: any
  }>()

  const onItemEnter = (data: ObjectPreview) => {
    updateDataPreview(data)
  }

  const onItemLeave = () => {
  }

  const onListLeave = () => {
    toggleVisibilityPreview(false)
  }

  const onListEnter= () => {
    toggleVisibilityPreview(true)
  }
</script>

<template>
  <div :class="cls['list-object']">
    <ul :class="cls['list']" @mouseleave="onListLeave" @mouseenter="onListEnter">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="cls['list__item']"
        @mouseenter="onItemEnter({
          index: index,
          square: item.square,
          name: item.id,
          image: item.image
        })"
        @mouseleave="onItemLeave">

        <CardObject
          :id="item.id"
          :square="item.square"
          :price="item.price"
          :floor="item.features.floor"
          :type="item.features.type"
          :view="item.features.view"
          :booked="item.booked"
          :image="item.image"
        />
      </li>
    </ul>

    <div :class="cls['controls']">
      <div :class="cls['controls__item']">
        <btn-link
          class="btn-link--s btn-link--dark"
          text="Показать больше"
          icon="arrow-d-14"
        />
      </div>

      <div :class="cls['controls__item']">
        <btn-link
          class="btn-link--s btn-link--dark"
          text="похожие апартаменты на more.yalta"
          icon="arrow-ur-14"
          target="_blank"
          href="#"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
