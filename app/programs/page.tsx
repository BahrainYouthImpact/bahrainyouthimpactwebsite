import WaitlistForm from "@/components/waitlist-form"

export default function ProgramsPage() {
  return (
    <div className="flex-1 bg-zinc-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[700px]">
        <h1 className="text-center text-4xl font-bold tracking-tighter text-zinc-900 md:text-5xl">Upcoming Programs</h1>
        <p className="mt-4 text-center text-lg text-zinc-600">Register for BYI Programs &amp; Partner Initiatives</p>
        <div className="mt-10"><WaitlistForm /></div>
      </div>
    </div>
  )
}
