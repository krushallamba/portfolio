import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <section id="about" className="py-16 scroll-mt-20">
            <AboutSection />
          </section>

          <section id="skills" className="py-16 scroll-mt-20">
            <SkillsSection />
          </section>

          <section id="projects" className="py-16 scroll-mt-20">
            <ProjectsSection />
          </section>

          <section id="contact" className="py-16 scroll-mt-20">
            <ContactSection />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

