<script setup lang="ts">
  import { addDelay } from'@/shared/animation/add-delay/addDelay'
  import { PUBLIC_REMOTE, PERSONAL_POLITIC, OFFER_AGREEMENT } from '@/shared/config'

  const data = await useAPI('api/v1/footer')
  const globData = useGlobData()

  const contacts = [
    { href: `tel:${globData.value.phone['2'].value}`, text: globData.value.phone['2'].text },
    { href: `mailto:${globData.value.email['1']}`, text: globData.value.email['1'] },
  ]

  const currentYear = new Date().getFullYear()

  onMounted(() => {
    addDelay()
  })
</script>

<template>
  <footer class="footer" data-switch-theme="blue">
    <div class="footer__bg" style="background-image: url('/image/bg/bg-footer.webp')" />

    <div class="wrapper footer__body">

      <a href="https://moredevelopment.ru/" target="_blank" class="footer__logo-second" rel ="nofollow noopener noreferrer">
        <LogoSecond />
      </a>

      <div class="footer__contacts">
        <ListContacts title="Контакты:" :items="contacts"/>

        <SocialLinks class="footer__socials"/>
      </div>

      <div class="footer__msg">
        <p v-if="data && data.text" class="caption caption--sm footer__text-icon" v-html="data.text" />

        <div class="footer__video-box">
          <video
            v-if="data && data.video"
            class="footer__video"
            width="400"
            height="196"
            muted
            loop
            autoplay
            playsinline
            disablepictureinpicture
          >
            <source
              :src="`${PUBLIC_REMOTE}${data.video}`"
              type="video/mp4"
            >
          </video>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__logo-box">
          <svg ref="heading" data-animation="list" width="1376" height="148" viewBox="0 0 1376 148" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer__logo">
            <g class="logo-elem">
              <path d="M0.291016 3.20357V143.039H17.6326V124.021V39.4514L71.5959 82.0912L125.572 39.4514V74.2656V143.039H142.744V3.19043L71.5959 59.3508L0.291016 3.20357Z" fill="#C2DCF2"/>
            </g>
            <g class="logo-elem">
              <path d="M310.21 25.6401C304.067 19.4453 296.772 14.4869 288.52 10.8963C280.242 7.30572 271.296 5.47754 261.892 5.47754C252.488 5.47754 243.529 7.29256 235.264 10.8963C227.012 14.4869 219.717 19.4322 213.574 25.6401C207.418 31.8348 202.493 39.1738 198.957 47.4203C195.42 55.6273 193.626 64.5578 193.6 73.9485H210.941C210.98 67.1619 212.356 60.6121 215.054 54.4963C217.804 48.2621 221.537 42.7249 226.135 38.0295C230.732 33.3342 236.181 29.5858 242.35 26.8764C248.493 24.1801 255.055 22.7991 261.892 22.7991C268.729 22.7991 275.291 24.167 281.447 26.8764C287.603 29.5726 293.065 33.3342 297.662 38.0164C302.26 42.7249 306.006 48.262 308.743 54.4831C311.441 60.5989 312.83 67.1488 312.856 73.9354H330.197C330.158 64.5446 328.377 55.6274 324.84 47.4072C321.278 39.1475 316.366 31.8085 310.223 25.6269L310.21 25.6401Z" fill="#C2DCF2"/>
              <path d="M231.389 120.748C244.684 120.893 213.707 115.593 221.71 110.581C230.289 105.57 212.371 106.254 199.732 105.873C187.027 105.492 203.962 110.581 203.962 110.581C211.821 111.726 203.753 114.08 204.133 118.013C204.539 121.971 218.082 120.59 231.415 120.748H231.389Z" fill="#C2DCF2"/>
              <path d="M216.138 100.014C217.238 98.0013 209.694 97.4621 208.79 96.4757C207.86 95.4761 217.081 96.3573 212.248 91.2542C211.174 90.2152 210.637 89.4786 210.44 88.9131H195.875C195.692 91.5567 191.461 96.4231 195.705 99.1324C200.8 102.539 215.09 102.039 216.138 100.014Z" fill="#C2DCF2"/>
              <path d="M315.139 114.725C300.064 109.083 283.508 114.804 289.978 116.54C296.462 118.276 296.357 122.432 293.069 122.827C292.48 122.906 282.25 123.577 282.696 126.878C283.141 130.179 307.503 130.179 303.233 125.72C298.963 121.249 326.993 119.144 315.152 114.725H315.139Z" fill="#C2DCF2"/>
              <path d="M255.796 128.515C252.404 123.951 218.035 125.688 220.995 130.186C223.955 134.671 240 131.475 240.144 131.264C243.209 126.621 259.188 133.092 255.796 128.528V128.515Z" fill="#C2DCF2"/>
              <path d="M313.549 89.4859C310.157 89.8804 302.534 90.7748 309.214 95.6412C309.475 95.8384 309.842 99.7052 306.673 100.297C303.542 100.889 303.686 104.703 312.632 105.979C321.408 107.268 325.114 102.625 322.835 100.402C320.478 98.1796 328.913 96.0489 326.175 93.7209C323.778 91.7612 329.646 90.4197 330.118 88.8809H314.793C314.544 89.1702 314.178 89.3938 313.562 89.4727L313.549 89.4859Z" fill="#C2DCF2"/>
              <path d="M272.623 137.388C268.34 139.058 263.154 137.559 255.491 135.717C247.829 133.889 246.362 140.386 246.362 140.386C246.257 142.557 257.181 146.713 267.096 145.897C277.011 145.056 284.673 138.808 282.198 136.059C279.722 133.311 276.893 135.731 272.61 137.388H272.623Z" fill="#C2DCF2"/>
            </g>
            <g class="logo-elem">
              <path d="M402.2 65.7932V22.7982H456.176C458.403 22.7982 460.734 23.1796 463.079 23.9425C465.384 24.679 467.493 25.8759 469.366 27.5068C471.239 29.1377 472.85 31.3209 474.107 33.9777C475.365 36.6213 476.006 40.0015 476.006 44.0261C476.006 48.0507 475.299 51.273 473.871 54.0219C472.431 56.8233 470.662 59.0987 468.619 60.7822C466.537 62.5051 464.336 63.7809 462.07 64.5832C459.791 65.3855 457.8 65.7932 456.176 65.7932H402.2ZM472.169 100.963L462.764 82.8912C467.571 81.9968 471.933 79.7083 475.744 77.3146C477.853 76.0783 479.975 74.4606 482.097 72.5272C484.219 70.5675 486.131 68.2001 487.768 65.4775C489.379 62.7813 490.702 59.6247 491.711 56.0736C492.706 52.5225 493.204 48.419 493.204 43.8683C493.204 39.094 492.706 34.8063 491.711 31.1368C490.715 27.4673 489.392 24.245 487.768 21.5488C486.131 18.8262 484.219 16.4851 482.071 14.5649C479.949 12.6841 477.788 11.1453 475.705 10.0273C470.741 7.27849 464.978 5.76598 458.481 5.50293H385.055V143.05H402.226V83.1148H442.581V83.1411H443.157L456.674 109.117L456.779 109.077L474.435 143.076H494.134L472.208 100.989H472.182L472.169 100.963Z" fill="#C2DCF2"/>
            </g>
            <g class="logo-elem">
              <path d="M569.422 125.741V83.1016H642.757V65.7932H569.422V22.8114H646.058L654.728 5.50293H552.264V22.8114V65.7932V83.1016V125.741V143.05H569.422H654.728L646.071 125.741H569.422Z" fill="#C2DCF2"/>
            </g>

            <g class="logo-elem">
              <path d="M806.354 71.997L762.45 5.41992H740.799L797.133 88.6478V143.138H815.404V88.2664L871.725 5.41992H850.624L806.354 71.997Z" fill="#C2DCF2"/>
            </g>
            <g class="logo-elem">
              <path d="M1023.32 85.2414C1023.32 113.992 1008.06 128.565 984.131 128.565C960.201 128.565 944.379 112.677 944.379 84.3076V5.41992H926.107V85.2545C926.107 124.606 949.094 145.216 983.751 145.216C1018.41 145.216 1041.39 124.396 1041.39 84.1103V5.41992H1023.32V85.2545V85.2414Z" fill="#C2DCF2"/>
            </g>
            <g class="logo-elem">
              <path d="M1158.98 104.325L1116.61 5.41992H1095.58L1158.79 147.386L1222 5.41992H1201.52L1158.98 104.325Z" fill="#C2DCF2"/>
            </g>
            <g class="logo-elem">
              <path d="M1336.59 96.892H1287.43L1312 41.2708L1336.59 96.892ZM1312.29 1.15625L1248.9 143.136H1267.44L1276.22 123.184L1280.55 112.78V113.161H1343.63L1347.81 123.184L1356.59 143.136H1375.7L1312.29 1.15625Z" fill="#C2DCF2"/>
            </g>
          </svg>
        </div>

        <div class="footer__aside">
          <div class="footer__aside-left">
            <span class="footer__aside-info">© {{ currentYear }} Море Девелопмент. Все права защищены</span>

            <LinkBase
              :href="`${PUBLIC_REMOTE}${PERSONAL_POLITIC}`"
              class="link-base--blue link-base--s link-base--underline footer__aside-politic"
              target="_blank"
              text="Политика конфиденциальности"
            />
          </div>

          <BtnUp class="footer__btn-up"/>

          <div class="footer__links">
            <LinkBase
              href="https://xn--80az8a.xn--d1aqf.xn--p1ai/сервисы/каталог-новостроек/объект/65555"
              class="link-base--blue link-base--s link-base--underline"
              target="_blank"
              icon="dom"
              text="Документы дом.рф"
              rel ="nofollow noopener noreferrer"
            />

            <LinkBase
              :href="`${PUBLIC_REMOTE}${OFFER_AGREEMENT}`"
              class="link--color-dark link-base--s link-base--underline"
              target="_blank"
              text="договор оферты"
            />

            <LinkBase
              href="https://www.cedro.agency/"
              class="link-base--blue link-base--s link-base--underline"
              target="_blank"
              icon="cedro"
              text="Сделано в Cedro agency"
              rel ="nofollow noopener noreferrer"
            />
        </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  @import './styles';
</style>
