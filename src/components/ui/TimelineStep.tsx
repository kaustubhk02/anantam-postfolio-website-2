'use client'

import { motion } from 'framer-motion'

interface TimelineStepProps {
  step: number
  title: string
  description: string
  status?: 'active' | 'complete' | 'pending'
  isLast?: boolean
  delay?: number
}

export default function TimelineStep({
  step,
  title,
  description,
  status = 'complete',
  isLast = false,
  delay = 0,
}: TimelineStepProps) {
  const statusColor = {
    active: 'border-neon-green bg-[#39ff1420] text-[#39ff14]',
    complete: 'border-cyan-400 bg-cyan-400/10 text-cyan-400',
    pending: 'border-slate-600 bg-slate-800/50 text-slate-400',
  }

  const dotColor = {
    active: 'bg-[#39ff14] shadow-[0_0_12px_#39ff14]',
    complete: 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]',
    pending: 'bg-slate-600',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="flex gap-6 group"
    >
      {/* Left: line + dot */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono text-sm font-bold flex-shrink-0 z-10 ${statusColor[status]}`}>
          {String(step).padStart(2, '0')}
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-2 timeline-line min-h-[40px]" />
        )}
      </div>

      {/* Right: content */}
      <div className={`pb-8 flex-1 ${isLast ? '' : ''}`}>
        <div className={`glass-card rounded-xl p-4 border transition-all duration-300 group-hover:border-cyan-400/40 ${statusColor[status]}`}>
          <div className="flex items-center gap-3 mb-1">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dotColor[status]}`} />
            <h4 className="font-display text-sm font-semibold text-white tracking-wide">{title}</h4>
          </div>
          <p className="text-slate-400 text-sm ml-5 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
