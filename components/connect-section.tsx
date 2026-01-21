"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const links = [
  {
    name: "GitHub",
    href: "https://github.com/nathanbailey",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nathanbailey",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:work.nbailey2004@gmail.com",
    icon: Mail,
  },
]

export function ConnectSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2 className="mb-2 text-lg font-semibold text-foreground">Connect</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        Connect with me on GitHub, check out my LinkedIn profile, or email me directly at{" "}
        <a 
          href="mailto:work.nbailey2004@gmail.com"
          className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
        >
          work.nbailey2004@gmail.com
        </a>
      </p>
      
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.name !== "Email" ? "_blank" : undefined}
            rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-secondary"
          >
            <link.icon className="h-4 w-4" />
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className="mt-12 border-t border-border pt-6">
        <p className="text-xs text-muted-foreground">
          Based in Atlanta, Georgia • Available for opportunities
        </p>
      </div>
    </motion.section>
  )
}
