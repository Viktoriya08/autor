<script setup lang="ts">
  import type { ObjectItem } from '@/entities/object'

  defineProps<{
    items: ObjectItem[]
  }>()
</script>

<template>
  <object-list :items="items">
    <template #object-list-controls>
      <div class="object-list__controls">
        <div class="object-list__control">
          <btn-link
            class="btn-link--s btn-link--dark"
            text="Показать больше"
            href="/objects"
          />
        </div>

        <div class="object-list__control">
          <btn-link
            class="btn-link--s btn-link--dark"
            text="похожие апартаменты на more.yalta"
            icon="arrow-ur-14"
            target="_blank"
            href="https://moreyalta.ru/"
            rel ="nofollow noopener noreferrer"
          />
        </div>
      </div>
    </template>
  </object-list>
</template>
