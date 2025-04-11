import Link from "next/link"
import { InteractiveHoverButton } from "@/components/educationpage/interactive-hover-button-right"

export function FooterPage() {
  return (
    <div className="flex justify-center items-center w-full mt-8 mb-0 gap-10">
      <Link href="/education">
        <InteractiveHoverButton text="Education" className="w-40 text-sm" />
      </Link>
    </div>
  )
}