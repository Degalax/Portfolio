import Link from "next/link";
import { InteractiveHoverButton } from "@/components/educationpage/interactive-hover-button-right"
import { InteractiveHoverButtonLeft } from "@/components/educationpage/interactive-hover-button-left"

export default function ButtonBot() {
  return (
    <div className="flex items-center justify-center gap-10 mt-0">
      <Link href="/skills">
        <InteractiveHoverButtonLeft text="Skills" className="w-40 text-sm" />
      </Link>
      <Link href="/">
        <InteractiveHoverButton text="Home" className="w-40 text-sm" />
      </Link>
    </div>
  )
}