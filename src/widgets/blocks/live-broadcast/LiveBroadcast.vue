<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'

  interface Tab {
    name: string;
    img: string | number;
    link: string;
  }

  const props = defineProps<{
    tabs?: Tab[];
    }>()

  const activeTab = ref('');
  const tabsList = useTemplateRef('tabs')

  function setActiveContent(tab: string) {
    activeTab.value = tab;

    initialActiveTab(activeTab.value)
  }

  function initialActiveTab(tab: string) {
    const tabs = tabsList.value?.querySelectorAll('.js-tab-btn') || []
    tabs.forEach((elem) => {
      if(elem.dataset.tab == tab) {
        elem.classList.add('is-active')
      } else {
        elem.classList.remove('is-active')
      }
    })
  }

  onMounted(() => {
    // при загрузке активна первая камера
    setActiveContent(props.tabs[0].name)
  })
</script>

<template>
  <div class="live-video">
    <ul ref="tabs" class="tabs-img live-video__tabs">
      <li v-for="(item, index) in tabs" :key="item.name" class="tabs-img__elem">
        <button
          class="tabs-img__btn js-tab-btn"
          :data-tab=item.name
          @click="setActiveContent(item.name)">

          <div class="tabs-img__img-box">
            <img
              class="tabs-img__img"
              :src="`${BASE_URL}/${item.img}`"
              width="40"
              height="40"
              :alt="`строительство объекта`"
              loading="lazy"
            >
          </div>

          <p class="tabs-img__name">камера {{ index+1 }}</p>
        </button>
      </li>
    </ul>

    <template v-for="(video) in tabs" :key="video.name">
      <div v-show="video.name == activeTab" class="live-video__video">
        <img
          class="tabs-img__img"
          :src="`${BASE_URL}/${video.img}`"
          width="1920"
          height="720"
          :alt="`строительство объекта`"
          loading="lazy"
        >
      </div>
    </template>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
