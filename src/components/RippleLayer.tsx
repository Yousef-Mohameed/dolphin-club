import { useEffect, useRef } from 'react'

// Canvas overlay: the hero's water surface reacts to pointer movement with ripples.
export default function RippleLayer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    type Ripple = { x: number; y: number; r: number; a: number }
    const ripples: Ripple[] = []
    let raf = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
    }
    resize()
    window.addEventListener('resize', resize)

    const parent = canvas.parentElement!
    const add = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect()
      ripples.push({
        x: (clientX - rect.left) * devicePixelRatio,
        y: (clientY - rect.top) * devicePixelRatio,
        r: 0,
        a: 0.5,
      })
      if (ripples.length > 24) ripples.shift()
    }
    const onMove = (e: PointerEvent) => add(e.clientX, e.clientY)
    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerdown', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i]
        rp.r += 2.4 * devicePixelRatio
        rp.a *= 0.96
        if (rp.a < 0.01) {
          ripples.splice(i, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(31, 224, 255, ${rp.a})`
        ctx.lineWidth = 2 * devicePixelRatio
        ctx.stroke()
      }
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerdown', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
