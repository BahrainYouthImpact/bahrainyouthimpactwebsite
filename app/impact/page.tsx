import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export default function ImpactPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container max-w-4xl mx-auto px-4 md:px-6">
        <header className="mb-16 text-center">
          <p className="text-[#CE1126] font-semibold tracking-widest uppercase text-sm mb-4">Bahrain Youth Impact</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">Case Studies in Leadership</h1>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Aligning with Bahrain's Economic Vision 2030 through strategic mobilization, institutional partnership, and measurable civic duty.
          </p>
        </header>

        <Separator className="mb-16 bg-zinc-200" />

        {/* Study 1: Each One, Teach One */}
        <article className="mb-24">
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 bg-zinc-100 rounded-sm overflow-hidden">
            <a href="/each-one-teach-one.png" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/each-one-teach-one.png" 
                alt="Each One, Teach One Initiative" 
                fill 
                className="object-cover cursor-pointer hover:opacity-90 transition-opacity" 
              />
            </a>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-8 border-l-4 border-[#CE1126] pl-4">
              Strategic Mobilization: Each One, Teach One
            </h2>
            <div className="prose prose-lg text-zinc-700 leading-relaxed max-w-none">
              <p className="mb-6">
                This initiative serves as a frontline response to educational disparities within the Kingdom, grounded in the principle of Inclusive Excellence. In a strategic collaboration with the Rotaract Club of Bahrain and Dream Big, Bahrain Youth Impact (BYI) mobilized youth volunteers to bridge the communicative divide for children in low-income communities. By facilitating direct English language instruction, we transformed passive volunteers into active pedagogical agents.
              </p>
              <p>
                This project was not merely a tutoring session; it was a deliberate exercise in Socio-Educational Bridging, ensuring that economic barriers do not dictate a child's capacity to dream or lead. We believe that providing the space and tools for this empowerment is the most direct route to sustainable social impact. Through this "Each One, Teach One" model, BYI successfully moved from rhetoric to Integrity in Action, creating a scalable platform for academic equity.
              </p>
            </div>
          </div>
        </article>

        <Separator className="mb-16 bg-zinc-200" />

        {/* Study 2: The BARC Campaign */}
        <article className="mb-24">
          <div className="relative w-full h-[400px] md:h-[500px] mb-12 bg-zinc-100 rounded-sm overflow-hidden">
            <a href="/barc-campaign.png" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/barc-campaign.png" 
                alt="BARC Campaign" 
                fill 
                className="object-cover cursor-pointer hover:opacity-90 transition-opacity" 
              />
            </a>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-8 border-l-4 border-[#CE1126] pl-4">
              Advocacy & Welfare: The BARC Campaign
            </h2>
            <div className="prose prose-lg text-zinc-700 leading-relaxed max-w-none">
              <p className="mb-6">
                Our partnership with the Bahrain Animal Rescue Centre (BARC) represents the Civic Duty pillar of our organization, mapping youth energy against the Kingdom's broader welfare standards. Recognizing that local rescue centers often face critical resource volatility, BYI initiated a targeted fundraising and awareness campaign designed to secure the fundamental requirements of shelter and nutrition for vulnerable animals.
              </p>
              <p>
                This mobilization moved beyond traditional charity; it was an exercise in Institutional Advocacy and logistical support. By utilizing our platform to amplify BARC's mission, we engaged the community in a "boots on the ground" effort that turned individual empathy into collective action. This campaign serves as a testament to our philosophy that leadership is a choice to serve the voiceless. Through this action, we proved that student-led organizations are capable of managing complex community needs and delivering tangible, measurable results for Bahrain's legacy.
              </p>
            </div>
          </div>
        </article>

      </div>
    </div>
  )
}
