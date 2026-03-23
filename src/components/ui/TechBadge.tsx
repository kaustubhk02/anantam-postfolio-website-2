'use client'

import { motion } from 'framer-motion'

interface TechBadgeProps {
  name: string
  color?: 'cyan' | 'neon' | 'purple' | 'orange'
  icon?: string
  delay?: number
}

const colorMap = {
  cyan: 'border-cyan-400/40 text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400/15 hover:border-cyan-400',
  neon: 'border-green-400/40 text-green-300 bg-green-400/5 hover:bg-green-400/15 hover:border-green-400',
  purple: 'border-purple-400/40 text-purple-300 bg-purple-400/5 hover:bg-purple-400/15 hover:border-purple-400',
  orange: 'border-orange-400/40 text-orange-300 bg-orange-400/5 hover:bg-orange-400/15 hover:border-orange-400',
}

export default function TechBadge({ name, color = 'cyan', delay = 0 }: TechBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`
        tech-badge inline-flex items-center gap-2 px-4 py-2 rounded-lg border 
        font-mono text-sm cursor-default transition-all duration-300
        ${colorMap[color]}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${color === 'cyan' ? 'bg-cyan-400' : color === 'neon' ? 'bg-green-400' : color === 'purple' ? 'bg-purple-400' : 'bg-orange-400'}`} />
      {name}
    </motion.div>
  )
}
