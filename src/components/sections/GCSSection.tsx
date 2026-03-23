'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ProjectImage from '@/components/ui/ProjectImage'
import { Monitor, BarChart2, Database, Usb } from 'lucide-react'

const gcsFeatures = [
  {
    icon: Monitor,
    title: 'GUI Interface',
    description: 'Built with Tkinter / PyQt5 — real-time dashboard displaying altitude, velocity, GPS, and flight state with color-coded indicators.',
  },
  {
    icon: BarChart2,
    title: 'Live Graphing',
    description: 'Matplotlib embedded charts update in real-time — altitude vs time, velocity profile, and roll/pitch/yaw plots rendered at 5Hz.',
  },
  {
    icon: Database,
    title: 'Data Pipeline',
    description: 'Incoming serial packets parsed and stored in Pandas DataFrames. Post-flight CSV export and automated analysis scripts.',
  },
  {
    icon: Usb,
    title: 'Serial Communication',
    description: 'PySerial handles UART communication with the LoRa receiver module. Configurable baud rate and COM port auto-detection.',
  },
]

export default function GCSSection() {
  return (
    <SectionWrapper id="gcs" label="Ground Control" title="Ground Control" titleAccent="Station">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Features */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-400 leading-relaxed mb-10"
          >
            The Ground Control Station (GCS) is the nerve center of every launch — receiving,
            decoding, visualizing, and logging all telemetry from the rocket in real-time.
            Built entirely in Python, it integrates a GUI dashboard with live data analytics.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gcsFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 group hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg border border-cyan-400/30 flex items-center justify-center mb-3 group-hover:bg-cyan-400/10 transition-colors">
                  <feat.icon className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-2 tracking-wide">{feat.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 glass-card rounded-xl p-5"
          >
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">GCS Tech Stack</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'GUI Framework', value: 'Tkinter / PyQt5' },
                { label: 'Data Library', value: 'Pandas' },
                { label: 'Visualization', value: 'Matplotlib' },
                { label: 'Serial Comms', value: 'PySerial' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col">
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">{label}</span>
                  <span className="text-cyan-300 text-sm font-semibold mt-1">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="space-y-6">
          <ProjectImage
            title="GCS Dashboard"
            caption="Ground station software showing real-time telemetry visualization — altitude graphs, GPS map overlay, and flight state panel."
            aspectRatio="video"
          />

          {/* Simulated data display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-5 font-mono text-xs"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#39ff14] animate-pulse" />
              <span className="text-[#39ff14] tracking-widest">LIVE TELEMETRY FEED</span>
            </div>
            <div className="space-y-1.5 text-slate-400">
              {[
                { key: 'ALT', value: '312.4 m', color: 'text-cyan-400' },
                { key: 'VEL', value: '+28.3 m/s', color: 'text-[#39ff14]' },
                { key: 'ROLL', value: '2.1°', color: 'text-yellow-400' },
                { key: 'PITCH', value: '-0.8°', color: 'text-yellow-400' },
                { key: 'BARO', value: '973.2 hPa', color: 'text-slate-300' },
                { key: 'STATE', value: 'COASTING', color: 'text-orange-400' },
                { key: 'RSSI', value: '-67 dBm', color: 'text-purple-400' },
              ].map(({ key, value, color }) => (
                <div key={key} className="flex justify-between">
                  <span className="text-slate-500">{key}:</span>
                  <span className={color}>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-700 text-slate-600">
              PKT #2847 · 433.125 MHz · SF9 · 10:42:17.381
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
