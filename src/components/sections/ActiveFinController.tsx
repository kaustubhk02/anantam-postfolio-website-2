'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import ProjectImage from '@/components/ui/ProjectImage'

export default function ActiveFinController() {
  return (
    <SectionWrapper id="fin-controller" label="Control Systems" title="Active Fin" titleAccent="Controller">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Explanation */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-slate-400 leading-relaxed mb-8"
          >
            The active fin controller is one of the most sophisticated subsystems — it provides
            real-time attitude correction during the powered and coasting flight phases, using a
            closed-loop PID algorithm to keep the rocket on its intended trajectory.
          </motion.p>

          {/* PID explanation */}
          <div className="space-y-4 mb-8">
            {[
              {
                term: 'P — Proportional',
                color: 'text-cyan-400',
                border: 'border-cyan-400/30',
                bg: 'bg-cyan-400/5',
                desc: 'Generates a correction proportional to the current angle error. If the rocket tilts 5°, the fins deflect proportionally. Fast response but can overshoot.',
              },
              {
                term: 'I — Integral',
                color: 'text-[#39ff14]',
                border: 'border-[#39ff14]/30',
                bg: 'bg-[#39ff14]/5',
                desc: 'Accumulates past errors over time to eliminate steady-state offset. Ensures the rocket doesn\'t permanently drift from the vertical axis.',
              },
              {
                term: 'D — Derivative',
                color: 'text-purple-400',
                border: 'border-purple-400/30',
                bg: 'bg-purple-400/5',
                desc: 'Predicts future error by looking at the rate of change. Acts as a damper — reduces overshoot and oscillation, improving stability.',
              },
            ].map((item) => (
              <motion.div
                key={item.term}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`rounded-xl p-4 border ${item.border} ${item.bg}`}
              >
                <h4 className={`font-display text-sm font-bold mb-2 ${item.color}`}>{item.term}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Control loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-5"
          >
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">Control Loop</p>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {['IMU (Roll/Pitch)', '→', 'Error Calc', '→', 'PID Algorithm', '→', 'Servo Output', '→', 'Fin Deflection', '→', 'Attitude Change', '→'].map(
                (item, i) => (
                  <span
                    key={i}
                    className={
                      item === '→'
                        ? 'text-cyan-400/40'
                        : 'px-2 py-1 rounded border border-cyan-400/20 text-slate-300 bg-cyan-400/5'
                    }
                  >
                    {item}
                  </span>
                )
              )}
              <span className="px-2 py-1 rounded border border-cyan-400/20 text-cyan-400 bg-cyan-400/10">
                Back to IMU ↺
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: Image + specs */}
        <div className="space-y-6">
          <ProjectImage
            title="Active Fin Controller"
            caption="Conceptual model of active fin control system — four servo-actuated fins adjust in real-time based on IMU feedback through the PID controller."
            aspectRatio="video"
          />

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-5 grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Control Rate', value: '100 Hz' },
              { label: 'Fin Deflection', value: '±15°' },
              { label: 'Sensor', value: 'MPU6050' },
              { label: 'Actuator', value: 'MG995 Servo' },
              { label: 'Kp / Ki / Kd', value: 'Tuned empirically' },
              { label: 'Algorithm', value: 'Discrete PID' },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-mono text-xs text-slate-500 uppercase tracking-wider">{label}</p>
                <p className="text-cyan-300 text-sm font-semibold mt-1">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
