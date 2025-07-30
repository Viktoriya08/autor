<script setup lang="ts">
  import { PUBLIC_REMOTE  } from '@/shared/config'
  // import { documentsPage, docsGeneral, docsPermitting, docsReporting } from '../data/data' // для верстки
  import type { DocsPage, DocType } from '../../../pages/documents/types/index'
  import { getNoun } from '@/shared/utils/get-noun/getNoun'


  const props = withDefaults(defineProps<DocsPage>(), {
    title: 'документы',
    archive: '',
    listDocs: () => [],
  });

  const activeTab = ref('');
  const countDocs = ref(0)
  const tabsList = useTemplateRef('tabs')

  function setActiveTab(tab: string) {
    activeTab.value = tab;
    initialActiveTab(tab)
  }

  function initialActiveTab(tab: string) {
    const tabs = tabsList.value?.querySelectorAll('.documents__nav-item') || []
    tabs.forEach((elem) => {
      if(elem.dataset.tab == tab) {
        elem.classList.add('active')
      } else {
        elem.classList.remove('active')
      }
    })
  }

  function getCountDocs(list: Array<DocType>) {
    if(list.length == 0) return

    for (const element of list) {
      countDocs.value +=  element.items.length
    }

    return countDocs.value
  }

  onMounted(() => {
    if(props.listDocs.length == 0) {
      return
    } else {
      // первый элемент активный при инициализации
      setActiveTab(props.listDocs[0].code)
    }
    
    getCountDocs(props.listDocs)
  })

</script>

<template>
  <section class="documents">
    <SectionHead :title="title" class="section-head--border-r">
      <template #section-head-breadcrumbs>
        <Breadcrumbs :links="[{name: `${title}`, url: '#'}]"/>
      </template>
      <template #section-head-info>
        <div v-if="countDocs !==0" class="doc-download">
          <div class="doc-download__count">{{countDocs + ' ' + getNoun(countDocs, 'документ', 'документа', 'документов')}}</div>
          <BtnPrimary
            :href="`${PUBLIC_REMOTE}${archive}`"
            class="btn-primary--m-s btn-primary--yellow doc-download__btn"
            download
            text="Скачать все файлы">
            <template #btn-content>
              <span class="doc-download__btn-count">&nbsp;({{countDocs}})</span>
            </template>
          </BtnPrimary>
        </div>
      </template>
    </SectionHead>

    <div class="documents__box">
      <div class="wrapper">
        <div class="documents__grid">
          <nav class="documents__nav">
            <ul ref="tabs" class="documents__nav-list">
              <li v-for="(tab, index) in listDocs" :key="index" class="documents__nav-item" :data-tab=tab.code>
                <button type="button" class="documents__nav-text" @click="setActiveTab(tab.code)">{{ tab.section_name }}</button>
              </li>
            </ul>
          </nav>

          <div class="documents__list">
            <template v-for="(elem, index) in listDocs" :key="index">
              <template v-if="elem.code === activeTab">
                <div v-for="(doc, i) in elem.items" :key="i" class="documents__elem doc">
                  <div class="doc__name">{{ doc.name }}</div>

                  <div class="doc__data">{{ doc.date }}</div>

                  <icon-sprite icon="download" class="doc__svg"/>

                  <a class="doc__link" :href="`${PUBLIC_REMOTE}${doc.document_file}`" target="_blank">
                    <span class="doc__type">{{doc.document_type}},</span>
                    <span class="doc__weight">{{ doc.document_size }}</span>
                  </a>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
