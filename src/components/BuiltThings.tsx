'use client'

import { ExternalLink, GitBranch } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'

const projects = [
  {
    title: 'Project North Star',
    challenge: 'Built a personal website with Next.js, Tailwind CSS, and Framer Motion featuring my portfolio, blog, and projects.',
    approach: 'Created a hub for my personal brand that helps visitors explore my work and connect with me.',
    outcome: 'The website serves as a central hub for my personal brand, allowing visitors to explore my work, read my thoughts, and connect with me. It has received positive feedback from peers and potential collaborators.',
    learning: 'A personal website is more than a portfolio—it\'s a way to tell your story and reflect your personality through design and development.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'React'],
    link: '#',
    github: 'https://github.com/yash-g-jadhav/yash-personal-brand'
  },
  {
    title: 'Retinal-IQ',
    challenge: 'AI-assisted diabetic retinopathy screening and progression-risk assessment.',
    approach: 'Combined EfficientNet-B0 retinal classification with Random Forest clinical risk prediction, exposed through FastAPI and presented through a Next.js dashboard.',
    outcome: '~81% validation F1 for DR classification and 76% test accuracy/F1 for risk prediction, with automated clinical recommendations and PDF reporting.',
    learning: 'End-to-end ML deployment, FastAPI, Next.js integration, model serving, interpretability, and production debugging.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'scikit-learn', 'CNN'],
    link: '#',
    github: 'https://github.com/yash-g-jadhav/Retinal-IQ'
  },
  {
    title: 'Inventory Management System',
    challenge: 'Build a database-driven system to manage products, inventory, warehouses, and orders with data integrity.',
    approach: 'Created a normalized MySQL database, implemented CRUD operations in Python, and developed a Tkinter-based GUI.',
    outcome: 'Delivered a desktop app with secure login, inventory and order management, low-stock alerts, and MySQL integration.',
    learning: 'Strengthened skills in database design, GUI development, and user-focused system design.',
    tags: ['Python', 'MySQL', 'Tkinter', 'ERDPlus'],
    link: '#',
    github: 'https://github.com/yash-g-jadhav/Inventory-Management-System'
  },
  {
    title: 'Flood Prediction and Warning System',
    challenge: 'Build a lightweight system for hyperlocal flood risk assessment using real-time weather data with offline reliability.',
    approach: 'Developed a Flask application with rule-based flood risk scoring, live radar maps, reverse geocoding, Telegram alerts, and synthetic data fallback.',
    outcome: 'Delivered a prototype providing real-time flood risk analysis, interactive rainfall visualization, and automated alerts.',
    learning: 'Improved skills in API integration, geospatial visualization, risk modeling, fault-tolerant system design, and full-stack web development.',
    tags: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'Telegram API', 'OpenWeatherMap API'],
    link: '#',
    github: 'https://github.com/yash-g-jadhav/Flood-Prediction-and-Warning-System'
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
} satisfies Variants

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
} satisfies Variants

const cardHoverVariants = {
  rest: { y: 0 },
  hover: { y: -8 },
} satisfies Variants

const borderVariants = {
  rest: { borderColor: 'rgb(42, 42, 42)' },
  hover: { borderColor: 'rgb(255, 122, 0)' },
} satisfies Variants

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
          <p className="text-base sm:text-lg text-muted-foreground max-w-6xl leading-relaxed">
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
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
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
