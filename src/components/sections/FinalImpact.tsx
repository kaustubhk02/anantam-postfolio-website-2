'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { FileText, Mail, Rocket, ArrowRight } from 'lucide-react'

export default function FinalImpact() {
  return (
    <SectionWrapper id="contact" label="Closing Thoughts" title="Final" titleAccent="Impact">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Decorative quote marks */}
          <span className="absolute -top-8 -left-4 font-display text-8xl text-cyan-400/10 leading-none select-none">"</span>
          <span className="absolute -bottom-8 -right-4 font-display text-8xl text-cyan-400/10 leading-none select-none">"</span>

          <blockquote className="glass-card gradient-border rounded-2xl p-10 md:p-14 relative">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-400/3 blur-[80px]" />
            </div>
            <p className="relative text-xl md:text-2xl lg:text-3xl text-slate-200 leading-relaxed font-light tracking-wide">
              This journey helped me understand how{' '}
              <span className="text-cyan-400 font-semibold">embedded systems</span>,{' '}
              <span className="text-[#39ff14] font-semibold">control systems</span>, and{' '}
              <span className="text-purple-400 font-semibold">aerodynamics</span>{' '}
              combine to build real-world aerospace solutions.
            </p>
          </blockquote>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: '6+', label: 'Months at TARSR', color: 'text-cyan-400' },
            { value: '4', label: 'Core Subsystems', color: 'text-[#39ff14]' },
            { value: '11', label: 'Flight States', color: 'text-purple-400' },
            { value: '∞', label: 'Learning Ahead', color: 'text-orange-400' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
              <div className={`font-display text-3xl font-black ${stat.color} mb-2`}>{stat.value}</div>
              <div className="font-mono text-xs text-slate-500 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-cyan-400/10 border-2 border-cyan-400 rounded-lg text-cyan-400 font-display text-sm font-bold tracking-wider uppercase hover:bg-cyan-400 hover:text-[#050d1a] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            <FileText className="w-4 h-4" />
            View Resume
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="mailto:contact@example.com"
            className="group flex items-center gap-3 px-8 py-4 border border-[#39ff14]/50 rounded-lg text-[#39ff14] font-display text-sm font-bold tracking-wider uppercase hover:bg-[#39ff14]/10 hover:border-[#39ff14] transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)]"
          >
            <Mail className="w-4 h-4" />
            Contact
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 pt-8 border-t border-cyan-400/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 font-mono text-xs"
      >
        <div className="flex items-center gap-2">
          <Rocket className="w-3 h-3 text-cyan-400/40" />
          <span>Anantam Rocketry Journey · TARSR</span>
        </div>
        <span>Built with Next.js · Tailwind · Framer Motion</span>
      </motion.footer>
    </SectionWrapper>
  )
}
