import NavBar from "@/components"
import AboutMe from "@/components/AboutMe"
import ContactMe from "@/components/ContactMe"
import Hero from "@/components/Hero"
import Resume from "@/components/Resume"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <div className='bg-white min-h-full'>
      <NavBar />
      <Hero/>
      <AboutMe />
      <Skills />
      <Resume />
      <ContactMe />
    </div>
  )
}
