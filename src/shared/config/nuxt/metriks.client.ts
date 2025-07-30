export default defineNuxtPlugin(nuxtApp => {
  const config = useNuxtApp().$config

  nuxtApp.hook('app:mounted', async() => {
    const { data } = await $fetch(`${config.public.apiBase}/api/v1/metrika`)

    const temp = document.createElement('div')
    temp.innerHTML = data

    const scripts = temp.querySelectorAll('script')
    const noscripts = temp.querySelectorAll('noscript')

    scripts.forEach((oldScript) => {
      const newScript = document.createElement('script')

      if (oldScript.src) {
        newScript.src = oldScript.src
        newScript.async = oldScript.async
      } else {
        newScript.textContent = oldScript.textContent
      }

      document.body.appendChild(newScript)
    })

    noscripts.forEach((noscript) => {
      document.body.appendChild(noscript)
    })
  })
})
