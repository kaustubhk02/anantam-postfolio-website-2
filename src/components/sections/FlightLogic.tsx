'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import TimelineStep from '@/components/ui/TimelineStep'
import ProjectImage from '@/components/ui/ProjectImage'

const flightSteps = [
  {
    title: 'Power ON',
    description: 'System initializes — microcontroller boots, peripherals powered, watchdog timer started.',
    status: 'complete' as const,
  },
  {
    title: 'Sensor Check',
    description: 'IMU, BMP388, GPS, and SD card undergo self-test. Any failure triggers error LED and halts sequence.',
    status: 'complete' as const,
  },
  {
    title: 'Telemetry Start',
    description: 'LoRa radio initialized. Ground link established, handshake packet confirmed by GCS.',
    status: 'complete' as const,
  },
  {
    title: 'Data Collection',
    description: 'Continuous 10Hz logging begins. Baseline altitude and pressure captured for reference calibration.',
    status: 'complete' as const,
  },
  {
    title: 'Launch Detection',
    description: 'Accelerometer threshold (>2g) crossed — state machine transitions from IDLE to POWERED_FLIGHT.',
    status: 'active' as const,
  },
  {
    title: 'Altitude Monitoring',
    description: 'BMP388 provides pressure-altitude. Kalman filter fuses barometric and IMU data for smoothed estimate.',
    status: 'active' as const,
  },
  {
    title: 'Apogee Detection',
    description: 'Altitude delta drops below threshold AND vertical velocity near zero — dual-criterion confirmation.',
    status: 'active' as const,
  },
  {
    title: 'Ejection System Activation',
    description: 'Pyro channel or servo signal fired. Ejection charge ignites, separating nose cone and releasing drogue chute.',
    status: 'complete' as const,
  },
  {
    title: 'Parachute Deployment',
    description: 'Drogue deployed at apogee for stable descent. Main chute deployed at ~150m AGL for soft landing.',
    status: 'complete' as const,
  },
  {
    title: 'Landing Detection',
    description: 'Altitude stable near zero, near-zero acceleration for 3+ seconds — LANDED state confirmed.',
    status: 'complete' as const,
  },
  {
    title: 'Mission Complete',
    description: 'Telemetry beacon activates for recovery. Final data flush to SD card. System enters low-power mode.',
    status: 'complete' as const,
  },
]

export default function FlightLogic() {
  return (
    <SectionWrapper id="flight-logic" label="State Machine" title="Flight Logic" titleAccent="Flow">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Timeline */}
        <div>
          <div className="mb-8">
            <p className="text-slate-400 text-sm leading-relaxed">
              The flight computer runs a deterministic state machine with explicit transitions
              guarded by sensor thresholds. Each phase is confirmed before advancing — ensuring
              no premature ejection or missed apogee detection.
            </p>
          </div>

          <div>
            {flightSteps.map((step, i) => (
              <TimelineStep
                key={step.title}
                step={i + 1}
                title={step.title}
                description={step.description}
                status={step.status}
                isLast={i === flightSteps.length - 1}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>

        {/* Diagram image + state machine visual */}
        <div className="space-y-8 md:sticky md:top-24">
          <ProjectImage
            title="Flight Logic Diagram"
            caption="Flight computer logic from launch to recovery phase — state transitions with sensor-threshold guards."
            aspectRatio="tall"
          />

          {/* State machine summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-5"
          >
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">State Summary</p>
            <div className="space-y-2">
              {[
                { state: 'IDLE', color: 'bg-slate-500' },
                { state: 'ARMED', color: 'bg-yellow-500' },
                { state: 'POWERED_FLIGHT', color: 'bg-orange-500' },
                { state: 'COASTING', color: 'bg-blue-400' },
                { state: 'APOGEE', color: 'bg-cyan-400' },
                { state: 'DESCENT', color: 'bg-purple-400' },
                { state: 'LANDED', color: 'bg-[#39ff14]' },
              ].map(({ state, color }) => (
                <div key={state} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${color}`} />
                  <span className="font-mono text-xs text-slate-300">{state}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
