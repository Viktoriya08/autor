export const dataSlides = [
  {
    id: '',
    img: {
      name: '1',
      path: 'image/card-feature',
      ext: 'jpg',
      fallback: '1920',
      sources: [
        { size: 390, media: '(max-width: 767px)' },
        { size: 768, media: '(max-width: 1279px)' },
        { size: 1920 }
      ],
      webp: false,
      alt: 'alt text',
      width: '1920',
      height: '1080',
    },
    heading: '<span>искусство</span><span>жить<span data-icon="heart"></span></span><span>по-настоящему</span>',
    title: {
      default: '<span>В More Yuva созданы условия,</span> <span>в которых можно восстановить силы</span> <span>и насладиться жизнью в её самом</span> <span>прекрасном проявлении.</span>',
      mobile: '<span>В More Yuva созданы условия для</span> <span>восстановления сил и наслаждения</span> <span>жизнью. Каждый момент здесь</span> <span>становится ценным экспонатом</span> <span>в личной галерее воспоминаний</span>'
    },
    text: {
      default: [
        '<p><span>Здесь каждый миг становится ценным</span> <span>экспонатом в личной галерее</span> <span>воспоминаний.</span></p>',
        '<p><span>Внутри комплекса есть зоны для отдыха</span> <span>и занятия спортом, ресторан с террасой,</span> <span>аэрарий и всесезонный бассейн. А также —</span> <span>смотровая площадка на крыше, чтобы</span> <span>любоваться панорамой на море и горы.</span></p>',
      ],
      mobile: [
        '<p><span>Комплекс включает зоны для отдыха и спорта,</span> <span>ресторан с террасой, аэрарий и всесезонный</span> <span>бассейн, а также смотровую площадку на крыше</span> <span>с панорамным видом на море и горы.</span></p>'
      ]
    },
    thumb: {
      text: 'инфраструктура',
      img: {
        name: '1-thumb',
        path: 'image/card-feature',
        ext: 'jpg',
        fallback: '40',
        webp: false,
        alt: 'alt text',
        width: '40',
        height: '40',
        sources: [
          { size: 40, media: '(min-width: 390px)' },
        ]
      }
    }
  },
  {
    id: 'power',
    img: {
      name: '2',
      path: 'image/card-feature',
      ext: 'jpg',
      fallback: '1920',
      sources: [
        { size: 390, media: '(max-width: 767px)' },
        { size: 768, media: '(max-width: 1279px)' },
        { size: 1920 }
      ],
      webp: false,
      alt: 'alt text',
      width: '1920',
      height: '1080',
    },
    heading: '<span>подлинное</span><span><span data-icon="mount"></span>место</span><span>силы</span>',
    title: {
      default: '<span>Собрание More Yuva представлено</span> <span>резиденциями в полной современной</span> <span>отделке с мебелью и с необходимой</span> <span>бытовой техникой.</span>',
      mobile: '<span>Собрание More Yuva представлено</span> <span>резиденциями в полной отделке</span> <span>с мебелью и техникой.</span>'
    },
    text: {
      default: [
        '<p><span>Эргономика пространств продумана таким</span> <span>образом, чтобы обеспечить комфортный отдых</span> <span>резидентам, а также сделать предложение</span> <span>самым привлекательным для аренды.</span></p>',
        '<p><span>Мы предлагаем апартаменты, соответствующие</span> <span>стандартам лучших мировых отельных</span> <span>операторов:</span></p>',
        '<p class="table-props"><span class="table-props__item"><span>Studio</span><span>от 22 м²</span></span> <span class="table-props__item"><span>Standart</span><span>от 40 м²</span></span> <span class="table-props__item"><span>Suite</span><span>от 64 м²</span></span> <span class="table-props__item"><span>Patio</span><span>от 60 м²</span></span></p>'
      ],
      mobile: [
        '<p><span>Мы предлагаем апартаменты, соответствующие</span> <span>стандартам лучших мировых отельных операторов:</span></p>',
        '<p class="table-props"><span class="table-props__item"><span>Studio</span><span>от 23 м²</span></span> <span class="table-props__item"><span>Standart</span><span>от 40 м²</span></span> <span class="table-props__item"><span>Suite</span><span>от 64 м²</span></span> <span class="table-props__item"><span>Patio</span><span>от 60 м²</span></span></p>'
      ]
    },
    // link: {
    //   href: '#',
    //   text: 'Узнать больше',
    // },
    params: {
      default: [
        { value: '236', name: 'апартамента в комплексе' },
        { value: '56', unit: 'мест', name: 'в подземном паркинге' },
        { value: '30', unit: 'м²', name: 'площади террасы', prefix: 'до' },
      ],
      mobile:[
        { value: '236', name: 'апартамента' },
        { value: '56', unit: 'мест', name: 'в паркинге' },
        { value: '30', unit: 'м²', name: 'площади террас', prefix: 'до' },
      ]
    },
    thumb: {
      text: 'апартаменты с отделкой',
      img: {
        name: '2-thumb',
        path: 'image/card-feature',
        ext: 'jpg',
        fallback: '40',
        webp: false,
        alt: 'alt text',
        width: '40',
        height: '40',
        sources: [
          { size: 40, media: '(min-width: 390px)' },
        ]
      }
    }
  },
  {
    id: 'money',
    img: {
      name: '3',
      path: 'image/card-feature',
      ext: 'jpg',
      fallback: '1920',
      sources: [
        { size: 390, media: '(max-width: 767px)' },
        { size: 768, media: '(max-width: 1279px)' },
        { size: 1920 }
      ],
      webp: false,
      alt: 'alt text',
      width: '1920',
      height: '1080',
    },
    heading: '<span>редкая<span data-icon="arrow"></span></span><span>инвестиция</span>',
    title: {
      default: '<span>Недвижимость Крыма ежегодно</span> <span>становятся все более</span> <span>привлекательным вложением,</span> <span>которое открывает новые</span> <span>возможности для инвестиций.</span>',
      mobile: '<span>Недвижимость Крыма становится</span> <span>все более привлекательным</span> <span>вложением благодаря</span> <span>государственному развитию</span> <span>полуострова, улучшению</span> <span>транспортной доступности,</span> <span>инфраструктуры, а также растущему</span> <span>туристическому потоку.</span>'
    },
    text: {
      default: [
        '<p><span>Государственный вклад в развитие</span> <span>полуострова, улучшение транспортной</span> <span>доступности, развивающаяся социальная и</span> <span>коммерческая инфраструктура, а также</span> <span>растущий ежегодный туристический поток</span> <span>обеспечивают стабильный доход от</span> <span>аренды и высокую капитализацию при</span> последующей продаже апартаментов.</p>',
      ],
      mobile: [
        '<p><span>Эти факторы обеспечивают высокую</span> <span>капитализацию при последующей продаже</span> <span>или стабильный доход от аренды апартаментов.</span></p>'
      ]
    },
    // link: {
    //   href: '#',
    //   text: 'Узнать больше',
    // },
    params: {
      default: [
        { value: '40', unit: '%', name: 'Рост доходности за один год' },
        { value: '13', unit: 'млн', name: 'стоимость с отделкой' },
        { value: '2', unit: 'млн', name: 'пассивный доход в год', prefix: 'до' },
      ]
    },
    thumb: {
      text: 'инвестиции',
      img: {
        name: '3-thumb',
        path: 'image/card-feature',
        ext: 'jpg',
        fallback: '40',
        webp: false,
        alt: 'alt text',
        width: '40',
        height: '40',
        sources: [
          { size: 40, media: '(min-width: 390px)' },
        ]
      }
    }
  },
]

export const sourcesImg = [
  { size: 1920, media: '(min-width: 390px)' },
]
