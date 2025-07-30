import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Heart, Target, Award, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
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
            <Link href="/about" className="text-red-700 hover:text-red-800 transition-colors">
              About Us
            </Link>
            <Link href="/programs" className="text-gray-600 hover:text-red-700 transition-colors">
              Programs
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-red-700 transition-colors">
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
                  About <span className="text-red-600">Our Story</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Born from the passion of high school students who believe in the power of youth to create change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Our Journey Began in High School
                </h2>
                <p className="text-gray-600 md:text-lg">
                  What started as a group of passionate high school students discussing how to make a difference in our
                  community has grown into Bahrain's leading youth empowerment organization.
                </p>
                <p className="text-gray-600 md:text-lg">
                  We recognized that young people in Bahrain had incredible potential but often lacked the platforms and
                  opportunities to develop their skills and make their voices heard. So we decided to create those
                  opportunities ourselves.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Today, we're proud to be 100% student-led, proving that age is just a number when it comes to creating
                  meaningful change in our society.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                  height="400"
                  alt="Our founding team planning"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Values</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These core values guide everything we do and shape how we approach youth empowerment.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Student-Led Leadership</CardTitle>
                  <CardDescription>
                    We believe young people are capable of leading meaningful change. Every program, initiative, and
                    decision is driven by students, for students.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Community First</CardTitle>
                  <CardDescription>
                    Our commitment to Bahrain and its people drives everything we do. We're here to serve our community
                    and create lasting positive impact.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Excellence & Innovation</CardTitle>
                  <CardDescription>
                    We strive for excellence in everything we do while embracing innovative approaches to solve
                    challenges facing today's youth.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Inclusive Growth</CardTitle>
                  <CardDescription>
                    We believe every young person deserves the opportunity to grow and succeed, regardless of their
                    background or circumstances.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section Placeholder */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The passionate high school students leading Bahrain's youth empowerment movement.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Card className="bg-red-50 border-red-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-red-700">Team Details Coming Soon</CardTitle>
                  <CardDescription>
                    We're preparing detailed profiles of our amazing team members. Check back soon to learn more about
                    the students making this all possible!
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Contact Us for More Info</Button>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Join Our Mission</h2>
                <p className="max-w-[600px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the movement that's empowering Bahrain's next generation of leaders.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Get Involved Today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                >
                  Learn About Programs
                </Button>
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
