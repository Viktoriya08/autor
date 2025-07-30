const copyToClipboard = (e: Event): void => {
  e.preventDefault()

  navigator.clipboard.writeText(document.location.href);
}

export default copyToClipboard
