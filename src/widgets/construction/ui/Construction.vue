<script setup lang="ts">
  import { pageConstruction } from '../data/data' // для работы с версткой
  // import gsap from 'gsap'
  // import { ScrollTrigger } from 'gsap/ScrollTrigger'
  // import getLastDigits  from '@/shared/utils/helpers/getLastDigits'
  import type { Year } from '../types/index'

  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  const galleryBox = useTemplateRef('construction-gallery')
  const activeTabYears = ref('0')
  const { $gsap } = useNuxtApp()
  // const { data } = await useFetch<APIRequest>(`${API_BASE_URL}api/v1/construction/`, {
  //   onRequestError({ error }) {
  //     console.log(error)
  //   }
  // })

  const data = await useAPI('api/v1/construction/')


  // с конца до начала
  let periodsReceived = data.value

  if(periodsReceived != null) {
    periodsReceived = data.value.reverse()
  }

  const tabs: Array<Year> = []
  const daysData: Array<Year> = [{key: 'дата', name: 'месяц'}]

  periodsReceived?.forEach((elem) => {
    // собираю массив лет
    const arr = {}
    arr.key = String(elem.name)
    arr.name = elem.name
    tabs.push(arr)

    // собираю массив дат
    elem.items?.forEach((item) => {
      const arrItems = {}
      arrItems.key = item.name
      arrItems.name = item.month
      daysData.push(arrItems)
    })
  })

  function observerSectionAppear() {
    // gsap.registerPlugin(ScrollTrigger)
    const boxYearsTrigger = galleryBox.value?.querySelectorAll('[data-animate-observer-box]') || []

    boxYearsTrigger.forEach((box) => {
      $gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: `top 80%`,
          end: 'bottom 90%',
          // markers: true,
          onEnter() {
            activeTabYears.value = box.dataset.year
          },
          onEnterBack() {
            activeTabYears.value = box.dataset.year
          },
        }
      }).fromTo(box, {opacity: 0} , {opacity: 1, duration: 0.3, delay: 0.2})
    })

    if(typeViewport?.value === 'desktop') {

      const sectionsTrigger = galleryBox.value?.querySelectorAll('[data-animate-observer]') || []
      const currentTranslateDay = ref(0)
      const currentTranslateMonth = ref(0)

      function setupTranslateY(minus: boolean) {
        const elDays = galleryBox.value?.querySelector('[data-translate-days]') as HTMLDivElement
        const elMonths = galleryBox.value?.querySelector('[data-translate-month]') as HTMLDivElement

        if(!elDays || !elMonths) return

        // Устанавливаем начальный стиль
        elDays.style.transform = `translateY(-${currentTranslateDay.value}px)`
        elMonths.style.transform = `translateY(-${currentTranslateMonth.value}px)`
        const heightDay = elDays?.firstElementChild?.offsetHeight
        const heightMonth = elMonths?.firstElementChild?.offsetHeight

        if(minus) {
          currentTranslateDay.value -= heightDay
          currentTranslateMonth.value -= heightMonth
        } else {
          currentTranslateDay.value += heightDay
          currentTranslateMonth.value += heightMonth
        }
        // Обновляем стиль
        elDays.style.transform = `translateY(-${currentTranslateDay.value}px)`
        elMonths.style.transform = `translateY(-${currentTranslateMonth.value}px)`
      }

      sectionsTrigger.forEach((section) => {
        $gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `top 50%`,
            // markers: true,
            onEnter() {
              section.classList.add('active')
              setupTranslateY(false)
            },
            onEnterBack() {
              section.classList.add('active')
            },
            onLeave() {
              section.classList.remove('active')
            },
            onLeaveBack() {
              section.classList.remove('active')
              setupTranslateY(true)
            },
          }
        })
      })
    }
  }

  onMounted(() => {
    observerSectionAppear()
  })
</script>

<template>
  <section class="construction">
    <SectionHead title="Ход строительства" class="section-head--border-r section-head--second construction__head">
      <template #section-head-breadcrumbs>
        <Breadcrumbs :links="[{name: 'Ход строительства', url: '#'}]"/>
      </template>

      <template #section-head-info>
        <div class="commissioning">
          <div class="commissioning__title">Ввод в <br> эксплуатацию</div>

          <div class="commissioning__bottom">
            <div class="commissioning__info">
              <span class="commissioning__number">&#8545;</span>
              квартал
            </div>
            <div class="commissioning__year">28</div>
          </div>
        </div>
      </template>
    </SectionHead>

    <div class="wrapper">
      <!--
        Блок закомментирован по требованию заказчика. До востребования.
        ---
        <LiveBroadcast :tabs="pageConstruction.cameras" class="construction__video" />
      -->

      <div v-if="periodsReceived" ref="construction-gallery" class="construction__grid">
        <div  class="construction__gallery" >
          <template v-for="(year, indexYear) in periodsReceived" :key="indexYear">
            <div :id="`elem-`+year.name" class="construction__box" data-animate-observer-box :data-year="year.items[0].section">
              <template v-for="(month) in year.items" :key="month.name">
                <article class="construction__elem" data-animate-observer >
                  <CardConstruction
                    :title="month.name"
                    :path768="month.image_768"
                    :path1536="month.image_1536"
                    :path1920="month.image_1920"
                    :path3840="month.image_3840"
                    :path-webp768="month.image_768_webp"
                    :path-webp1536="month.image_1536_webp"
                    :path-webp1920="month.image_1920_webp"
                    :path-webp3840="month.image_3840_webp"
                    :link="month.link_to_detail"
                    :alt="`фото строительной прощадки `+month.name"
                    class="construction__card"
                    />

                  <div class="construction__elem-info-aside">
                    <div class="construction__elem-info">
                      <div class="construction__elem-box">
                        <p class="construction__elem-text">{{ month.name }}</p>
                      </div>

                      <div class="construction__elem-box">
                        <h2 class="construction__elem-title">{{ month.month }}</h2>
                      </div>
                    </div>
                  </div>
                </article>
              </template>
            </div>
          </template>
        </div>

        <aside class="construction__aside">
          <div class="construction__subtitle">Галерея</div>

          <div class="construction__data-wrapper">
            <div class="construction__data">
              <div class="construction__data-box-d" data-translate-days>
                <p v-for="elem in daysData" :key="elem.name" class="construction__elem-d">{{elem.key }}</p>
              </div>
            </div>

            <div class="construction__data">
              <div class="construction__data-box-m" data-translate-month>
                <p v-for="elem in daysData" :key="elem.name" class="construction__elem-m">{{elem.name }}</p>
              </div>
            </div>
          </div>

          <div class="construction__tabs">
            <UiSwitch :triggers="tabs" theme="blue"  class="construction__tabs-elem" :active-tab="activeTabYears" link-elem />
          </div>

          <div class="construction__info">
            <div class="construction__info-title">Ввод в эксплуатацию:&nbsp;</div>

            <div class="construction__info-data">
              <span class="construction__info-number">&#8545;</span>
              квартал
              <span class="construction__info-year">2028 года</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  @import './styles';
</style>
