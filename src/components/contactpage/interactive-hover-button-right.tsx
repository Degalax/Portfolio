import React from "react"
import { ArrowRight } from "lucide-react"

interface BlueButtonProps {
  text: string
  className?: string
  onClick?: () => void
}

export function BlueButton({ text, className, onClick }: BlueButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-32 cursor-pointer overflow-hidden rounded-full border border-blue-400/30 bg-slate-900/50 p-2 text-center font-semibold ${className || ""}`}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-blue-300">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span className="text-white">{text}</span>
        <ArrowRight className="text-white" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-blue-600 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-indigo-700"></div>
    </button>
  )
}