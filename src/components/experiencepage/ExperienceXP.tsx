"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badgeXP"
import { Button } from "@/components/ui/buttonXP"
import { Card, CardContent } from "@/components/ui/cardXP"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

// Sample experience data - replace with your own
const experiences = [
  {
    id: 1,
    company: "Tribunal Judiciaire de Lille",
    role: "Stagiaire",
    period: "Mai 2025 - Juillet 2025",
    description:
      "Lors de mon stage au Tribunal Judiciaire, j'ai dû récupérer depuis l’application pénale CASSIOPEE une liste de dossiers classés sans suite et automatiser la connexion à l’applicatif web IMPRIFIT",
    skills: ["Python"],
    url: "",
  },
  {
    id: 2,
    company: "La Pharmacie du Bourg Lomme",
    role: "Stagiaire",
    period: "Juin 2022 - Juillet 2022",
    description:
      "Lors de mon stage en pharmacie, j'ai pu apprendre à préparer des commandes ainsi qu'à les livrer. Je me suis aussi occupé du rangement dans les rayons (facing). Enfin, j'ai géré la comptabilité.",
    skills: ["Gestion", "Travail d'équipe", "Comptabilité"],
    url: "",
  },
  {
    id: 3,
    company: "Cabinet du Docteur Louise Mollet",
    role: "Stagiaire",
    period: "Décembre 2020 - Janvier 2021",
    description:
      "Lors de mon stage d'observation dans un cabinet de dentiste, j'ai pu assister à différentes tâches telles que le détartrage, la dévitalisation d'une dent ou encore le remplacement d'une dent.",
    skills: ["Soif d'apprendre", "Savoir Faire", "Médecine"],
    url: "",
  },
  
]

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-3 bg-gradient-to-b from-background to-background/50">
      <div className="space-y-4">
        {experiences.map((exp) => (
          <Card
            key={exp.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-primary/10 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md hover:bg-white/40 dark:hover:bg-gray-900/40 cursor-pointer"
            onClick={() => toggleExpand(exp.id)}
          >
            <CardContent className="p-0">
              <div className="p-3 sm:p-4 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-50 z-0"></div>
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-sm sm:text-base">{exp.role}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center">
                        {exp.company}
                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex ml-1 text-primary hover:text-primary/80"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-3 w-3" />
                            <span className="sr-only">Visit {exp.company}</span>
                          </a>
                        )}
                      </span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="shrink-0 h-7 w-7 p-0 rounded-full bg-background/50 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-200 border border-primary/10"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleExpand(exp.id)
                    }}
                    aria-label={expandedId === exp.id ? "Collapse details" : "Expand details"}
                  >
                    {expandedId === exp.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    expandedId === exp.id ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="font-normal text-xs px-2 py-0 bg-primary/10 backdrop-blur-sm hover:bg-primary/20 text-primary transition-colors duration-200 border border-primary/5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

