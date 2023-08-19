import Navbar from '@/components/Navbar'
import Timeline from '@/components/Timeline'
import { useUser } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="h-screen bg-bg-dark">
      <Navbar />
      <Timeline />
    </main>
  )
}
