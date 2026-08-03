import { ArrowRight, Calendar } from 'lucide-react'

interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  readTime: string
}

const blogPosts: BlogPost[] = [
  {
    title: '*Articles Coming Soon!*',
    excerpt: 'I\'m currently working on writing insightful articles about building, learning, and creating meaningful technology. Stay tuned for updates!',
    date: 'Aug 22, 2026',
    category: 'Strategy',
    slug: 'sustainable-growth',
    readTime: '8 min'
  }
]

export function Ideas() {
  return (
    <section id="ideas" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-4 text-balance">
            Ideas & Insights
          </h2>
          <p className="text-lg text-muted-foreground">
            Thoughts on building, learning, and creating meaningful technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:bg-secondary/30 cursor-pointer"
            >
              <div className="flex flex-col gap-3">
                {/* Category and Read Time */}
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-2.5 py-1 rounded-full bg-secondary text-accent font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-accent font-medium pt-2">
                  Read Article
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-lg text-accent font-medium hover:bg-accent/10 transition-colors">
            View All Articles
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
