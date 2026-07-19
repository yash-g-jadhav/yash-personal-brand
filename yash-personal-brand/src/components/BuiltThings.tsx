import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'AI Task Manager',
    description: 'Smart task prioritization powered by LLMs. Built with Next.js and Claude API. Helps teams focus on what matters most.',
    tags: ['Next.js', 'AI/ML', 'TypeScript', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'Live metrics platform for e-commerce businesses. Built with WebSockets and React for instant insights.',
    tags: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#'
  },
  {
    title: 'Open-source CLI Tool',
    description: 'Community-loved developer tool with 5K+ GitHub stars. Designed for seamless developer experience.',
    tags: ['TypeScript', 'Node.js', 'CLI', 'Open Source'],
    link: '#',
    github: '#'
  },
  {
    title: 'Founding Member of StartupX',
    description: 'Co-founded a B2B SaaS company. Led product development and grew the user base to 100+ enterprise customers.',
    tags: ['Leadership', 'Product', 'Fundraising'],
    link: '#',
    github: '#'
  }
]

export function BuiltThings() {
  return (
    <section id="built" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Things I&apos;ve Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects I&apos;m proud of. Each one taught me something valuable about building, shipping, and iterating.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground flex-1">
                  {project.title}
                </h3>
                <div className="flex gap-3 ml-4 opacity-60 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.link}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="Visit project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label="View on GitHub"
                  >
                    <GitBranch className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
