import { Mail } from 'lucide-react'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { Sen } from 'next/font/google'

const socialLinks = [
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:yashjadhav06@outlook.com',
    color: 'hover:text-accent'
  },
  {
    label: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com/yashjadhav06_',
    color: 'hover:text-accent'
  },
  {
    label: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/yash-g-jadhav',
    color: 'hover:text-accent'
  },
  {
    label: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/yashjadhav06',
    color: 'hover:text-accent'
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Section header */}
        <div className="space-y-6">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in meeting curious builders, discussing ideas, and exploring opportunities to collaborate. 
            Reach out if you want to chat about anything.
          </p>
        </div>

        {/* Email CTA */}
        <div className="space-y-6">
          <a
            href="mailto:yashjadhav06@outlook.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Send me an Email
          </a>
          <p className="text-muted-foreground">
            Or connect with me on social media below
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6 sm:gap-8">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={`w-12 h-12 rounded-lg border border-border flex items-center justify-center text-muted-foreground transition-colors ${link.color}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Currently interested in: AI, startups, developer tools, and building in public.
          </p>
        </div>
      </div>
    </section>
  )
}
