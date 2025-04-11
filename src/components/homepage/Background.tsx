"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Particles } from "@/components/ui/particles"

export function ParticlesDemo() {
  const { theme } = useTheme()
  const [color, setColor] = useState("#808080") // Gris par défaut

  useEffect(() => {
    setColor(theme === "dark" ? "#a0a0a0" : "#4a4a4a") // Gris clair en mode sombre, gris foncé en mode clair
  }, [theme])

  return (
    <div className="relative flex h-[10px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Particles
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}