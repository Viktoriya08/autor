import * as path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: true,
  debug: true,
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@images': path.resolve(__dirname, 'public/image'),
  },
  dir: {
    layouts: 'src/app/layouts'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['mixed-decls', 'import'],
          additionalData: '@use "~/src/app/styles/system/global/index.scss" as *;'
        }
      },
    }
  },
  modules: [
    // Конфиг сохранён для будущих
    // настроек линтеров.
    // ---
    // ['@nuxtjs/stylelint-module', {
    //   failOnError: false,
    //   failOnWarning: false,
    //   lintOnStart: false,
    //   lintDirtyOnly: true,
    // }],
    '@nuxt/eslint',
    '@nuxt/image',
    'vue-yandex-maps/nuxt',
    'nuxt-swiper',
    'nuxt-svg-icon-sprite',
  ],
  components: [
    {
      path: '~/src',
      pathPrefix: false,
      extensions: ['.vue'],
    }
  ],
  imports: {
    dirs: [
      './src/shared/api',
      './src/shared/types',
      './src/shared/lib/composables/**',
    ]
  },
  plugins: [
    '@/shared/config/nuxt/init-seo',
    '@/shared/config/nuxt/globData',
    '@/shared/config/nuxt/metriks.client',
    '@/shared/config/nuxt/directives.server',
    '@/shared/config/nuxt/directives.client',
    '@/shared/config/nuxt/split-type.client',
    '@/shared/config/nuxt/gsap/gsap.client',
    '@/shared/config/nuxt/lenis/lenis.client',
  ],
  svgIconSprite: {
    sprites: {
      default: {
        importPatterns: ['./src/shared/assets/icons/**/*.svg'],
      },
    },
  },
  yandexMaps: {
    apikey: 'e544d769-23b9-4c15-a7a1-563ab8306ebf',
  },
})
