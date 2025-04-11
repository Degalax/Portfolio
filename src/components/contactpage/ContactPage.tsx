"use client"

import type React from "react"

import { useState } from "react"
import { Check, Copy, Mail } from "lucide-react"
import { toast } from "@/components/hooks/use-toast"

interface ContactItemProps {
  icon: React.ReactNode
  title: string
  description: string
  url: string
}

function ContactItem({ icon, title, description, url }: ContactItemProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    toast({
      title: "Copied to clipboard",
      description: `${title} link has been copied`,
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div
      className="flex items-center justify-between rounded-lg border border-orange-200/30 bg-orange-50/10 p-6 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:border-orange-300/40"
      onClick={copyToClipboard}
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-400/20 text-orange-100 transition-colors duration-300 group-hover:bg-orange-400/30">
          {icon}
        </div>
        <div className="text-left">
          <h3 className="text-lg font-medium text-orange-50">{title}</h3>
          <p className="text-sm text-orange-200/80">{description}</p>
        </div>
      </div>
      <button
        className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-orange-300/30 bg-orange-400/10 text-orange-100 hover:bg-orange-400/20 hover:text-orange-50 transition-colors"
        aria-label={`Copy ${title} link`}
      >
        {copied ? <Check size={20} /> : <Copy size={20} />}
      </button>
    </div>
  )
}

export default function ContactCTA() {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "naili26.lmr@gmail.com",
      url: "naili26.lmr@gmail.com",
    },
    {
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>
      ),
      title: "LinkedIn",
      description: "Connectez vous avec moi sur LinkedIn",
      url: "https://www.linkedin.com/in/ilian-laamara-b23610329/",
    },
  ]

  return (
    <section className="w-full py-10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3 mb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-orange-50">Contact me</h2>
            <p className="text-lg text-orange-200/90">
              Click any option to copy the contact information to your clipboard.
            </p>
          </div>
          <div className="w-full max-w-xl space-y-6">
            {contactItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}