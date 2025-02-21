import About from "./components/About"
import Blog from "./components/Blog"
import Brands from "./components/Brands"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Stats from "./components/Stats"
import Steps from "./components/Steps"
import Testimonial from "./components/Testimonial"

function App() {

  return (
    <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
      <Navbar />

      <Hero />

      <Steps />

      <About />

      <Testimonial />

      <Brands />

      <Projects />

      <Stats />

      <Blog />

      <Contact />

      <div className="h-[3000px]"></div>
    </main>
  )
}

export default App
