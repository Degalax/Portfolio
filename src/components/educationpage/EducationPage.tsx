"use client"

import React from "react"
import { motion } from "framer-motion"

interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}

export function Education() {
  const educationItems: EducationItem[] = [
    {
      degree: "Master's Degree",
      institution: "ENIGMA-School",
      period: "2027 - 2029",
      description: "Master of Science in Computer Science with a focus on Network systems & Cloud or Backend development."
    },
    {
      degree: "Bachelor's Degree",
      institution: "ENIGMA-School",
      period: "2024 - 2027",
      description: "Bachelor of Science in Computer Science with a focus on Software Engineering and Cybersecurity."
    },
    {
      degree: "High School",
      institution: "Saint Paul's School",
      period: "2021 - 2024",
      description: "High School Diploma with a focus on Science and Mathematics."
    }
  ]

  return (
    <section className="py-2 -mt-12" id="education">
      <div className="max-w-3xl mx-auto px-4">
        <div className="space-y-4">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#C7CEE8]/40 to-[#C7CEE8]/25 border border-border/50 p-4 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm font-medium text-[#d3d8fe]">{item.institution}</p>
                <p className="text-xs text-gray-300">{item.period}</p>
              </div>
              <p className="mt-2 text-sm text-gray-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}