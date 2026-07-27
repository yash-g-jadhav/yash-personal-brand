'use client'

import { motion, type Variants } from 'framer-motion'
import { Goal, Zap, Waves, Dumbbell, Camera, Book, Music, PenTool } from 'lucide-react'
import type { LucideIcon } from "lucide-react"

interface Hobby {
  label: string
  description: string
  icon: LucideIcon
}

const hobbies: Hobby[] = [
  {
    label: 'Football',
    description: 'The beautiful game. Strategy, teamwork, and the thrill of the moment.',
    icon: Goal
  },
  {
    label: 'Running',
    description: 'Solitude in motion. Where thoughts settle and clarity emerges.',
    icon: Zap
  },
  {
    label: 'Swimming',
    description: 'Complete immersion. A meditative escape from the digital world.',
    icon: Waves
  },
  {
    label: 'Lifting',
    description: 'Progressive overload applied to life. Strength builds character.',
    icon: Dumbbell
  },
  {
    label: 'Photography',
    description: 'Capturing light and moments. A different way to observe the world.',
    icon: Camera
  },
  {
    label: 'Books',
    description: 'The original internet. Wisdom from minds across centuries.',
    icon: Book
  },
  {
    label: 'Music',
    description: 'The universal language. A soundtrack to everything that matters.',
    icon: Music
  },
  {
    label: 'Sketching',
    description: 'Thinking with a pencil. Where ideas take their first visual form.',
    icon: PenTool
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
} satisfies Variants

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} satisfies Variants

const hoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -8,
  },
} satisfies Variants

export function BeyondTheScreen() {
  return (
    <section id="beyond" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            Beyond the Screen
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Life is more than code. These are the things that keep me grounded, curious, and human. They inform how I build and who I am.
          </p>
        </motion.div>

        {/* Grid of hobbies */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon
            
            return (
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
                  className="h-full"
                >
                  <div className="h-full p-6 sm:p-7 rounded-lg border border-border/40 hover:border-accent/50 bg-card/20 hover:bg-card/40 backdrop-blur-sm transition-all duration-300 flex flex-col items-start gap-4 group cursor-default">
                    {/* Icon badge */}
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 text-accent" />
                    </motion.div>

                    {/* Label */}
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {hobby.label}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {hobby.description}
                    </p>

                    {/* Subtle accent line on hover */}
                    <motion.div 
                      className="mt-auto w-8 h-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
