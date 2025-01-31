import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Team from './components/Team'
import Socials from './components/Socials'
import Contact from './components/Contact'
import Partners from './components/Partners'
import Footer from './components/Footer'

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
        <Footer />
      </main>
    </>
  )
}
