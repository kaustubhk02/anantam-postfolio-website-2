'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ProjectImage from '@/components/ui/ProjectImage'
import { Cpu, Radio, HardDrive} from 'lucide-react'

interface SubsystemProps {
  id: string
  label: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  imageTitle: string
  imageCaption: string
  reverse?: boolean
  index: number
}

function Subsystem({ label, title, icon: Icon, features, imageTitle, imageCaption, reverse, index }: SubsystemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
    >
      {/* Text */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg border border-cyan-400/40 flex items-center justify-center bg-cyan-400/5">
            <Icon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <p className="font-mono text-xs text-cyan-400/60 tracking-widest uppercase">{label}</p>
            <h3 className="font-display text-xl font-bold text-white">{title}</h3>
          </div>
        </div>

        <ul className="space-y-3">
          {features.map((feat, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              <span className="text-slate-300 text-sm leading-relaxed">{feat}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-6 h-px bg-gradient-to-r from-cyan-400/20 to-transparent" />
        <p className="mt-4 font-mono text-xs text-slate-500 tracking-wider">
          SYS-{String(index + 1).padStart(2, '0')} / AVIONICS STACK
        </p>
      </div>

      {/* Image */}
      <ProjectImage
        title={imageTitle}
        caption={imageCaption}
        aspectRatio="video"
      />
    </motion.div>
  )
}

const subsystems = [
  {
    id: 'flight-computer',
    label: 'Subsystem 01',
    title: 'Flight Computer',
    icon: Cpu,
    features: [
      'IMU (MPU6050) for 6-axis orientation — accelerometer + gyroscope data fusion',
      'BMP388 barometric sensor for altitude measurement with ±0.5m precision',
      'GPS module (TinyGPS++) for position tracking and ground speed',
      'Arduino / ESP32 microcontroller as the central processing unit',
      'Apogee detection algorithm using altitude delta and acceleration threshold',
      'Automated parachute trigger via servo or pyro channel at detected apogee',
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6piS-3nEVwQh7exNr7VnhRkAY_hvLvYnrg&s",
    imageTitle: 'Flight Computer Assembly',
    imageCaption: 'Flight computer wiring with sensors interfaced to microcontroller — IMU, BMP388, and GPS modules connected via I2C/SPI bus.',
  },
  {
    id: 'telemetry',
    label: 'Subsystem 02',
    title: 'Telemetry System',
    icon: Radio,
    features: [
      'LoRa SX1278 module operating at 433 MHz for long-range RF communication',
      'Effective range of 1–2 km line-of-sight in open field conditions',
      'Real-time packet transmission: altitude, velocity, GPS, temperature, state',
      'Packet integrity via checksum validation on ground station receiver',
      'Configurable spreading factor for range/speed tradeoffs',
      'Bidirectional link supports command uplink from GCS',
    ],
    imageTitle: 'LoRa Telemetry Module',
    imageCaption: 'LoRa SX1278 module used for transmitting telemetry data to ground station — antenna tuned to 433 MHz band.',
    reverse: true,
  },
  {
    id: 'data-logging',
    label: 'Subsystem 03',
    title: 'Data Logging',
    icon: HardDrive,
    features: [
      'MicroSD card module interfaced via SPI protocol',
      'Flight data logged to CSV files at 10Hz sample rate',
      'Fields: timestamp, altitude, velocity, roll/pitch/yaw, GPS coords, state',
      'Atomic file writes with buffering to prevent data corruption on power loss',
      'Post-flight analysis using Pandas and Matplotlib for visualization',
      'Data accessible for trajectory reconstruction and apogee analysis',
    ],
    imageTitle: 'SD Card Data Logger',
    imageCaption: 'SD card module used for onboard data storage — logs sensor telemetry to CSV at 10Hz throughout the flight envelope.',
  },
  {
    id: 'recovery',
    label: 'Subsystem 04',
    title: 'Recovery System',
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6 2 4 8 4 12l8 10 8-10c0-4-2-10-8-10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M4 12h16" />
      </svg>
    ),
    features: [
      'Apogee detection via dual-criterion: altitude decline + near-zero vertical velocity',
      'Redundant detection: barometric + inertial confirmation before deployment',
      'Pyro-channel or servo-based ejection mechanism for drogue and main chutes',
      'Staged recovery: drogue at apogee, main chute at ~150m AGL',
      'Recovery state machine with explicit transition guards to prevent mis-fire',
      'Post-deployment telemetry continues to track descent trajectory',
    ],
    imageTitle: 'Recovery System',
    imageCaption: 'Parachute deployment mechanism triggered at apogee — pyro channel activates ejection charge, releasing drogue chute.',
    reverse: true,
  },
]

export default function SystemOverview() {
  return (
    <SectionWrapper id="system" label="Avionics Architecture" title="System" titleAccent="Overview">
      
      <div className="space-y-24">
        {subsystems.map((sys, i) => (
          <div key={sys.id}>
            <Subsystem {...sys} index={i} reverse={sys.reverse} />
            {i < subsystems.length - 1 && (
              <div className="section-divider mt-16" />
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
