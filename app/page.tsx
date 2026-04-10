import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Task 1: The Sovereign Hero */}
      <section className="relative w-full py-24 md:py-32 lg:py-48 bg-white flex items-center justify-center min-h-[80vh]">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#CE1126] uppercase">
            LEAD THE CHANGE.<br />BE THE IMPACT.
          </h1>
          <p className="max-w-[800px] text-lg md:text-2xl text-muted-foreground font-medium">
            Bridging the gap between potential and reality. A student-led organization where ambition meets action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-[#CE1126] hover:bg-[#CE1126]/90 text-white text-lg px-8 h-14 rounded-full font-bold">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-[#CE1126] text-[#CE1126] hover:bg-[#CE1126]/10 text-lg px-8 h-14 rounded-full font-bold">
                Our Manifesto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Task 3: About Us (The Manifesto) */}
      <section className="w-full py-24 bg-zinc-50 border-y">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#CE1126]">The Manifesto</h2>
            <p className="max-w-[900px] text-lg text-muted-foreground">
              We are a collective of thinkers, doers, and change-makers who believe that the best way to serve Bahrain is to empower its youngest citizens today. We map every project against <strong>Bahrain's Economic Vision 2030</strong> and the <strong>UN Sustainable Development Goals (SDGs)</strong>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-[#CE1126]/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-foreground">Youth-First Sovereignty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We believe youth should lead youth. Our initiatives are designed by the demographic they serve to ensure they are genuine and effective.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-[#CE1126]/10 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-foreground">Integrity in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We value results over rhetoric. Our impact is measured by the change we create, not just the words we speak. Boots on the ground.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-[#CE1126]/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-foreground">Inclusive Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We welcome every student, regardless of their background or field of study, believing that diversity of thought is what sparks true innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-[#CE1126]/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-foreground">Civic Duty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our work is a tribute to our Kingdom. We align our efforts with Bahrain's national vision to ensure a sustainable and prosperous legacy for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Impact Preview */}
      <section className="w-full py-24 bg-white border-t">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900">Recent Impact</h2>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Discover how we translate ambition into action. Read our detailed case studies on educational bridging and institutional advocacy.
          </p>
          <Link href="/impact">
            <Button size="lg" className="bg-[#CE1126] hover:bg-[#CE1126]/90 text-white text-lg px-8 h-14 rounded-full font-bold mt-4">
              View Impact Reports
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
