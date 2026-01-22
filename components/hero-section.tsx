"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Nathan Bailey
      </h1>
      <p className="text-base leading-relaxed text-muted-foreground">
  I am a <span className="text-foreground font-medium">Full Stack Engineer</span> with a passion for building
  scalable web systems and AI-driven applications. I graduated with a B.S. in Computer Science from
  Georgia State University, earning a 3.7 GPA and recognition on the President&apos;s List and Dean&apos;s List
  for academic excellence. My tech stack includes{" "}
  <span className="text-foreground font-medium">
    React, Next.js, Node.js, TypeScript, PostgreSQL, and Firebase
  </span>
  , and I&apos;ve built everything from real-time email platforms to browser-based IDEs and full-stack
  client applications.
  <br /><br />
  Currently, I work part-time at a legal tech firm while freelancing on Upwork, where I design and build
  end-to-end solutions for clients. I&apos;ve also worked as a Software Engineer Intern at Dark Alpha Capital
  and served as a Tech Fellow Manager at CodePath, mentoring the next generation of developers.
  I&apos;m especially focused on AI integration, system scalability, performance optimization, and
  continuously refining my UI/UX and component design skills. If you&apos;d like to collaborate, feel free to{" "}
  <a
    href="mailto:work.nbailey2004@gmail.com"
    className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
  >
    send me an email
  </a>.
</p>

    </motion.section>
  )
}
