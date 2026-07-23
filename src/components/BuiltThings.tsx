'use client'

import { ExternalLink, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Task Manager',
    challenge: 'Teams were drowning in tasks without clear priorities, struggling to focus on high-impact work.',
    approach: 'Built an intelligent system using LLMs to analyze tasks, context, and team capacity to auto-prioritize.',
    outcome: 'Reduced decision fatigue by 60% and helped teams complete 40% more high-priority tasks.',
    learning: 'Understanding user workflows matters more than raw AI capability. Simplicity wins.',
    tags: ['Next.js', 'AI/ML', 'Claude API'],
    link: '#',
    github: '#'
  },
  {
    title: 'Real-time Analytics Dashboard',
    challenge: 'E-commerce teams needed instant insights into sales metrics but were refreshing dashboards manually.',
    approach: 'Created a WebSocket-powered platform with real-time updates and intelligent alerting for anomalies.',
    outcome: 'Enabled teams to catch issues 85% faster and make data-driven decisions in real-time.',
    learning: 'Real-time data is only valuable if acted upon immediately. Speed and clarity are interdependent.',
    tags: ['React', 'WebSockets', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#'
  },
  {
    title: 'Open-source CLI Tool',
    challenge: 'Developers faced friction in their build workflows, losing hours to repetitive configuration tasks.',
    approach: 'Built an intuitive CLI that abstracted complexity while giving power users full control.',
    outcome: 'Grew to 5K+ GitHub stars, adopted by thousands of developers shipping faster.',
    learning: 'Great developer tools are about reducing cognitive load, not adding features. Every command matters.',
    tags: ['TypeScript', 'Node.js', 'CLI'],
    link: '#',
    github: '#'
  },
  {
    title: 'Founding Member of StartupX',
    challenge: 'The market needed a solution for enterprise workflows, but existing tools were bloated and slow.',
    approach: 'Led product strategy focusing on simplicity, speed, and deep integration with existing tools.',
    outcome: 'Grew user base to 100+ enterprise customers with strong retention rates.',
    learning: 'Building products is 10% idea, 90% execution and knowing your customer deeply.',
    tags: ['Leadership', 'Product', 'B2B SaaS'],
    link: '#',
    github: '#'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const cardHoverVariants = {
  rest: { y: 0 },
  hover: { y: -8 },
}

const borderVariants = {
  rest: { borderColor: 'rgb(42, 42, 42)' },
  hover: { borderColor: 'rgb(255, 122, 0)' },
}

export function BuiltThings() {
  return (
    <section id="built" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Things I&apos;ve Built
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A selection of projects I&apos;m proud of. Each one told a unique story about building, shipping, and learning from real users.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              initial="rest"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="h-full"
              >
                <motion.div
                  variants={borderVariants}
                  initial="rest"
                  whileHover="hover"
                  className="h-full p-6 sm:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 flex flex-col"
                >
                  {/* Project title and icons */}
                  <div className="flex items-start justify-between mb-6 pb-6 border-b border-border/50">
                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground flex-1 pr-4">
                      {project.title}
                    </h3>
                    <motion.div 
                      className="flex gap-2 flex-shrink-0"
                      initial={{ opacity: 0.4 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={project.link}
                        className="p-2 text-muted-foreground hover:text-[#FF7A00] transition-colors duration-300 hover:bg-[#FF7A00]/10 rounded-lg"
                        aria-label="Visit project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        className="p-2 text-muted-foreground hover:text-[#FF7A00] transition-colors duration-300 hover:bg-[#FF7A00]/10 rounded-lg"
                        aria-label="View on GitHub"
                      >
                        <GitBranch className="w-5 h-5" />
                      </a>
                    </motion.div>
                  </div>

                  {/* Case study content */}
                  <div className="space-y-5 flex-grow">
                    {/* Challenge */}
                    <div>
                      <p className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wide mb-2">Challenge</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <p className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wide mb-2">Approach</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    {/* Outcome */}
                    <div>
                      <p className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wide mb-2">Outcome</p>
                      <p className="text-sm text-foreground font-medium leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    {/* Key Learning */}
                    <div>
                      <p className="text-xs font-semibold text-[#FF7A00] uppercase tracking-wide mb-2">Key Learning</p>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        {project.learning}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/20 hover:border-[#FF7A00]/40"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
