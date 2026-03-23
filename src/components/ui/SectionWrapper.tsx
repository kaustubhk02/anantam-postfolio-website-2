'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  label?: string
  title?: string
  titleAccent?: string
}

export default function SectionWrapper({
  id,
  children,
  className = '',
  label,
  title,
  titleAccent,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative z-10 py-24 px-6 md:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(label || title) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {label && (
              <p className="text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase mb-3 flex items-center gap-3">
                <span className="w-8 h-px bg-cyan-400 inline-block" />
                {label}
                <span className="w-8 h-px bg-cyan-400 inline-block" />
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {title}
                {titleAccent && (
                  <span className="text-cyan-400 neon-text"> {titleAccent}</span>
                )}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
      <div className="section-divider mt-24" />
    </section>
  )
}
