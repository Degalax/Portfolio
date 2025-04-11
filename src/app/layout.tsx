import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ilian Laamara - Portfolio",
  description: "Portfolio de Ilian Laamara",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-black`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}