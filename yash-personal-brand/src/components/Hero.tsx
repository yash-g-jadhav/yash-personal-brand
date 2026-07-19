'use client'

import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const headlineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  hover: {
    y: -2,
    transition: { duration: 0.3 }
  }
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      {/* Animated background gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent rounded-full blur-3xl opacity-10"
          animate={{
            y: [0, 40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-40 w-64 h-64 bg-accent rounded-full blur-3xl opacity-5"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading with gradient text */}
        <motion.div className="space-y-6 sm:space-y-8">
          <motion.h1
            variants={headlineVariants}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[1.1] text-balance"
          >
            Building systems, exploring ideas, and{' '}
            <span className="text-accent">creating things that matter</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance"
          >
            I'm a curious builder exploring technology, entrepreneurship, and systems thinking through projects, experiments, and continuous learning.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
        >
          <motion.a
            href="#work"
            variants={buttonVariants}
            whileHover="hover"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
          >
            Explore What I&apos;ve Built
          </motion.a>
          <motion.a
            href="#ideas"
            variants={buttonVariants}
            whileHover="hover"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-border text-foreground font-medium hover:bg-secondary/50 transition-all duration-300"
          >
            Read My Thoughts
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 sm:pt-12"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className="flex justify-center"
          >
            <ArrowDown className="w-6 h-6 text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
