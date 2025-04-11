"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

export type Skill = {
  id: number
  name: string
  image: string
}

interface SkillCardProps {
  skill: Skill
  index: number
  mounted: boolean
}

export function SkillCard({ skill, index, mounted }: SkillCardProps) {
  return (
    <Card
      className={cn(
        "border shadow-sm transition-all duration-300 ease-in-out overflow-hidden",
        "hover:shadow-lg hover:translate-y-[-4px] hover:rotate-[1deg] hover:border-slate-300",
        "hover:bg-slate-50 dark:hover:bg-slate-900",
        mounted ? "opacity-100" : "opacity-0 translate-y-4",
      )}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <CardContent className="p-4 flex flex-col items-center group">
        <div className="relative h-32 w-32 mb-4 overflow-hidden rounded-md">
          <Image
            src={skill.image || "/placeholder.svg?height=200&width=200"}
            alt={skill.name}
            fill
            className="object-cover"
            priority
          />
          {/* Removed gradient overlay */}
        </div>
        <h3
          className="text-sm font-medium text-center transition-all duration-200 
                      group-hover:text-slate-900 dark:group-hover:text-white 
                      group-hover:font-semibold group-hover:scale-105"
        >
          {skill.name}
        </h3>
      </CardContent>
    </Card>
  )
}

