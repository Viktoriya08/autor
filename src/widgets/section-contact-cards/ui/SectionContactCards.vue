<script lang="ts" setup>
  import type { CardContact } from '@/widgets/contacts/model/types'

  defineProps<{
    contacts: CardContact[]
  }>()
</script>

<template>
  <section class="section-contact-cards">
    <h2 class="visually-hidden">Контакты: ссылки для связи</h2>

    <ul class="section-contact-cards__items">
      <li
        v-for="({name, email, phone}, index) in contacts"
        :key="index"
        class="section-contact-cards__item"
      >
        <strong v-if="name" class="section-contact-cards__item-title">{{ name }}</strong>

        <p class="section-contact-cards__item-links">
          <a
            v-if="email"
            class="section-contact-cards__link"
            :href="`mailto:${email.replaceAll(' ', '')}`"
            :aria-label="`«${name || ''}»: написать на почту`">

            <span class="section-contact-cards__link-icn">
              <icon-sprite icon="mail-24" />
            </span>

            {{ email }}
          </a>

          <a
            v-if="phone"
            class="section-contact-cards__link"
            :href="`tel:${phone.replaceAll(' ', '')}`"
            :aria-label="`«${name || ''}»: контактный номер для связи`">

            <span class="section-contact-cards__link-icn">
              <icon-sprite icon="phone-24" />
            </span>

            {{ phone }}
          </a>
        </p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
  @import './styles.scss';
</style>
