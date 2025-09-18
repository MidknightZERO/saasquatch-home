export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
  e.preventDefault()
  smoothScrollTo(elementId)
}
