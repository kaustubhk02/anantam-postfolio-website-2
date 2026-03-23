'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import TechBadge from '@/components/ui/TechBadge'

const techCategories = [
  {
    label: 'Hardware',
    color: 'cyan' as const,
    items: ['Arduino', 'ESP32', 'MPU6050', 'BMP388', 'GPS Module', 'LoRa SX1278', 'SD Card', 'Servo Motor', 'Pyro Channel'],
  },
  {
    label: 'Software',
    color: 'neon' as const,
    items: ['C++', 'Python', 'Tkinter', 'PyQt5', 'Pandas', 'Matplotlib', 'PySerial'],
  },
  {
    label: 'Libraries & Protocols',
    color: 'purple' as const,
    items: ['Wire.h (I2C)', 'SPI.h', 'TinyGPS++', 'LoRa.h', 'SD.h', 'Servo.h', 'UART', 'I2C', 'SPI'],
  },
  {
    label: 'Concepts & Tools',
    color: 'orange' as const,
    items: ['Kalman Filter', 'PID Control', 'State Machine', 'Sensor Fusion', 'RF Link Budget', 'Data Logging'],
  },
]

export default function TechnologiesSection() {
  return (
    <SectionWrapper id="tech" label="Stack" title="Technologies" titleAccent="Used">
      <div className="space-y-12">
        {techCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-display text-lg font-bold text-white tracking-wide">{cat.label}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent" />
              <span className="font-mono text-xs text-slate-500">{cat.items.length} items</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {cat.items.map((item, i) => (
                <TechBadge
                  key={item}
                  name={item}
                  color={cat.color}
                  delay={catIdx * 0.05 + i * 0.04}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Architecture visual */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 glass-card rounded-2xl p-8 overflow-x-auto"
      >
        <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-8">System Architecture Overview</p>
        <div className="flex flex-col md:flex-row items-stretch gap-4 min-w-[600px]">
          {[
            { layer: 'Sensors', items: ['IMU', 'BMP388', 'GPS'], color: 'border-purple-400/40 text-purple-300' },
            { layer: 'MCU', items: ['ESP32 / Arduino', 'State Machine', 'Sensor Fusion'], color: 'border-cyan-400/40 text-cyan-300' },
            { layer: 'Storage', items: ['SD Card', 'CSV Logger', 'Flash'], color: 'border-orange-400/40 text-orange-300' },
            { layer: 'RF Link', items: ['LoRa TX', '433 MHz', 'Packet CRC'], color: 'border-yellow-400/40 text-yellow-300' },
            { layer: 'GCS', items: ['LoRa RX', 'Python GUI', 'Matplotlib'], color: 'border-[#39ff14]/40 text-[#39ff14]' },
          ].map((block, i, arr) => (
            <div key={block.layer} className="flex items-center gap-4 flex-1">
              <div className={`flex-1 border rounded-xl p-4 text-center ${block.color} bg-white/2`}>
                <div className="font-mono text-xs tracking-widest uppercase mb-3 opacity-60">{block.layer}</div>
                <div className="space-y-1.5">
                  {block.items.map(item => (
                    <div key={item} className="text-xs font-medium">{item}</div>
                  ))}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="text-cyan-400/40 font-mono text-lg flex-shrink-0">→</div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
