<script setup lang="ts">
  import { scrollToAnchor } from '@/shared/utils/scroll-to-anchor'
  import { theme } from '@/shared/theme'
  import modal from '@/widgets/modals/modal/modal.vue'

  const typeViewport: Ref<string> | undefined = inject('typeViewport')
  const { $gsap } = useNuxtApp()
  const router = useRouter()
  const id = router.currentRoute.value.params.id

  const data = await useAPI(`api/v1/object/apartment_${id}`)

  if (!data.value) {
    showError(createError({ statusCode: 404, statusMessage: `аппартаменты №${id} не доступны` }))
  }

  const refModal = ref<InstanceType<typeof modal> | null>(null)
  const main = useTemplateRef('main')
  const pageContent = useTemplateRef('object-page')
  let scrollOffset = 64

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.blue.class],
    },
    title: data?.value?.apartment?.seo?.title,
    meta: [
      { name: 'description', content: data?.value?.apartment?.seo?.description },
      { property: 'og:title', content: data?.value?.apartment?.seo?.title },
      { property: 'og:description', content: data?.value?.apartment?.seo?.description },
    ]
  })

  const anchor = reactive({
    isShift: false,
    href: '#similar-object'
  })


  if (import.meta.client) {
    const header: HTMLElement | null = document.querySelector('.header')

    if (header) {
      scrollOffset = header.offsetHeight
    }
  }

  const scrollto = (e: Event) => {
    const eTarget = e.target as HTMLElement
    const a = eTarget.closest('[href]') as HTMLElement

    if (a) {
      scrollToAnchor(a, scrollOffset)

      anchor.isShift = !anchor.isShift
    }
  }

  const openModalRequest = () => {
    if (refModal.value?.openModal) {
      refModal.value.openModal()
    }
  }

  onMounted(() => {
    $gsap.timeline({
      scrollTrigger: {
        trigger: main.value,
        start: `bottom top+=${scrollOffset}`,
        scrub: true,
        onEnter: () => {
          anchor.isShift = true
          // anchor.href = "#top"
        },
        onLeaveBack:() => {
          anchor.isShift = false
          // anchor.href = '#similar-object'
        }
      }
    })

    if(typeViewport?.value !== 'desktop') {
      $gsap.timeline({
        scrollTrigger: {
          trigger: pageContent.value,
          start: `top top-=210`,
          end: `bottom bottom+=150`,
          onEnter: () => {
            pageContent.value?.classList.add('show-btn-order')
          },
          onEnterBack: () => {
            pageContent.value?.classList.add('show-btn-order')
          },
          onLeave:() => {
            pageContent.value?.classList.remove('show-btn-order')
          },
          onLeaveBack:() => {
            pageContent.value?.classList.remove('show-btn-order')
          }
        }
      })
    }
  })

  const toBack = () => {
    router.back()
  }

  watch(() => anchor.isShift, () => {
    if (anchor.isShift) {
      anchor.href = "#top"
    } else {
      anchor.href = '#similar-object'
    }
  })
</script>

<template>
  <div id="top" ref="object-page" class="page-object">
    <div class="page-object__bread">
      <Breadcrumbs :links="[{name: data?.apartment?.number || '', url: '#'}]"/>
    </div>

    <div class="page-object__mobile-order">
      <BtnPrimary
        v-if="data.apartment.free === 'AVAILABLE'"
        class="btn-primary--m btn-primary--dark page-object__mobile-order-btn"
        text="Забронировать"
        @click="openModalRequest"
      />
    </div>

    <BtnGhost
      class="btn-ghost--s btn-ghost--dark btn-ghost--reverse page-object__back"
      text="назад к выбору"
      icon="arrow-l"
      @click="toBack"
    />

    <div class="page-object__aside">
      <ObjectProps
        class="page-object__props"
        :name="data.apartment.number || ''"
        :price="data.apartment.price || []"
        :rooms="data.apartment.rooms"
        :params="data.apartment.properties || []"
        :chips="data.apartment.tags || []"
      />

      <div :class="['page-object__controls', { ['page-object__controls--booked'] : !data.apartment.free}]">
        <BtnPrimary
          v-if="data.apartment.free === 'AVAILABLE'"
          class="btn-primary--m btn-primary--dark"
          text="Забронировать"
          @click="openModalRequest"
        />

        <BtnPrimary
          v-if="data.apartment.free !== 'AVAILABLE'"
          :class="[
            'btn-primary--m',
            'btn-primary--white',
            'btn-primary--reverse',
          ]"
          :text="data.apartment.free === 'BOOKED' ? 'Забронировано' : 'продано'"
          icon="lock"
          :fake="true"
        />

        <!-- <Label
          v-if="!data.apartment.free"
          class="label--m label--white"
          text="Забронировано"
          icon="lock"
        /> -->

        <link-shift
          class="link-shift--m link-shift--steel page-object__anchor"
          :class="{'is-shift': anchor.isShift}"
          :text="['похожие варианты', 'наверх']"
          :icon="['arrow-d', 'arrow-u']"
          :href="anchor.href"
          @click.prevent="scrollto($event)"
        />
      </div>

      <div ref="preview" class="page-object__preview">
        <ObjectPreview />
      </div>
    </div>

    <div ref="main" class="page-object__main">
      <ObjectView
        :imgs="{
          1: data.apartment.image_with_furniture,
          2: data.apartment.image_no_furniture
        }"
        :minimap="data.svg_floor"
        :active-id="id"
        :pdf="data.apartment.file_pdf"
      />
    </div>

    <div id="similar-object" class="page-object__similar">
      <h2 class="page-object__subheading">Похожие предложения</h2>

      <object-list-similar
        v-if="data && data.similar_apartments"
        :items="data.similar_apartments"
      />
    </div>

    <modal
      ref="refModal"
      mod="aside">

      <form-request class="form--modal" :data-id="id" type="product" />
    </modal>
  </div>
</template>

<style lang="scss">
  @import './styles';
</style>
