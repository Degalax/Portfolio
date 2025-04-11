"use client"

import { useEffect, useState } from "react"
import { SkillCard, type Skill } from "@/components/ui/skillCard"

const skills: Skill[] = [
  {
    id: 1,
    name: "Github",
    image: "/github-logo.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Python",
    image: "/Python-logo.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Unreal Engine",
    image: "/UE5-logo.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "React",
    image: "/React-logo.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "C",
    image: "/C-logo.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Cisco",
    image: "/Cisco-logo.svg?height=200&width=200",
  },
]

export function SkillsGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  
  const firstRow = skills.slice(0, 3)
  const secondRow = skills.slice(3, 6)

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {firstRow.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} mounted={mounted} />
        ))}
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {secondRow.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index + 3} mounted={mounted} />
        ))}
      </div>
    </div>
  )
}