'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Rocket, Satellite, Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden z-10"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#39ff14]/3 blur-[100px]" />
      </div>

      {/* Animated orbit ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-[600px] h-[600px] rounded-full border border-cyan-400/8"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[400px] h-[400px] rounded-full border border-[#39ff14]/8"
        />
        {/* Orbiting dot */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px]"
          style={{ transformOrigin: 'center center' }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Rocket className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-[0.4em] uppercase">
            TARSR · Automation Engineer · 6+ Months
          </span>
          <Satellite className="w-4 h-4 text-cyan-400" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-6"
        >
          <span className="block">ANANTAM</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-[#39ff14] neon-text">
            ROCKETRY
          </span>
          <span className="block">JOURNEY</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building{' '}
          <span className="text-cyan-400">Flight Computers</span>,{' '}
          <span className="text-cyan-400">Telemetry Systems</span>, and{' '}
          <span className="text-[#39ff14]">Recovery Mechanisms</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="#system"
            className="group flex items-center gap-3 px-8 py-4 bg-cyan-400/10 border-2 border-cyan-400 rounded-lg text-cyan-400 font-display text-sm font-bold tracking-wider uppercase hover:bg-cyan-400 hover:text-navy-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            style={{ '--navy-900': '#050d1a' } as React.CSSProperties}
          >
            <Zap className="w-4 h-4 group-hover:animate-bounce" />
            Explore System
          </a>
          <a
            href="#gallery"
            className="flex items-center gap-3 px-8 py-4 border border-[#39ff14]/50 rounded-lg text-[#39ff14] font-display text-sm font-bold tracking-wider uppercase hover:bg-[#39ff14]/10 hover:border-[#39ff14] transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]"
          >
            <Rocket className="w-4 h-4" />
            View Work
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: '6+', label: 'Months Active' },
            { value: 'LoRa', label: 'Long Range' },
            { value: 'PID', label: 'Fin Control' },
            { value: '2.4GHz', label: 'Telemetry' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl font-black text-cyan-400 neon-text">{stat.value}</div>
              <div className="font-mono text-xs text-slate-500 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-cyan-400/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
