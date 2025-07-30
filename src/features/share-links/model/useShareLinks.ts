import { shareLinks } from '../data'
import copyToClipboard from '@/shared/utils/copy-to-clipboard'
import { useToast } from '@/features/toast'

export const useShareLinks = () => {
  const url = useRequestURL()
  const toast = useToast()

  const updateLinkUrl = (href: string, type: string) => {
    const urlParam = encodeURIComponent(url.href)

    switch(type) {
      case 'tg':
        href += `url=${urlParam}`
        break

      case 'vk':
        href += `url=${urlParam}`
        break

      case 'whatsapp':
        href += `text=${urlParam}`
        break
    }

    return href
  }

  const links = shareLinks.map((link) => {
    return {
      ...link,
      href: updateLinkUrl(link.href, link.type)
    }
  })

  const copyLink = (event: Event) => {
    copyToClipboard(event)
    toast.info('ссылка скопирована', 'check')
  }

  return {
    links,
    copyLink,
  }
}
