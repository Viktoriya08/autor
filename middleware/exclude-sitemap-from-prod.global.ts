export default defineNuxtRouteMiddleware((to) => {
  if (!import.meta.dev && to.path === '/sitemap') {
    /**
     * Путь '/not-found' здесь – это не маршрут
     * к кастомной странице «404».
     *
     * Это ссылка на несуществующий маршрут, который
     * по умолчанию будет отловлен роутером через '/:catchAll(.*)'
     * (см. `app/router.options.ts` для роута `not-found`),
     * и произойдёт редирект на настоящую проектную «404».
     * */
    return navigateTo('/not-found')
  }
})
