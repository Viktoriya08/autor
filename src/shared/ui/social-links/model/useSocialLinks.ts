export const useSocialLinks = () => {
  const globData = useGlobData()

  const links = [
    { name: 'vk', text: 'ВКонтакте', href: globData.value.social.vk },
    { name: 'wa', text: 'WhatsApp', href: globData.value.social.whatsapp },
    { name: 'tg', text: 'Telegram', href: globData.value.social.telegram }
  ]

  return {
    links
  }
}
