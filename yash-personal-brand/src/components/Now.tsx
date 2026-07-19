'use client'

import { motion } from 'framer-motion'
import { Zap, BookOpen, Lightbulb, Compass, Dumbbell, Quote, Code } from 'lucide-react'

interface Widget {
  id: string
  type: 'building' | 'learning' | 'reading' | 'thinking' | 'exploring' | 'fitness' | 'quote'
  title: string
  content: string
  icon: any
  size?: 'small' | 'medium' | 'large'
}

const widgets: Widget[] = [
  {
    id: '1',
    type: 'building',
    title: 'Currently Building',
    content: 'Flood Prediction System using ML and real-time data processing',
    icon: Code,
    size: 'medium'
  },
  {
    id: '2',
    type: 'learning',
    title: 'Currently Learning',
    content: 'Advanced system design patterns and distributed systems',
    icon: Zap,
    size: 'small'
  },
  {
    id: '3',
    type: 'reading',
    title: 'Reading',
    content: 'The Innovators by Walter Isaacson',
    icon: BookOpen,
    size: 'small'
  },
  {
    id: '4',
    type: 'thinking',
    title: 'Thinking About',
    content: 'How to build products that scale without losing the founder\'s vision',
    icon: Lightbulb,
    size: 'medium'
  },
  {
    id: '5',
    type: 'exploring',
    title: 'Exploring',
    content: 'AI agents and autonomous systems for real-world problem solving',
    icon: Compass,
    size: 'small'
  },
  {
    id: '6',
    type: 'fitness',
    title: 'Fitness Goal',
    content: '5K run in under 25 mins — currently at 27:30',
    icon: Dumbbell,
    size: 'small'
  },
  {
    id: '7',
    type: 'quote',
    title: 'Quote of the Month',
    content: '"The best way to predict the future is to invent it." — Alan Kay',
    icon: Quote,
    size: 'large'
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
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

const hoverVariants = {
  rest: { y: 0 },
  hover: { y: -4 },
}

export function Now() {
  return (
    <section id="now" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Operating System
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            My current mental landscape. This is what's running in the background — constantly updating as I explore, build, and learn.
          </p>
        </motion.div>

        {/* Dashboard grid - using CSS Grid for flexible widget layout */}
        <motion.div 
          className="grid gap-4 sm:gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gridAutoRows: 'auto',
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {widgets.map((widget) => {
            const Icon = widget.icon
            const isLarge = widget.size === 'large'
            
            return (
              <motion.div
                key={widget.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover="hover"
                className={isLarge ? 'sm:col-span-2' : ''}
              >
                <motion.div
                  variants={hoverVariants}
                  className="h-full"
                >
                  <div className="h-full p-6 sm:p-7 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-accent/40 transition-all duration-400 flex flex-col cursor-default group">
                    {/* Widget header with icon */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300"
                        whileHover={{ scale: 1.08 }}
                      >
                        <Icon className="w-5 h-5 text-accent" />
                      </motion.div>
                    </div>

                    {/* Widget content */}
                    <div className="flex-grow">
                      <h3 className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
                        {widget.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
                        {widget.content}
                      </p>
                    </div>

                    {/* Subtle bottom indicator line */}
                    <motion.div 
                      className="mt-4 h-px bg-gradient-to-r from-accent/20 via-accent/10 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{ originX: 0 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div 
          className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-xl border border-border/30 bg-secondary/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            System Status
          </p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            This dashboard updates frequently as priorities shift and new problems emerge. Last updated: always now.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
