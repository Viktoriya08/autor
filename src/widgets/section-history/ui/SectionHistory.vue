<script setup lang="ts">
  import { PUBLIC_REMOTE, BASE_URL } from '@/shared/config'

  type APIData = {
    image1: ImagePaths
    image2: ImagePaths
    [key: string]: string | ImagePaths
  }

  const data = await useAPI<APIData>('api/v1/main/history')
  const typeViewport: Ref<string> | undefined = inject('typeViewport')

  const heading = useTemplateRef('heading')
  const title_1 = useTemplateRef('title_1')
  const bg_1 = useTemplateRef('item_1_bg')
  const img_1 = useTemplateRef('img_1')
  const text_1 = useTemplateRef('text_1')
  const title_2 = useTemplateRef('title_2')
  const text_2 = useTemplateRef('text_2')
  const line_2 = useTemplateRef('line_2')
  const bg_2 = useTemplateRef('bg_2')
  const bg_3 = useTemplateRef('bg_3')
  const bg_4 = useTemplateRef('bg_4')
  const paint_1 = useTemplateRef('paint_1')

  onMounted(() => {
    const { $gsap } = useNuxtApp()

    if (typeViewport && typeViewport.value === 'desktop') {
      nextTick(() => {
        // $gsap.registerPlugin(ScrollTrigger)

        const charHeading = heading.value?.querySelectorAll('.char') || []
        const lineTitle_1 = title_1.value?.querySelectorAll('.line') || []
        const lineText_1 = text_1.value?.querySelectorAll('.line') || []
        const lineTitle_2 = title_2.value?.querySelectorAll('.line') || []
        const lineText_2 = text_2.value?.querySelectorAll('.line') || []

        const tlHeading = $gsap.timeline()
        const tl_title_1 = $gsap.timeline()
        const tl_bg_1 = $gsap.timeline()
        const tl_img_1 = $gsap.timeline()

        const tl_item_1 = $gsap.timeline({
          scrollTrigger: {
            trigger: heading.value,
            pin: false,
            start: "top center",
            scrub: false,
            once: true
          }
        })

        tlHeading.fromTo(charHeading,
          {opacity: 0, y: "-100%"},
          {opacity: 1, y: 0, stagger: {
            each: 0.02,
            ease: "power1.in"
          }}
        )

        tl_title_1.fromTo(lineTitle_1,
          {opacity: 0, y: "5px"},
          {opacity: 1, y: 0, stagger: {
            each: 0.1,
            ease: "power1.in"
          }}
        )

        tl_bg_1.fromTo(bg_1.value,
          {opacity: 0},
          {opacity: 1, ease: "power1.in"}
        )

        tl_img_1.fromTo(img_1.value,
          {opacity: 0},
          {opacity: 1, ease: "power1.in"}
        )

        tl_item_1
        .add(tlHeading)
        .add(tl_bg_1, "<")
        .add(tl_img_1, ">-0.2")
        .add(tl_title_1, "<")

        const tl_text_1 = $gsap.timeline({
          scrollTrigger: {
            trigger: text_1.value,
            pin: false,
            // start: "left top",
            start: `left top-=${window.innerHeight / 2}`,
            end: "+=500",
            scrub: false,
            once: true
          }
        })

        tl_text_1.fromTo(lineText_1,
          {opacity: 0, y: "5px"},
          {opacity: 1, y: 0, stagger: {
            each: 0.1,
            ease: "power1.in"
          }}
        )

        const tl_item_2 = $gsap.timeline({
          scrollTrigger: {
            trigger: title_2.value,
            pin: false,
            start: `left top-=${window.innerHeight*2}`,
            end: "+=500",
            scrub: false,
            once: true
          }
        })

        const tl_title_2 = $gsap.timeline()
        const tl_line_2 = $gsap.timeline()

        tl_title_2.fromTo(lineTitle_2,
          {opacity: 0, y: "5px"},
          {opacity: 1, y: 0, stagger: {
            each: 0.1,
            ease: "power1.in"
          }}
        )

        tl_line_2.fromTo(line_2.value,
          {opacity: 0},
          {opacity: 1, ease: "power1.in"}
        )

        tl_item_2
          .add(tl_title_2)
          .add(tl_line_2, "+>0.3")

        const tl_item_3 = $gsap.timeline({
          scrollTrigger: {
            trigger: text_2.value,
            pin: false,
            start: `left top-=${window.innerHeight*3}`,
            end: "+=500",
            scrub: false,
            once: true
          }
        })

        const tl_text_2 = $gsap.timeline()


        tl_text_2.fromTo(lineText_2,
          {opacity: 0, y: "5px"},
          {opacity: 1, y: 0, stagger: {
            each: 0.1,
            ease: "power1.in"
          }}
        )

        tl_item_3
          .add(tl_text_2)

        const tl_last = $gsap.timeline({
          scrollTrigger: {
            trigger: "#history",
            pin: false,
            start: `bottom bottom+=100`,
            end: "+=100",
            scrub: false,
            once: true
          }
        })

        const tl_bg_2 = $gsap.timeline()
        const tl_bg_3 = $gsap.timeline()
        const tl_bg_4 = $gsap.timeline()

        tl_bg_2.fromTo(bg_2.value,
          {opacity: 0, y: "-5px"},
          {opacity: 1, y: 0, ease: "power1.in"}
        )

        tl_bg_3.fromTo(bg_3.value,
          {opacity: 0, y: "-5px"},
          {opacity: 1, y: 0, ease: "power1.in"}
        )

        tl_bg_4.fromTo(bg_4.value,
          {opacity: 0, y: "-5px"},
          {opacity: 1, y: 0, ease: "power1.in"}
        )

        tl_last
          .add(tl_bg_2)
          .add(tl_bg_3, ">+0.1")
          .add(tl_bg_4, ">+0.1")


        if (paint_1.value) {
          const offsetLeft = paint_1.value?.offsetLeft
          // const wPaint_1 = paint_1.value?.offsetWidth

          const paint = $gsap.timeline({
            scrollTrigger: {
              trigger: "#history",
              pin: false,
              start: `top top-=${window.innerWidth - offsetLeft}`,
              end: `+=${paint_1.value.parentElement?.offsetWidth}`,
              scrub: true,
            }
          })

          paint.fromTo(paint_1.value,
            {"--zoom": 1.4},
            {"--zoom": 1, ease: "linear"}
          )
        }
      })
    }
  })
