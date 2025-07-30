"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, Clock, Send } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/byi-logo.png" alt="Bahrain Youth Impact Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-bold text-xl text-red-700">Bahrain Youth Impact</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="text-gray-600 hover:text-red-700 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-red-700 transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="text-gray-600 hover:text-red-700 transition-colors">
              Programs
            </Link>
            <Link href="/contact" className="text-red-700 hover:text-red-800 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Get Involved</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-red-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center text-sm text-red-600 hover:text-red-700 mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Get in <span className="text-red-600">Touch</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Ready to join our mission? Have questions about our programs? We'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-red-700 text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form action="https://formspree.io/f/xvgqqpylat" method="POST" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" name="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" name="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school">School/Organization</Label>
                      <Input id="school" name="school" placeholder="Your school or organization" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">What are you interested in?</Label>
                      <select name="interest" className="w-full p-2 border border-gray-300 rounded-md">
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
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-700">Contact Information</CardTitle>
                    <CardDescription>Get in touch with our team of student leaders.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-sm text-gray-600">bahrainyouthimpact@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Response Time</p>
                        <p className="text-sm text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Quick answers to common questions about our organization and programs.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-red-700 text-lg">Who can join your programs?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Our programs are open to all high school students in Bahrain, regardless of their school,
                    background, or experience level. We believe in inclusive opportunities for all youth.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-red-700 text-lg">Are your programs free?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Yes! All our programs are completely free. We believe that financial barriers should never prevent
                    young people from accessing quality development opportunities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-red-100">
                <CardHeader>
                  <CardTitle className="text-red-700 text-lg">How can I volunteer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    We welcome volunteers of all ages! Students can join our peer mentorship program, while adults can
                    support as advisors or workshop facilitators. Contact us to learn more.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Join Us?</h2>
                <p className="max-w-[600px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't wait – start your journey with Bahrain's leading youth empowerment organization today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/programs">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    Apply to Programs
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center space-x-2">
          <Image src="/byi-logo.png" alt="Bahrain Youth Impact Logo" width={24} height={24} className="h-6 w-6" />
          <p className="text-xs text-gray-600">© 2025 Bahrain Youth Impact. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/about" className="text-xs hover:underline underline-offset-4 text-gray-600">
            About
          </Link>
          <Link href="/programs" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Programs
          </Link>
          <Link href="/contact" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
