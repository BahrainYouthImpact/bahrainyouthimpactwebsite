"use client"

import { FormEvent, useState } from "react"

const formAction = "https://docs.google.com/forms/d/e/1FAIpQLSfKB1Ow9-phl__tzgE9-hO9zANYZ14sHFdslPtEQkSZ7wrwfg/formResponse"

const fields = {
  role: "entry.1757971312",
  name: "entry.1314731968",
  email: "entry.1262385794",
  phone: "entry.1474174875",
  levelOrOrgType: "entry.1057977651",
  interestsOrSupport: "entry.77861421",
  portfolioOrDescription: "entry.1610852425",
  availabilityOrQuestions: "entry.211977725",
}

const studentInterests = ["Web Dev", "UI/UX", "Content", "Data"]
const supportAreas = ["Digital product development", "Branding and communications", "Data and research", "Youth talent and internships"]

type RegistrationType = "student" | "organization"

export default function WaitlistForm() {
  const [registrationType, setRegistrationType] = useState<RegistrationType>("student")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget
    if (!form.checkValidity()) {
      event.preventDefault()
      setError("Please complete the required fields before submitting.")
      form.reportValidity()
      return
    }

    setError("")
    window.setTimeout(() => setSubmitted(true), 700)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-red-100 bg-white px-6 py-14 text-center shadow-sm sm:px-12">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl text-[#CE1126]">✓</div>
        <h2 className="text-2xl font-bold text-zinc-900">Thank you!</h2>
        <p className="mt-2 text-zinc-600">You&apos;ve been added to the waitlist.</p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      method="POST"
      target="waitlist-submit"
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm sm:p-8"
    >
      <iframe name="waitlist-submit" title="Waitlist submission" className="hidden" />
      <input type="hidden" name={fields.role} value={registrationType === "student" ? "Student / Youth Volunteer (Applying for micro-internships)" : "Organization / Startup / NGO (Looking for project support & interns)"} />

      <fieldset>
        <legend className="text-sm font-semibold text-zinc-900">I am registering as:</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className={`cursor-pointer rounded-xl border p-4 transition ${registrationType === "student" ? "border-[#CE1126] bg-red-50" : "border-zinc-200"}`}>
            <input type="radio" name="registration-type" checked={registrationType === "student"} onChange={() => setRegistrationType("student")} className="accent-[#CE1126]" />
            <span className="ml-3 text-sm font-medium text-zinc-800">Student / Youth Volunteer</span>
          </label>
          <label className={`cursor-pointer rounded-xl border p-4 transition ${registrationType === "organization" ? "border-[#CE1126] bg-red-50" : "border-zinc-200"}`}>
            <input type="radio" name="registration-type" checked={registrationType === "organization"} onChange={() => setRegistrationType("organization")} className="accent-[#CE1126]" />
            <span className="ml-3 text-sm font-medium text-zinc-800">Organization / Business Partner</span>
          </label>
        </div>
      </fieldset>

      {registrationType === "student" ? (
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="Full Name" name={fields.name} required />
          <Field label="Email" name={fields.email} type="email" required />
          <Field label="WhatsApp Number" name={fields.phone} required />
          <Select label="Educational Level" name={fields.levelOrOrgType} required options={["Highschool (15-18)", "University Student", "Recent Graduate"]} />
          <Checkboxes label="Track Interests" name={fields.interestsOrSupport} options={studentInterests} required />
          <Field label="GitHub / Portfolio URL" name={fields.portfolioOrDescription} type="url" />
          <Select label="Weekly Hours" name={fields.availabilityOrQuestions} required options={["2–5 hours / week", "5–10 hours / week", "10+ hours / week"]} />
        </div>
      ) : (
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Field label="Organization Name" name={fields.name} required />
          <Field label="Contact Person" name={fields.phone} required />
          <Field label="Official Email" name={fields.email} type="email" required />
          <Select label="Organization Type" name={fields.levelOrOrgType} required options={["Startup", "NGO", "Business", "Government / Education"]} />
          <Checkboxes label="Needed Support Areas" name={fields.interestsOrSupport} options={supportAreas} required />
          <label className="text-sm font-medium text-zinc-700 sm:col-span-2">
            Brief Project Description
            <textarea name={fields.portfolioOrDescription} required rows={4} className="mt-2 block w-full rounded-lg border border-zinc-300 px-3 py-2.5 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#CE1126] focus:ring-2 focus:ring-red-100" />
          </label>
        </div>
      )}

      {error && <p role="alert" className="mt-5 text-sm text-[#CE1126]">{error}</p>}
      <button type="submit" className="mt-7 w-full rounded-lg bg-[#CE1126] px-5 py-3 font-semibold text-white transition hover:bg-[#ad0e20] focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2">Join the waitlist</button>
    </form>
  )
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return <label className="text-sm font-medium text-zinc-700">{label}{required && <span className="ml-1 text-[#CE1126]">*</span>}<input name={name} type={type} required={required} className="mt-2 block w-full rounded-lg border border-zinc-300 px-3 py-2.5 font-normal outline-none transition placeholder:text-zinc-400 focus:border-[#CE1126] focus:ring-2 focus:ring-red-100" /></label>
}

function Select({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return <label className="text-sm font-medium text-zinc-700">{label}{required && <span className="ml-1 text-[#CE1126]">*</span>}<select name={name} required={required} defaultValue="" className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-[#CE1126] focus:ring-2 focus:ring-red-100"><option value="" disabled>Select an option</option>{options.map(option => <option key={option}>{option}</option>)}</select></label>
}

function Checkboxes({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return <fieldset className="sm:col-span-2"><legend className="text-sm font-medium text-zinc-700">{label}{required && <span className="ml-1 text-[#CE1126]">*</span>}</legend><div className="mt-2 grid gap-2 sm:grid-cols-2">{options.map((option, index) => <label key={option} className="flex items-center gap-2 text-sm text-zinc-600"><input type="checkbox" name={name} value={option} required={required && index === 0} className="h-4 w-4 accent-[#CE1126]" />{option}</label>)}</div></fieldset>
}