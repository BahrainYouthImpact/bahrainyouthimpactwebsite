"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-48 bg-zinc-50 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#CE1126] uppercase">
              Get in Touch
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 font-medium">
              Ready to join our mission? Have questions about our programs? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="bg-white border-zinc-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-zinc-900">Send Us a Message</CardTitle>
                <CardDescription className="text-zinc-600 text-lg">Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/mojpoowa" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" placeholder="Your first name" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" placeholder="Your last name" required className="h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="school">School/Organization</Label>
                    <Input id="school" name="school" placeholder="Your school or organization" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">What are you interested in?</Label>
                    <select name="interest" className="w-full h-12 px-3 py-2 border border-zinc-200 rounded-md bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-[#CE1126] focus:border-transparent">
                      <option value="">Select an option</option>
                      <option value="programs">Joining our programs</option>
                      <option value="volunteer">Volunteering with us</option>
                      <option value="partnership">Partnership opportunities</option>
                      <option value="speaking">Speaking engagements</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about how you'd like to get involved or any questions you have..."
                      className="min-h-[150px] resize-none"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#CE1126] hover:bg-[#CE1126]/90 text-white h-14 text-lg font-bold">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-zinc-900">Direct Contact</h3>
                <p className="text-lg text-zinc-600">
                  Prefer to email us directly? You can reach our team of student leaders below.
                </p>
              </div>

              <Card className="bg-zinc-50 border-zinc-200 shadow-sm">
                <CardContent className="p-8 space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="h-16 w-16 rounded-full bg-[#CE1126]/10 flex items-center justify-center shrink-0">
                      <Mail className="h-8 w-8 text-[#CE1126]" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 text-lg mb-1">Official Email</p>
                      <a href="mailto:bahrainyouthimpact@gmail.com" className="text-[#CE1126] hover:underline text-lg font-medium">
                        bahrainyouthimpact@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="h-16 w-16 rounded-full bg-[#CE1126]/10 flex items-center justify-center shrink-0">
                      <Clock className="h-8 w-8 text-[#CE1126]" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 text-lg mb-1">Response Time</p>
                      <p className="text-zinc-600 text-lg">Within 24 - 48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
