"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Education", href: "/education" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" }
]


export function getPageNavigation() {
  const pathname = usePathname() || "/"
  const currentIndex = navLinks.findIndex(link => link.href === pathname)
  
  const prevPage = currentIndex > 0 ? navLinks[currentIndex - 1] : null
  const nextPage = currentIndex < navLinks.length - 1 ? navLinks[currentIndex + 1] : null
  
  return { prevPage, nextPage }
}

export default function NavHeader() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-center pt-4">
      <div className="flex space-x-6 md:space-x-10 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className={`
                text-sm md:text-base font-medium transition-colors hover:text-white
                ${isActive 
                  ? "text-white border-b-2 border-white" 
                  : "text-white/70"
                }
              `}
            >
              {link.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}