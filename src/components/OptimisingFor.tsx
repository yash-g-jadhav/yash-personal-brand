'use client'

import { motion } from 'framer-motion'

const pursuits = [
  {
    label: 'Becoming a Better Builder',
    description: 'Every project is a step toward mastering the craft. I want to write better code, design cleaner systems, and lead more effectively.'
  },
  {
    label: 'Learning Publicly',
    description: 'Sharing what I learn accelerates my growth and helps others. Writing, speaking, and building in public keeps me accountable.'
  },
  {
    label: 'Thinking in Systems',
    description: 'Understanding how complex systems work—from technology to organizations to ecosystems. Seeing patterns is how great decisions get made.'
  },
  {
    label: 'Building Meaningful Products',
    description: 'Not everything needs to scale. I want to build things that solve real problems for real people and create lasting impact.'
  },
  {
    label: 'Running My First Marathon',
    description: 'Physical endurance mirrors mental resilience. Training teaches discipline, consistency, and the power of incremental progress.'
  },
  {
    label: 'Staying Curious',
    description: 'The moment I stop asking questions is the moment I stop growing. Curiosity is the compass that guides me toward new frontiers.'
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
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const hoverVariants = {
  rest: { y: 0 },
  hover: { y: -6 },
}

export function OptimisingFor() {
  return (
    <section id="optimizing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What I&apos;m Optimizing For
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Long-term pursuits that define who I want to become. These aren&apos;t goals to check off—they&apos;re directions I&apos;m moving toward.
          </p>
        </motion.div>

        {/* Grid of pursuits */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pursuits.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                variants={hoverVariants}
                initial="rest"
                whileHover="hover"
                className="h-full p-6 sm:p-8 rounded-xl border border-border/50 hover:border-accent/40 bg-card/30 hover:bg-card/50 backdrop-blur-sm transition-all duration-400 flex flex-col group cursor-default"
              >
                <div className="h-full p-6 sm:p-8 rounded-xl border border-border/50 hover:border-accent/40 bg-card/30 hover:bg-card/50 backdrop-blur-sm transition-all duration-400 flex flex-col group cursor-default">
                  {/* Label with improved typography hierarchy */}
                  <div className="mb-4 pb-4 border-b border-border/30">
                    <motion.h3 
                      className="font-heading text-lg sm:text-xl font-semibold text-foreground leading-snug"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.label}
                    </motion.h3>
                  </div>

                  {/* Description with better spacing */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Subtle accent indicator on hover */}
                  <motion.div 
                    className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <span className="text-xs font-medium text-accent uppercase tracking-wide">In Progress</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
