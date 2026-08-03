import { Lightbulb, Zap, Target } from 'lucide-react'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Solve Real Problems',
    description: 'I build products that address genuine pain points. Technology should make life better, not complicated.'
  },
  {
    icon: Zap,
    title: 'Learn Constantly',
    description: 'Building is the best way to learn. Every project teaches me something new about design, engineering, and myself.'
  },
  {
    icon: Target,
    title: 'Create Impact',
    description: 'I believe in using technical skills to create positive change. Small wins compound into meaningful progress.'
  }
]

export function WhyIBuild() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why I Build
          </h2>
          <p className="text-lg text-muted-foreground max-w-6xl">
            My approach to building is rooted in curiosity, continuous learning, and a genuine desire to create value.
          </p>
        </div>

        {/* Grid of reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="space-y-4 p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
