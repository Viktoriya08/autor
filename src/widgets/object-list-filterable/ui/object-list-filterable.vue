<script setup lang="ts">
  const props = defineProps<{
    store: any
  }>()

  const { objects } = props.store
</script>

<template>
  <strong v-if="!objects.items.length" :class="$style['object-list-filterable-empty']">
    <span :class="$style['object-list-filterable-empty__text']">Ничего не найдено...</span>
  </strong>

  <object-list v-else :items="objects.items">
    <template #object-list-controls>
      <div class="object-list__controls">
        <div class="object-list__control">
          <btn-link
            class="btn-link--s btn-link--dark"
            text="Показать больше"
            icon="arrow-d-14"
            :disabled="store.isLoadingMore.value"
            @click="store.loadMoreObjects"
          />
        </div>

        <div class="object-list__control">
          <btn-link
            class="btn-link--s btn-link--dark"
            text="похожие апартаменты на more.yalta"
            icon="arrow-ur-14"
            target="_blank"
            href="https://moreyalta.ru/"
            rel="nofollow noopener noreferrer"
          />
        </div>
      </div>
    </template>
  </object-list>
</template>

<style module lang="scss">
  @import './style';
</style>
