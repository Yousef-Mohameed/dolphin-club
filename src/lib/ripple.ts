import { useEffect } from 'react'

// Adds a material-style ripple to any element with .btn-ripple
export function useButtonRipples() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('.btn-ripple')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const dot = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      dot.className = 'ripple-dot'
      dot.style.width = dot.style.height = `${size}px`
      dot.style.left = `${e.clientX - rect.left - size / 2}px`
      dot.style.top = `${e.clientY - rect.top - size / 2}px`
      el.appendChild(dot)
      setTimeout(() => dot.remove(), 600)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}
