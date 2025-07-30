<script setup lang="ts">
  import { OFFER_AGREEMENT, PUBLIC_REMOTE, PRESENTATION } from '@/shared/config'
  import { navItems } from '../data/data'
  import { useMenuMain } from '../model/useMenuMain'

  defineProps<{
    theme: string,
  }>()

  defineEmits(['click'])

  const data = await useAPI('api/v1/menu')
  const { isActive, toggleMenu } = useMenuMain()
  const globData = useGlobData()
</script>

<template>
  <BtnBurger
    :class="[`btn-burger--${theme}`, {'is-active': isActive}]"
    name="burger"
    text="меню"
    text-alt="закрыть"
    @click="toggleMenu(), $emit('click', isActive)"
  />

  <ClientOnly>
    <Teleport defer to="#menu-main">
      <Transition name="default">
        <div v-show="isActive" class="menu-main">
          <div class="menu-main__bg" />

          <div class="menu-main__body" data-lenis-prevent>
            <div class="menu-main__header">
              <LogoMain :link="true"  class="menu-main__logo"/>

              <p class="menu-main__subtitle">Комплекс роскошных апартаментов бизнес-класса в&nbsp;Гурзуфе от создателей

                <LinkBase
                  href="https://moreyalta.ru/"
                  class="link-base--size-s link-base--underline link-base--color-dark"
                  target="_blank"
                  text="more.yalta"
                  rel="nofollow noopener noreferrer"
                />
              </p>
            </div>

            <div class="menu-main__main">
              <nav>
                <ul ref="menu" class="menu-main__items" :style="`--count-items: ${navItems.length}`">
                  <li
                    v-for="item, index in navItems"
                    :key="index"
                    class="menu-main__item">

                    <NuxtLink
                      :to="item.url"
                      class="menu-main__link"
                      :target="item.blank ? '_blank' : '_self'"
                      :rel ="item.blank ? 'nofollow noopener noreferrer' : ''"
                      @click="toggleMenu(), $emit('click', isActive)">

                      <div class="menu-main__link-text">
                        <span data-split-text="chars, lines">{{ item.text }}</span>
                        <!-- <span class="header-list__text header-list__text--under" data-split-text="chars, lines">{{ item.text }}</span> -->
                      </div>

                      <div v-if="item.blank" class="menu-main__link-icon">
                        <icon-sprite icon="arrow-ur"/>
                      </div>
                    </NuxtLink>

                    <div class="menu-main__item-aside">
                      <div class="menu-main__item-img">
                        <img-sizes
                          v-if="data[item.key].image"
                          :public-path="PUBLIC_REMOTE"
                          :img="data[item.key].image"
                          sizes="100%"
                        />
                      </div>

                      <LinkBase
                        v-if="index === (navItems.length - 1)"
                        :href="`${PUBLIC_REMOTE}${PRESENTATION}`"
                        class="link-base--flex link-base--color-dark link-base--bg link-base--m"
                        download
                        text="скачать презентацию"
                        icon="doc"/>
                    </div>
                  </li>

                  <!-- <li class="header-list__item header-list__item--3d"><TourBtn theme-class="header-list__link" mobile-for /></li> -->
                </ul>
              </nav>
            </div>

            <div class="menu-main__footer">
              <SocialLinks class="menu-main__center" theme-class="link-social--color-dark"/>

              <div class="menu-main__left">
                <LinkBase
                  :href="`${PUBLIC_REMOTE}${OFFER_AGREEMENT}`"
                  class="link--color-dark link-base--s link-base--underline"
                  target="_blank"
                  text="договор оферты"
                />

                <LinkBase
                  href="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D1%8B/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BA/%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82/65555"
                  class="link-base--flex link-base--s link-base--underline link-base--color-dark"
                  icon="dom"
                  text="Документы дом.рф"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                />
              </div>

              <LinkBase
                v-if="globData.email['1']"
                :href="`mailto:${globData.email['1']}`"
                class="link-base--s link-base--underline link-base--color-dark menu-main__right">

                  почта:
                  <span class="link-base__text">{{ globData.email['1'] }}</span>
              </LinkBase>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style lang="scss">
  @import './styles';
</style>
