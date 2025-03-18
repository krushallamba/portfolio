const Footer = () => {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="w-full border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Krushal Lamba. All rights reserved.</p>
          </div>
  
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  