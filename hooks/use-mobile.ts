import * as React from 'react'

const MOBILE_BREAKPOINT = 768

// Função debounce para otimizar eventos de resize, caso necessário
function debounce(fn: (...args: any[]) => void, delay: number) {
  let timer: NodeJS.Timeout | null = null
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    // Se precisar usar resize manual, use debounce
    const onResize = debounce(onChange, 100)
    mql.addEventListener('change', onChange)
    window.addEventListener('resize', onResize)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => {
      mql.removeEventListener('change', onChange)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return !!isMobile
}