</script>

<template>
  <section
    id="history"
    :class="classes['section-history']"
    data-animation="scroll-x">

    <div id="history-slides" :class="classes.items" data-switch-theme="blue-transparent">

      <!-- item--1 -->
      <div :class="[classes.item, classes['item--1']]">
        <div :class="classes['item__bg']">
          <img
            ref="item_1_bg"
            :class="classes['bg--1']"
            :src="`${BASE_URL}/image/bg/history-1.svg`"
            width="530"
            height="566"
            loading="lazy"
            alt=""
          >
        </div>

        <div :class="classes['item__body']">
          <!-- <span>В двух шагах</span> <span>от вековой</span> <span>истории</span> -->
          <h2
            v-if="data && data.title"
            ref="heading"
            :class="[classes.heading, 'heading--md']"
            data-split-text="chars, words, lines"
            v-html="data.title"
          />

          <!-- <span>Пушкин, Чехов, Коровин, Шаляпин —</span> <span>эти мастера восхищались природой</span> <span>Гурзуфа, они видели в ней вечную</span> <span>ценность, искусство</span><br/><span class="underline underline--primary-1">вне времени</span> -->
          <p
            v-if="data && data.text1"
            ref="title_1"
            :class="[classes.title, 'caption--xl']"
            data-split-text="lines"
            v-html="data.text1"
          />

          <div ref="img_1" :class="classes.paint">
            <img
              :class="classes['img--1']"
              :src="`${BASE_URL}/image/bg/history-2.svg`"
              width="626"
              height="756"
              loading="lazy"
              alt=""
            >

            <img
              :class="classes['line--1']"
              :src="`${BASE_URL}/image/bg/history-line-1.svg`"
              width="946"
              height="381"
              loading="lazy"
              alt=""
            >
          </div>
        </div>
      </div>


      <!-- item--2 -->
      <div :class="[classes.item, classes['item--2']]">
        <div :class="classes['item__body']">

          <!-- <span>Сегодня это наследие продолжается: каждый,</span> <span>кто ступает на эту землю, становится свидетелем</span> <span>её уникальной красоты, вдохновляющей на</span> <span>творчество, гармонию и глубокое внутреннее</span> обновление. -->
          <p
            v-if="data && data.text2"
            ref="text_1"
            :class="[classes.text, 'text--md']"
            data-split-text="lines"
            v-html="data.text2"
          />
        </div>

        <div :class="classes.paint" ref="paint_1">
          <div :class="classes.paint__inner">
            <img-sizes
              v-if="data && data.image1"
              :public-path="PUBLIC_REMOTE"
              :img="data.image1"
              sizes="(max-width: 1279px) 430px, (max-width: 1919px) 770px, 974px"
              width="974"
              height="684"
              loading="lazy"
              alt=""
            />
          </div>

          <p :class="[classes['paint__name'], 'caption--sm']">
            <span v-if="data && data.name_image_down">{{ data.name_image_down }}</span>
            <span v-if="data && data.author_image_down">{{ data.author_image_down }}</span>
            <span v-if="data && data.data_image_down">{{ data.data_image_down }}</span>
          </p>
        </div>
      </div>


      <!-- item--3 -->
      <div :class="[classes.item, classes['item--3']]">
        <div :class="classes['item__bg']">
          <Img
            name="1"
            path="image/cloud"
            ext="png"
            :webp="true"
            fallback="590"
            :sources="[{size: 590}]"
            width="590"
            height="300"
            alt="облако"
            :class="classes['cloud--1']"
            loading="lazy"
          />
        </div>

        <div :class="classes['item__body']">
          <!-- <span>Благодаря богатому наследию</span> <span>это место является не только</span> <span>привлекательным курортом,</span> <span>но и важным <span class="underline underline--primary-2">центром</span></span> <span><span class="underline underline--primary-3">культурной жизни</span> Крыма.</span> -->
          <p
            v-if="data && data.text3"
            ref="title_2"
            :class="[classes.title, 'caption--xl']"
            data-split-text="lines"
            v-html="data.text3"
          />

          <img
            ref="line_2"
            :class="classes['line--1']"
            :src="`${BASE_URL}/image/bg/history-line-2.svg`"
            width="2683"
            height="204"
            loading="lazy"
            alt=""
          >
        </div>
      </div>


      <!-- item--4 -->
      <div :class="[classes.item, classes['item--4']]">
        <div :class="classes['item__bg']">
          <Img
            name="2"
            path="image/cloud"
            ext="png"
            fallback="413"
            :webp="true"
            :sources="[{size: 413}]"
            width="413"
            height="210"
            alt="облако"
            :class="classes['cloud--1']"
            loading="lazy"
          />

          <img
            ref="bg_2"
            :class="classes['bg--1']"
            :src="`${BASE_URL}/image/bg/history-3.svg`"
            width="123"
            height="64"
            loading="lazy"
            alt=""
          >

          <img
            ref="bg_3"
            :class="classes['bg--2']"
            :src="`${BASE_URL}/image/bg/history-4.svg`"
            width="293"
            height="205"
            loading="lazy"
            alt=""
          >

          <img
            ref="bg_4"
            :class="classes['bg--3']"
            :src="`${BASE_URL}/image/bg/birds.svg`"
            width="82"
            height="96"
            loading="lazy"
            alt=""
          >
        </div>

        <div :class="classes['item__body']">
          <!-- <span>Посещение Гурзуфа оставляет</span> <span>долгое послевкусие и незабываемые</span> <span>впечатления, после которых хочется</span> <span>возвращаться вновь и вновь.</span> -->
          <p
            v-if="data && data.text4"
            ref="text_2"
            :class="[classes.text, 'text--md']"
            data-split-text="lines"
            v-html="data.text4"
          />

          <div :class="classes.paint">
            <img-sizes
              v-if="data && data.image2"
              :public-path="PUBLIC_REMOTE"
              :img="data.image2"
              sizes="(max-width: 1919px) 314px, 430px"
              width="427"
              height="432"
              loading="lazy"
              alt=""
            />

            <span :class="[classes['tag--left'], 'caption--xs']">гармония</span>
            <span :class="[classes['tag--center'], 'caption--xs']">творчество</span>
            <span :class="[classes['tag--right'], 'caption--xs']">красота</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module="classes">
  @import './styles';
</style>
