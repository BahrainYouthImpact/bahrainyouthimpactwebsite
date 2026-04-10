import { ShieldCheck, HeartHandshake, Lightbulb, Globe, Footprints, Users, SignalHigh } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* I. The Manifesto (Hero Section) */}
      <section className="w-full py-24 md:py-32 lg:py-48 bg-white border-b">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#CE1126] uppercase leading-tight">
            LEAD THE CHANGE.<br />BE THE IMPACT.
          </h1>
          <p className="text-xl md:text-3xl text-zinc-900 font-bold tracking-tight">
            "The Youth is capable of creating a great change."
          </p>
          <p className="max-w-[800px] text-lg md:text-2xl text-zinc-600 leading-relaxed">
            Bahrain Youth Impact (BYI) is a student-led organization born from the belief that age is not a barrier to leadership. We are a collective of thinkers, doers, and change-makers who believe that the best way to serve Bahrain is to empower its youngest citizens today.
          </p>
        </div>
      </section>

      {/* II. The Mission: Bridging the Gap */}
      <section className="w-full py-24 bg-zinc-50 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-[#CE1126]/10 rounded-full mb-4">
                <Footprints className="h-8 w-8 text-[#CE1126]" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-900">
                Bridging the Gap
              </h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Our mission is to bridge the gap between potential and reality. We exist to provide Bahrain's youth with the space, the tools, and the community needed to turn their ideas into social impact.
                </p>
                <p>
                  We don't just host events; we build the platform where ambition meets action. By moving from passive observation to active leadership, we ensure that the next generation is not just ready for the future, but is actively shaping it.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full bg-white p-8 md:p-12 border shadow-lg rounded-2xl flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-[#CE1126] mb-4">The Shift</h3>
              <p className="text-2xl md:text-3xl text-zinc-800 font-medium italic">
                "From passive observation to active leadership."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* III. The Pillars of Sovereignty (Core Values) */}
      <section className="w-full py-24 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-[#CE1126]">
              The Pillars of Sovereignty
            </h2>
            <p className="text-lg text-zinc-600 mt-4 font-medium">The principles that guide every decision we make.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md bg-zinc-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-zinc-100">
                  <ShieldCheck className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-zinc-900">Youth-First Sovereignty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  We believe youth should lead youth. Our initiatives are designed by the demographic they serve to ensure they are genuine and effective.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-zinc-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-zinc-100">
                  <HeartHandshake className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-zinc-900">Integrity in Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  We value results over rhetoric. Our impact is measured by the change we create, not just the words we speak.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-zinc-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-zinc-100">
                  <Lightbulb className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-zinc-900">Inclusive Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  We welcome every student, regardless of their background or field of study, believing that diversity of thought is what sparks true innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md bg-zinc-50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-zinc-100">
                  <Globe className="h-6 w-6 text-[#CE1126]" />
                </div>
                <CardTitle className="text-2xl text-zinc-900">Civic Duty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 leading-relaxed text-lg">
                  Our work is a tribute to our Kingdom. We align our efforts with Bahrain's national vision to ensure a sustainable and prosperous legacy for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* IV. National Vision Section & The Institutional Scale */}
      <section className="w-full py-24 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                National Vision
              </h2>
              <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed">
                Mapping every project against <strong className="text-white">Bahrain's Economic Vision 2030</strong> and the <strong className="text-white">UN Sustainable Development Goals (SDGs)</strong>.
              </p>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                Our scale and presence demonstrate a living, breathing movement with deep roots in the community.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-zinc-800 border-zinc-700 text-center py-8 hover:bg-zinc-800/80 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[#CE1126]/20 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-[#CE1126]" />
                  </div>
                  <CardTitle className="text-5xl md:text-6xl font-black text-white tracking-tighter">50+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#CE1126] font-bold uppercase tracking-widest text-sm mb-2">Solid Foundation</p>
                  <p className="text-zinc-400 text-sm md:text-base">Dedicated core members</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 text-center py-8 hover:bg-zinc-800/80 transition-colors">
                <CardHeader className="pb-2">
                  <div className="mx-auto h-16 w-16 rounded-full bg-[#CE1126]/20 flex items-center justify-center mb-4">
                    <SignalHigh className="h-8 w-8 text-[#CE1126]" />
                  </div>
                  <CardTitle className="text-5xl md:text-6xl font-black text-white tracking-tighter">75k+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#CE1126] font-bold uppercase tracking-widest text-sm mb-2">National Voice</p>
                  <p className="text-zinc-400 text-sm md:text-base">Verified community reach</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="w-full py-32 bg-[#CE1126] text-white flex items-center justify-center">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight">
            "To our country, we promise a generation of leaders who are ready to serve."
          </h2>
        </div>
      </section>

    </div>
  )
}
