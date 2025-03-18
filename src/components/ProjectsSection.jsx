import { ExternalLink, Github } from "lucide-react"
import Card from "./ui/Card"
import Button from "./ui/Button"

const ProjectsSection = () => {
  const projects = [
    {
      title: "SwiftCart ",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality and admin panel.",
      image: "/swiftcart-high-resolution-logo-transparent (1).png",
      tags: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
      liveLink: "https://swiftcart-frontend-fpmw.onrender.com/",
      githubLink: "https://github.com/krushallamba/swiftcart",
    },
    {
      title: "EstateEase",
      description: "A real-estate app that enables users to explore and list properties seamlessly",
      image: "/Screenshot 2025-03-18 160855.png",
      tags: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
      liveLink: "https://estateease-13z6.onrender.com/",
      githubLink: "https://github.com/krushallamba/EstateEase",
    },
    {
      title: "QuickBite",
      description: "A web application created to simplify food ordering for users by providing an intuitive platform to browse, select, and order meals from a diverse menu",
      image: "/quickbite.png",
      tags: ["React", "MongoDB", "Express", "Node.js", "BootStrap"],
      liveLink: "https://quickbite-7.onrender.com/",
      githubLink: "https://github.com/krushallamba/QuickBite",
    },
    {
      title: "Notes",
      description: "A React app for efficient note management, including features like creating, editing, and deleting personal notes",
      image: "/notes.png",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      liveLink: "https://endearing-crumble-688fd2.netlify.app/",
      githubLink: "https://github.com/krushallamba/notes-app",
    },
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents different skills and challenges I've
          tackled.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border border-border hover:border-primary/50 transition-all">
            <div className="relative h-48 w-full">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground mt-2">{project.description}</p>

              <div className="flex flex-wrap gap-2 my-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="outline">
          <a
            href="https://github.com/krushallamba"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            See More on GitHub
          </a>
        </Button>
      </div>
    </div>
  )
}

export default ProjectsSection

