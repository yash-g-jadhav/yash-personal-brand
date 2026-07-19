import { Zap, Brain, BookOpen, Compass, Target } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    category: 'Building',
    title: 'Flood Prediction System',
    description: 'I build products that address genuine pain points. Technology should make life better, not complicated.'
  },
  {
    icon: Brain,
    category: 'Learning',
    title: 'Learn Constantly',
    description: 'Building is the best way to learn. Every project teaches me something new about design, engineering, and myself.'
  },
  {
    icon: BookOpen,
    category: 'Learning',
    title: 'Create Impact',
    description: 'I believe in using technical skills to create positive change. Small wins compound into meaningful progress.'
  },
  {
    icon: Compass,
    category: 'Exploring',
    title: 'Explore New Ideas',
    description: 'I&apos;m always curious about emerging technologies and how they can be applied to solve real-world problems.'
  }
]

export function Now() {
  return (
    <section id="now" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What I&apos;m Doing Now?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A snapshot of what's on my mind and desk right now. This changes frequently as I dive deeper into different domains and uncover new problems worth solving.
          </p>
        </div>

        {/* Grid of reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center hover:bg-accent/15 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                <h4 className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide ">
                  {reason.category}
                </h4>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
