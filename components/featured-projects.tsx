"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Dark Alpha Email Client",
    description: "Real-time email automation platform with AI-assisted content generation",
    tech: "React.js, Next.js, TypeScript, Supabase, Node.js",
    status: "Completed",
    github: "https://github.com/nbailey04/Dark-Alpha-Email-Client",
  },
  {
    title: "MineByte",
    description: "Real-time browser IDE with code execution APIs and persistent sessions",
    tech: "React.js, Node.js, Firebase, JavaScript",
    status: "Completed",
    github: "https://github.com/nbailey04/MineByte",
  },
  {
    title: "Price Searcher",
    description: "Data-driven product search platform with multi-API integration",
    tech: "React.js, Flask, Python, REST API",
    status: "Completed",
    github: "https://github.com/nbailey04/Price-Searcher",
  },
]

export function FeaturedProjects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-16"
    >
      <h2 className="mb-2 text-lg font-semibold text-foreground">Featured Projects</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        From email automation to browser IDEs, I&apos;ve built full-stack applications that solve real problems. 
        Below are some of the projects I&apos;ve worked on.
      </p>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg border border-border bg-card p-4 transition-all hover:border-foreground/20 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground group-hover:underline">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/70">
                    {project.tech}
                  </p>
                </div>
                <span className="ml-4 shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                  {project.status}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      <Link
        href="https://github.com/nbailey04?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        All Projects
        <ArrowUpRight className="h-3 w-3" />
      </Link>
    </motion.section>
  )
}
