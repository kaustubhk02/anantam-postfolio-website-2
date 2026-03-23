'use client'

import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: { x: number; y: number; r: number; opacity: number; speed: number }[] = []

    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        opacity: Math.random(),
        speed: Math.random() * 0.008 + 0.003,
      })
    }

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame += 0.01

      stars.forEach((star) => {
        const flicker = Math.sin(frame * star.speed * 30 + star.x) * 0.3 + 0.7
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity * flicker})`
        ctx.fill()
      })

      // Occasional cyan shooting star
      if (Math.random() < 0.003) {
        const sx = Math.random() * canvas.width
        const sy = Math.random() * canvas.height * 0.5
        const len = 80 + Math.random() * 120
        const grad = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.3)
        grad.addColorStop(0, 'rgba(34,211,238,0)')
        grad.addColorStop(0.5, 'rgba(34,211,238,0.7)')
        grad.addColorStop(1, 'rgba(34,211,238,0)')
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(sx + len, sy + len * 0.3)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  )
}
