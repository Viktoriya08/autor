<script setup lang='ts'>
  const props = defineProps<{
    store: any
  }>()

  const store = reactive(props.store)
</script>

<template>
  <form :class="cls['form']">
    <div v-if="store.filterList && store.filterList[store.filterName.room]" :class="cls['group-input']">
      <span :class="cls['group-input__title']">
        {{ store.filterList[store.filterName.room].title || 'Комнаты'}}
      </span>

      <div :class="cls['group-input__inputs']">
        <checkbox-second
          v-for="(item, index) in store.filterList[store.filterName.room].value"
          :key="index"
          v-model="store.filters[store.filterName.room]"
          :value="item.value"
          :text="item.text"
          class="checkbox-second--blue"
          :name="store.filterName.room"
        />
      </div>
    </div>

    <toggle
      v-model="store.filters[store.filterName.free]"
      :name="store.filterName.free"
      :text="store.filterList[store.filterName.free].title"
    />

    <div v-if="store.filterList && store.filterList[store.filterName.price]" :class="cls['group-input']">
      <span :class="cls['group-input__title']">
        {{ store.filterList[store.filterName.price].title || 'Стоимость, руб.'}}
      </span>

      <div :class="cls['group-input__inputs']">
        <range
          v-model="store.filters[store.filterName.price]"
          :min="Number(store.filterList[store.filterName.price].value.min)"
          :max="Number(store.filterList[store.filterName.price].value.max)"
          :step="1"
          class="range--dark"
        />
      </div>
    </div>

    <div v-if="store.filterList && store.filterList[store.filterName.square]" :class="cls['group-input']">
      <span :class="cls['group-input__title']">
        {{ store.filterList[store.filterName.square].title || 'Площадь, м²'}}
      </span>

      <div :class="cls['group-input__inputs']">
        <range
          v-model="store.filters[store.filterName.square]"
          :min="Number(store.filterList[store.filterName.square].value.min)"
          :max="Number(store.filterList[store.filterName.square].value.max)"
          :step="0.01"
          class="range--dark"
        />
      </div>
    </div>

    <div :class="cls['group-input']">
      <div :class="cls['group-input__inputs']">
        <checkbox
          v-for="(item, index) in store.filterList[store.filterName.tag].value"
          :key="index"
          v-model="store.filters[store.filterName.tag]"
          :value="item.value"
          :text="item.text"
          :name="store.filterName.tag"
          class="checkbox--main"
        />
      </div>
    </div>
  </form>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
