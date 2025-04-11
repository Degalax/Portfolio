import Link from "next/link";
import { InteractiveHoverButton } from "@/components/educationpage/interactive-hover-button-right"
import { InteractiveHoverButtonLeft } from "@/components/educationpage/interactive-hover-button-left"

export default function ButtonBot() {
  return (
    <div className="flex items-center justify-center gap-10 mt-0">
      <Link href="/experience">
        <InteractiveHoverButtonLeft text="Experience" className="w-40 text-sm" />
      </Link>
      <Link href="/contact">
        <InteractiveHoverButton text="Contact" className="w-40 text-sm" />
      </Link>
    </div>
  )
}