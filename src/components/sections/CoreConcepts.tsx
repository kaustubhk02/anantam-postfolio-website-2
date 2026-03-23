'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { Cpu, Wifi, Activity, Filter, Wind } from 'lucide-react'

const concepts = [
  {
    icon: Cpu,
    title: 'Embedded Systems',
    short: 'Bare-metal & RTOS',
    description:
      'Programming microcontrollers at register level — configuring timers, interrupts, DMA, and peripheral buses. Writing deterministic firmware for time-critical flight operations where milliseconds matter.',
    tags: ['Real-time', 'Interrupt-driven', 'Low-power'],
  },
  {
    icon: Wifi,
    title: 'Communication Protocols',
    short: 'I2C · SPI · UART',
    description:
      'I2C for sensor communication (IMU, BMP388), SPI for high-speed SD card and LoRa interfaces, UART for GPS and debug serial. Understanding clock polarity, addressing, and bus arbitration.',
    tags: ['I2C', 'SPI', 'UART', 'LoRa RF'],
  },
  {
    icon: Activity,
    title: 'Control Systems',
    short: 'PID Controller',
    description:
      'Implementing closed-loop Proportional-Integral-Derivative control for active fin stabilization. Tuning Kp, Ki, Kd gains through iterative testing. Understanding steady-state error, overshoot, and settling time.',
    tags: ['PID Tuning', 'Closed-loop', 'Stability'],
  },
  {
    icon: Filter,
    title: 'Kalman Filter',
    short: 'Sensor Fusion',
    description:
      'State estimation algorithm that fuses noisy barometric altitude with IMU acceleration to produce smooth, accurate altitude and velocity estimates. Handles sensor drift and noise covariance.',
    tags: ['State Estimation', 'Noise Reduction', 'Fusion'],
  },
  {
    icon: Wind,
    title: 'Aerodynamics',
    short: 'Stability & Drag',
    description:
      'Understanding center of pressure vs. center of gravity for passive stability. Fin sizing and placement for weathercock stability. Drag coefficient estimation and its impact on apogee altitude.',
    tags: ['CP/CG Ratio', 'Fin Design', 'Drag Model'],
  },
]

export default function CoreConcepts() {
  return (
    <SectionWrapper id="concepts" label="Knowledge Areas" title="Core" titleAccent="Concepts">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {concepts.map((concept, i) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="glass-card gradient-border rounded-2xl p-6 group cursor-default transition-all duration-300 hover:shadow-[0_8px_40px_rgba(34,211,238,0.12)]"
          >
            {/* Icon + number */}
            <div className="flex items-start justify-between mb-5">
              <div className="w-12 h-12 rounded-xl border border-cyan-400/30 flex items-center justify-center bg-cyan-400/5 group-hover:bg-cyan-400/15 group-hover:border-cyan-400/60 transition-all duration-300">
                <concept.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-mono text-xs text-slate-600 group-hover:text-cyan-400/40 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-lg font-bold text-white mb-1 tracking-wide group-hover:text-cyan-300 transition-colors">
              {concept.title}
            </h3>
            <p className="font-mono text-xs text-cyan-400/60 tracking-wider uppercase mb-4">
              {concept.short}
            </p>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {concept.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {concept.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md border border-cyan-400/20 text-cyan-400/70 font-mono text-xs bg-cyan-400/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
