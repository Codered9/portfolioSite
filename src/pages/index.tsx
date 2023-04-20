import NavBar from "@/components"
import AboutMe from "@/components/AboutMe"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"


export default function Home() {
  return (
    <div className='bg-white min-h-full'>
      <NavBar />
      <Hero/>
      <AboutMe />
      <Skills />
    </div>
  )
}
