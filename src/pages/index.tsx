import NavBar from "@/components"
import AboutMe from "@/components/AboutMe"
import ContactMe from "@/components/ContactMe"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <div className='bg-white min-h-full'>
      <NavBar />
      <Hero/>
      <AboutMe />
      <Skills />
      <Projects />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
  )
}
