

import { useState, useEffect } from "react"
import { Menu, X, FileText, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import Button from "./ui/Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const resumeLink = "https://drive.google.com/file/d/1auINaGv7-YxMax_zQSqqgHhxD36yJnye/view?usp=drive_link"

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background shadow-md `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-primary">
              KL
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About Me
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </a>

            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-background z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <Button
          variant="ghost"
          size="icon"
          onClick={closeMenu}
          className="absolute top-4 right-4"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="flex flex-col h-full pt-20 px-4 space-y-6 text-center bg-background">
          <a href="#about" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
            About Me
          </a>
          <a href="#skills" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
            Skills
          </a>
          <a href="#projects" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
            Projects
          </a>
          <a href="#contact" onClick={closeMenu} className="text-lg font-medium py-2 hover:text-primary">
            Contact
          </a>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar

