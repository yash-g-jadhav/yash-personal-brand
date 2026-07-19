const optimizations = [
  {
    label: 'Efficiency',
    description: 'Building small, focused tools that do one thing exceptionally well.'
  },
  {
    label: 'User Experience',
    description: 'Every pixel, interaction, and word choice matters. Details compound into great products.'
  },
  {
    label: 'Speed',
    description: 'Fast loading, instant feedback, minimal friction. Respect for user time is fundamental.'
  },
  {
    label: 'Learning Velocity',
    description: 'Quick iteration cycles, aggressive testing, and sharing learnings with the community.'
  },
  {
    label: 'Sustainable Growth',
    description: 'Building with longevity in mind. Technical debt is real, and I value long-term stability.'
  },
  {
    label: 'Collaboration',
    description: 'Great things happen when smart people work together. Communication and transparency matter.'
  }
]

export function OptimisingFor() {
  return (
    <section id="optimizing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What I&apos;m Optimizing For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            These are the principles that guide my decisions when building products and companies.
          </p>
        </div>

        {/* Grid of optimization areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {optimizations.map((item, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-lg border border-border hover:border-accent/50 transition-colors group"
            >
              {/* Label with accent underline on hover */}
              <div className="mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.label}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
