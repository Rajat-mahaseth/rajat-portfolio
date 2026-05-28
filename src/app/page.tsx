import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {

  return (

    <main className="bg-[#050816] text-white h-screen overflow-hidden">

      <ParticleBackground />

      <Navbar />

      {/* HOME */}

      <section
        id="home"
        className="h-screen overflow-hidden"
      >
        <Hero />
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="h-screen overflow-hidden"
      >
        <About />
      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="h-screen overflow-hidden"
      >
        <Projects />
      </section>

      {/* SKILLS */}

      <section
        id="skills"
        className="h-screen overflow-hidden"
      >
        <Skills />
      </section>

      {/* EXPERIENCE */}

      <section
        id="experience"
        className="h-screen overflow-hidden"
      >
        <Experience />
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="h-screen overflow-hidden"
      >
        <Contact />
      </section>

    </main>

  )
}