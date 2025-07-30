<script setup lang="ts">
  import { BASE_URL } from '@/shared/config'
  import { theme } from '@/shared/theme'

  const router = useRouter()
  const id = router.currentRoute.value.params.id

  const data = await useAPI(`api/v1/object/floor_${id}`)

  if (!data.value) {
    // throw createError({ statusCode: 404, statusMessage: 'Not Found' })
    showError(createError({ statusCode: 404, statusMessage: `этаж №${id} не доступен` }))
  }

  useHead({
    bodyAttrs: {
      class: ['is-internal', theme.blue.class],
    },
    title: data.value.seo?.title,
    meta: [
      { name: 'description', content: data.value.seo?.description },
      { property: 'og:title', content: data?.value?.seo?.title },
      { property: 'og:description', content: data?.value?.seo?.description },
    ]
  })

  const storeFloor = ref({ count: 8, current: Number(id) })

  watch(() => storeFloor.value.current, (newCurrent) => {
    router.push(`/floors/${newCurrent}`)
  })
</script>

<template>
  <div :class="cls['filter-floor']">
    <div :class="cls['filter-floor__main']">
      <h1 :class="cls['filter-floor__heading']">
        <span v-if="storeFloor.current" :class="cls['filter-floor__subheading']">этаж</span>
        <span v-if="storeFloor.current">{{ storeFloor.current }}</span>
      </h1>

      <btn-ghost
        :class="['btn-ghost--s', 'btn-ghost--dark', 'btn-ghost--reverse', cls['filter-floor__back']]"
        text="к выбору этажа"
        icon="arrow-l"
        href="/floors"
      />

      <div :class="cls['filter-floor__view']">
        <span :class="[cls['filter-floor__side'], cls['filter-floor__side--left']]">море</span>
        <span :class="[cls['filter-floor__side'], cls['filter-floor__side--top']]">гора болгатура</span>
        <!-- <span :class="[cls['filter-floor__side'], cls['filter-floor__side--right']]">Море</span> -->
        <span :class="[cls['filter-floor__side'], cls['filter-floor__side--bottom']]">артек</span>

        <div :class="cls['filter-floor__plan']">
          <floor-plan
            v-if="data.svg"
            :plan="data.svg"
            :rooms="data['apartment numbers']"
          />
        </div>
      </div>

      <div :class="cls['filter-floor__minimap']">
        <minimap />
      </div>

      <img
        :class="cls['filter-floor__compass']"
        :src="`${BASE_URL}/image/compass/1.svg`"
        alt="роза ветров"
      >
    </div>

    <div :class="cls['filter-floor__aside']">
      <switch-floor
        :store="storeFloor"
      />
    </div>
  </div>
</template>

<style lang="scss" module="cls">
  @import './style';
</style>
