'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'
import GalleryGrid from '@/components/ui/GalleryGrid'

const galleryItems = [
  {
    id: 1,
    title: 'Flight Computer Assembly',
    caption: 'IMU, BMP388, LoRa, and GPS modules wired to ESP32 on custom PCB — fully assembled flight stack ready for integration.',
  },
  {
    id: 2,
    title: 'Telemetry Testing',
    caption: 'Range test of LoRa SX1278 link — verifying packet loss, RSSI levels, and data integrity at 500m field distance.',
  },
  {
    id: 3,
    title: 'Team Collaboration',
    caption: 'Joint session with partner rocketry club — discussing avionics integration and shared recovery system design.',
  },
  {
    id: 4,
    title: 'Hardware Integration',
    caption: 'Full avionics bay integration into rocket airframe — cable routing, vibration isolation, and fit-check before sealing.',
  },
  {
    id: 5,
    title: 'GCS Setup at Launch Site',
    caption: 'Ground control station deployed at T-30 min — laptop, LoRa receiver, and antenna mast positioned for line-of-sight.',
  },
  {
    id: 6,
    title: 'IN-SPACe Competition',
    caption: 'Team at IN-SPACe Model Rocketry event — rocket on pad, GCS live, team in position for launch sequence.',
  },
  {
    id: 7,
    title: 'CanSat Integration',
    caption: 'CanSat payload with telemetry board and parachute deployment mechanism — fully assembled within 66mm form factor.',
  },
  {
    id: 8,
    title: 'Post-Flight Data Analysis',
    caption: 'Flight data plotted in Matplotlib — altitude, velocity, and roll angle overlaid for performance evaluation.',
  },
  {
    id: 9,
    title: 'Active Fin Prototype',
    caption: 'Active fin mechanism test fixture — four servo-actuated fins mounted on 3D-printed frame for PID tuning.',
  },
]

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" label="Project Gallery" title="Gallery &" titleAccent="Highlights">
      <GalleryGrid items={galleryItems} />
    </SectionWrapper>
  )
}
