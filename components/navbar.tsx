"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        
        {/* Branding: Only Logo Icon */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/byi-logo.png" 
            alt="BYI Logo" 
            width={60} 
            height={60} 
            className="object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-8">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-[#CE1126] text-zinc-600">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#CE1126] text-zinc-600">
              About Us
            </Link>
            <Link href="/impact" className="transition-colors hover:text-[#CE1126] text-zinc-600 font-semibold">
              Impact
            </Link>
            <Link href="/programs" className="transition-colors hover:text-[#CE1126] text-zinc-600">
              Programs
            </Link>
            <Link href="/contact" className="transition-colors hover:text-[#CE1126] text-zinc-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild className="border-[#CE1126] text-[#CE1126] hover:bg-[#CE1126] hover:text-white">
              <Link href="https://press.bahrainyouthimpact.com" target="_blank" rel="noreferrer">
                Press
              </Link>
            </Button>
            <Button asChild className="bg-[#CE1126] text-white hover:bg-[#CE1126]/90">
              <Link href="https://podcast.bahrainyouthimpact.com" target="_blank" rel="noreferrer">
                Podcast
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-zinc-900">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l">
              <div className="flex flex-col h-full mt-8">
                <nav className="flex flex-col space-y-6 text-lg font-semibold">
                  <Link href="/" className="transition-colors hover:text-[#CE1126] text-zinc-900">
                    Home
                  </Link>
                  <Link href="/about" className="transition-colors hover:text-[#CE1126] text-zinc-900">
                    About Us
                  </Link>
                  <Link href="/impact" className="transition-colors hover:text-[#CE1126] text-zinc-900">
                    Impact
                  </Link>
                  <Link href="/programs" className="transition-colors hover:text-[#CE1126] text-zinc-900">
                    Programs
                  </Link>
                  <Link href="/contact" className="transition-colors hover:text-[#CE1126] text-zinc-900">
                    Contact
                  </Link>
                </nav>
                <div className="flex flex-col space-y-4 pt-8 mt-8 border-t border-zinc-200">
                  <Button variant="outline" asChild className="w-full border-[#CE1126] text-[#CE1126] hover:bg-[#CE1126] hover:text-white justify-center h-12 text-md">
                    <Link href="https://press.bahrainyouthimpact.com" target="_blank" rel="noreferrer">
                      Press
                    </Link>
                  </Button>
                  <Button asChild className="w-full bg-[#CE1126] text-white hover:bg-[#CE1126]/90 justify-center h-12 text-md">
                    <Link href="https://podcast.bahrainyouthimpact.com" target="_blank" rel="noreferrer">
                      Podcast
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
      </div>
    </header>
  )
}
