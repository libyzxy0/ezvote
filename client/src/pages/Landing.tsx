import { Hero } from '@/sections/Hero'
import { Candidates } from '@/sections/Candidates'
import { Stats } from '@/sections/Stats'
import { Guide } from '@/sections/Guide'
import { FAQ } from '@/sections/Faq'
import { Footer } from '@/sections/Footer'

export default function Landing() {
  return (
    <>
    <Hero />
    <Candidates />
    <Stats />
    <Guide />
    <FAQ />
    <Footer />
    </>
  )
}