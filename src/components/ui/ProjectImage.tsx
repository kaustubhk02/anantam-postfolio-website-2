'use client'

import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

interface ProjectImageProps {
  src?: string
  title: string
  caption: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall'
}

const aspectMap = {
  square: 'aspect-square',
  video: 'aspect-video',
  wide: 'aspect-[16/9]',
  tall: 'aspect-[3/4]',
}

export default function ProjectImage({
  src,
  title,
  caption,
  className = '',
  aspectRatio = 'video',
}: ProjectImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`group ${className}`}
    >
      <div className={`relative ${aspectMap[aspectRatio]} rounded-xl overflow-hidden glass-card gradient-border`}>
        {/* Scan line */}
        <div className="scan-line opacity-60" />

        {/* Placeholder image area */}
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900 relative">
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            {/* Corner brackets */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-400 opacity-70" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-400 opacity-70" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-cyan-400 opacity-70" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-400 opacity-70" />

            {/* Center icon */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-cyan-400/40 flex items-center justify-center bg-cyan-400/5">
                <Camera className="w-7 h-7 text-cyan-400/60" />
              </div>
              <p className="text-cyan-400/50 font-mono text-xs tracking-widest uppercase">
                {title}
              </p>
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Caption */}
      <div className="mt-3 px-1">
        <p className="text-cyan-400 font-mono text-xs tracking-wide uppercase mb-1">{title}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{caption}</p>
      </div>
    </motion.div>
  )
}
