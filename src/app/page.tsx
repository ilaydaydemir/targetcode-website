import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { SelfBuilding } from '@/components/SelfBuilding'
import { Pricing } from '@/components/Pricing'
import { EarlyAccess } from '@/components/EarlyAccess'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <SelfBuilding />
      <Pricing />
      <EarlyAccess />
      <Footer />
    </>
  )
}
