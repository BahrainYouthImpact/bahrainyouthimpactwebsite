import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bahrain Youth Empowerment | Student-Led Organization",
  description:
    "Empowering Bahrain's next generation through student-led programs, leadership development, and community impact initiatives.",
    generator: 'v0.dev',
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon-16x16.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        url: '/apple-touch-icon.png'
      }
    ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
