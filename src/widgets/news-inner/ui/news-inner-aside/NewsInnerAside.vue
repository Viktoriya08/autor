<script setup lang="ts">
  const props = defineProps<{
    date: string
  }>()

  const date = useSplitDate(props.date)
</script>

<template>
  <aside class="news-inner__aside">
    <div class="news-inner__aside-content">
      <Breadcrumbs class="news-inner__back-link" :backward="{nameBack: 'Все новости', urlBack: '/news'}" />

      <div class="news-inner__socials-box" aria-label="Навигация: ссылки на социальные сети">
        <share-links
          link-size="l"
          link-theme="yellow"
          link-mod="icon"
          class="news-inner__share"
        />
      </div>

      <UiDate
        :date="date"
        :custom-class-mods="{
          numElementClassMod: 'news-inner__date-num',
          textElementClassMod: 'news-inner__date-text',
        }"
        mode="primary"
        class="news-inner__date"
      />
    </div>
  </aside>
</template>
