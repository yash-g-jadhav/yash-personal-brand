import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { WhyIBuild } from '@/components/WhyIBuild'
import { BuiltThings } from '@/components/BuiltThings'
import { Ideas } from '@/components/Ideas'
import { OptimisingFor } from '@/components/OptimisingFor'
import { Now } from '@/components/Now'
import { BeyondTheScreen } from '@/components/BeyondTheScreen'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <WhyIBuild />
      <BuiltThings />
      <Ideas />
      <OptimisingFor />
      <Now/>
      <BeyondTheScreen />
      <Contact />
    </main>
  )
}
