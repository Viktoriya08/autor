<script setup lang="ts">
  import type { ObjectItem } from '@/entities/object'
  import type { ObjectPreview } from '@/widgets/object-preview/model/types'
  import { toggleVisibilityPreview, updateDataPreview } from '@/widgets/object-preview/api'

  defineProps<{
    items: ObjectItem[]
  }>()

  const onItemEnter = (data: ObjectPreview) => {
    updateDataPreview(data)
  }

  const onItemLeave = () => {
  }

  const onListLeave = () => {
    toggleVisibilityPreview(false)
  }

  const onListEnter = () => {
    toggleVisibilityPreview(true)
  }
</script>

<template>
  <div class="object-list">
    <ul
      class="object-list__list"
      @mouseleave="onListLeave"
      @mouseenter="onListEnter">

      <li
        v-for="(item, index) in items"
        :key="index"
        class="object-list__item">

        <object-card
          :number="item.number"
          :total_area="item.total_area"
          :price="item.price"
          :floor="item.floor"
          :rooms="item.rooms"
          :window="item.window"
          :free="item.free"
          :image="item.image"
          @mouseenter="onItemEnter({
            index: index,
            square: item.total_area,
            name: item.number,
            image: item.image
          })"
          @mouseleave="onItemLeave"
        />
      </li>
    </ul>

    <slot name="object-list-controls" />
  </div>

</template>

<style lang="scss">
  @import './styles';
</style>
