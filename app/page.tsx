import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Team from './components/Team'
import Socials from './components/Socials'
import Contact from './components/Contact'
import Partners from './components/Partners'
import { Carousel } from './components/ui/carousel'
import Footer from './components/Footer'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Mission />
        <Projects />
        <Publications />
        <Team />
        <Socials />
        <Contact />
        <Partners />
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Research in Action</h2>
          <Carousel className="w-full" containerClassName="px-4">
            <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/research-shark-measurement-study.jpg"
                  alt="Shark measurement and data collection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/research-shark-habitat-monitoring.jpg"
                  alt="Shark habitat monitoring"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex-none w-full md:w-1/2 lg:w-1/3 p-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/research-data-collection-field.jpg"
                  alt="Field data collection"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <Footer />
      </main>
    </>
  )
}
