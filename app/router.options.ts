import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'sitemap',
      path: '/sitemap',
      component: () => import('@/pages/sitemap/ui/sitemap.vue').then(r => r.default || r),
    },
    {
      name: 'index',
      path: '/',
      component: () => import('@/pages/index/ui/index.vue').then(r => r.default || r),
    },
    {
      name: 'documents',
      path: '/documents',
      component: () => import('@/pages/documents/ui/page-documents.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'payment',
      path: '/payment',
      component: () => import('@/pages/payment/ui/page-payment.vue').then(r => r.default || r),
      meta: {
      }
    },
    {
      name: 'contacts',
      path: '/contacts',
      component: () => import('@/pages/contacts/ui/page-contacts.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'investments',
      path: '/investments',
      component: () => import('@/pages/investments/ui/page-investments.vue').then(r => r.default || r),
      meta: {
      }
    },
    {
      name: 'news',
      path: '/news',
      component: () => import('@/pages/news/ui/page-news.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'news-id',
      path: '/news/:id',
      component: () => import('@/pages/news-id/ui/[news-id].vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'construction',
      path: '/construction',
      component: () => import('@/pages/construction/ui/page-construction.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'construction-id',
      path: '/construction/:id',
      component: () => import('@/pages/construction-id/ui/[id].vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'object-id',
      path: '/objects/:id',
      component: () => import('@/pages/object/ui/object.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'objects',
      path: '/objects',
      component: () => import('@/pages/objects/ui/objects.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      },
    },
    {
      name: 'floors',
      path: '/floors',
      component: () => import('@/pages/filter-home/ui/filter-home.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      }
    },
    {
      name: 'floor-id',
      path: '/floors/:id',
      component: () => import('@/pages/filter-floor/ui/filter-floor.vue').then(r => r.default || r),
      meta: {
        type: 'internal'
      },
    },
    // {
    //   name: 'not-found',
    //   path: '/:catchAll(.*)',
    //   component: () => import('@/pages/error/ui/error.vue').then(r => r.default || r),
    //   meta: {
    //     type: 'internal'
    //   },
    // }
  ],

  // scrollBehavior(to, from, savedPosition) {
  //   // Если у браузера есть сохранённая позиция прокрутки (например, при нажатии "назад")
  //   if (savedPosition) {
  //     return
  //   }

  //   // // Всегда прокручивать вверх при переходе
  //   // return { left: 0, top: 0 }
  // }
}
