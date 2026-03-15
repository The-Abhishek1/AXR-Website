'use client'

import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Architecture } from '@/components/sections/Architecture'
import { TechnologyStack } from '@/components/sections/TechnologyStack'
import { SecurityLayers } from '@/components/sections/SecurityLayers'
import { Metrics } from '@/components/sections/Metrics'
import { Waitlist } from '@/components/sections/Waitlist'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Architecture />
      <TechnologyStack />
      <SecurityLayers />
      <Metrics />
      <Waitlist />
      <CTA />
    </>
  )
}