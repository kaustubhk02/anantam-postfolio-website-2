'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SystemOverview from '@/components/sections/SystemOverview'
import FlightLogic from '@/components/sections/FlightLogic'
import GCSSection from '@/components/sections/GCSSection'
import TechnologiesSection from '@/components/sections/TechnologiesSection'
import CoreConcepts from '@/components/sections/CoreConcepts'
import ActiveFinController from '@/components/sections/ActiveFinController'
import GallerySection from '@/components/sections/GallerySection'
import FinalImpact from '@/components/sections/FinalImpact'
import Navbar from '@/components/layout/Navbar'
import StarField from '@/components/ui/StarField'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050d1a] overflow-hidden">
      <StarField />
      <div className="cyber-grid fixed inset-0 z-0 pointer-events-none opacity-40" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SystemOverview />
      <FlightLogic />
      <GCSSection />
      <TechnologiesSection />
      <CoreConcepts />
      <ActiveFinController />
      <GallerySection />
      <FinalImpact />
    </main>
  )
}
