import { Code, Palette, Database, Globe, Lightbulb, Layers } from "lucide-react"
import Card from "./ui/Card"

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: <Database className="h-6 w-6 text-primary" />,
      technologies: ["Node.js", "Express", "MongoDB", "Firebase", "RESTful APIs"],
    },
    {
      category: "Tools & Deployment",
      icon: <Globe className="h-6 w-6 text-primary" />,
      technologies: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Render"],
    },
    {
      category: "Soft Skills",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      technologies: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
    }
  ]

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills & Tech Stack</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life. I'm constantly learning and expanding
          my skill set.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="border border-border hover:border-primary/50 transition-colors">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SkillsSection

