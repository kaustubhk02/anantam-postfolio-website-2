'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { Users, Award, Globe, Rocket } from 'lucide-react'

const highlights = [
  {
    icon: Rocket,
    title: 'Automation Engineer',
    description: '6+ months building and testing flight systems, telemetry, and recovery hardware at TARSR.',
  },
  // {
  //   icon: Globe,
  //   title: 'IN-SPACe Model Rocketry',
  //   description: 'Active participation in the Indian Space Association model rocketry initiative, pushing innovation boundaries.',
  // },
  // {
  //   icon: Award,
  //   title: 'CanSat Competition',
  //   description: 'Developed miniaturized satellite systems within a soda-can form factor — designing telemetry and recovery for CanSat.',
  // },
  {
    icon: Users,
    title: 'Club Collaboration',
    description: 'Collaborated with multiple rocketry and aerospace clubs, sharing knowledge on embedded systems and control algorithms.',
  },
]

export default function AboutSection() {
  return (
    <SectionWrapper id="about" label="Who We Are" title="Team TARSR &" titleAccent="My Role">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded border border-cyan-400/40 font-mono text-xs text-cyan-400 bg-cyan-400/5">
                TARSR
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              <span className="text-white font-semibold">Team for Advanced Rocketry and Space Research (TARSR)</span> is
              a passionate student-led aerospace club dedicated to designing, building, and launching
              high-performance model rockets with real-world embedded systems.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              From conceptualization to launch day, TARSR members work across every discipline —
              aerodynamics, avionics, propulsion, and recovery — building systems that mirror
              professional aerospace engineering practices.
            </p>

            <p className="text-slate-400 leading-relaxed">
              As an <span className="text-cyan-400 font-semibold">Automation Engineer</span> for 6+ months,
              I've been responsible for the full avionics stack: flight computer firmware, LoRa
              telemetry pipelines, sensor fusion, PID-driven fin controllers, and the ground
              control station software used during live launches.
            </p>
          </motion.div>
        </div>

        {/* Right: Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-5 group hover:border-cyan-400/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg border border-cyan-400/30 flex items-center justify-center mb-3 group-hover:bg-cyan-400/10 group-hover:border-cyan-400 transition-all">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="font-display text-sm font-bold text-white mb-2 tracking-wide">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
