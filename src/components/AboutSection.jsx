import Button from "./ui/Button"

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm <span className="text-primary">Krushal Lamba</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-6">Full Stack Developer</h2>
        <p className="text-muted-foreground mb-6">
          I'm a passionate Full-Stack Developer specializing in the MERN stack with hands-on experience in building dynamic and responsive web applications.
          With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to build seamless
          digital experiences that solve real-world problems.
        </p>
        <p className="text-muted-foreground mb-8">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
          enjoying outdoor activities to maintain a healthy work-life balance.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#projects">Projects</a>
          </Button>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
          <img src="https://img.freepik.com/free-vector/smiling-man-with-glasses_1308-174409.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default AboutSection

