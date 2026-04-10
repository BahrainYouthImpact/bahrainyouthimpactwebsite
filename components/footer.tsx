import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-screen-2xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 flex items-center space-x-2">
              <Image src="/byi-logo.png" alt="Bahrain Youth Impact Logo" width={80} height={80} className="object-contain" />
              <span className="text-xl font-bold">Bahrain Youth Impact</span>
            </Link>
            <p className="text-muted-foreground mt-4 max-w-xs">
              Bridging the gap between potential and reality. A student-led organization where ambition meets action.
            </p>
            <p className="text-muted-foreground mt-4 font-semibold text-[#CE1126]">
              bahrainyouthimpact@gmail.com
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#CE1126]">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-[#CE1126] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#CE1126] transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-[#CE1126] transition-colors">Programs</Link></li>
              <li><Link href="/contact" className="hover:text-[#CE1126] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-[#CE1126]">Media</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="https://press.bahrainyouthimpact.com" target="_blank" rel="noreferrer" className="hover:text-[#CE1126] transition-colors">Press</Link></li>
              <li><Link href="https://podcast.bahrainyouthimpact.com" target="_blank" rel="noreferrer" className="hover:text-[#CE1126] transition-colors">Podcast</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bahrain Youth Impact (BYI). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
