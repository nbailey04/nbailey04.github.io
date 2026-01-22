"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Dark Alpha Capital LLC",
    period: "August 2025 – December 2025",
    description: "Debug front-end and API issues, manage GitHub workflows and CI pipelines, improving deployment success rate by 25%.",
  },
  {
    title: "Tech Fellow Manager",
    company: "CodePath",
    period: "August 2025 – Present",
    description: "Mentor 10+ fellows in JavaScript, React, Node.js, and API development. Conduct workshops on debugging and cloud deployment strategies.",
  },
  {
    title: "AI Data Quality Specialist",
    company: "Data Annotation / Outlier.ai",
    period: "April 2025 – Present",
    description: "Design automated data validation pipelines, improving dataset accuracy for ML systems. Reduced QA cycle time by 15%.",
  },
]

export function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <h2 className="mb-2 text-lg font-semibold text-foreground">Experience</h2>
      <p className="mb-6 text-sm text-muted-foreground">
        From internships to technical mentorship, I&apos;ve gained hands-on experience building and shipping real products.
      </p>
      
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title + exp.company}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="border-l-2 border-border pl-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-medium text-foreground">{exp.title}</h3>
              <span className="text-xs text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <p className="mt-2 text-sm text-muted-foreground/80">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
