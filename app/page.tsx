import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart, Award, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
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
            <Link href="/" className="text-red-700 hover:text-red-800 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-red-700 transition-colors">
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
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-red-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 font-medium">
                    LEAD The CHANGE Be The IMPACT
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Empowering Bahrain's
                    <span className="text-red-600"> Next Generation</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Led by students, for students. We're building a movement to empower young minds in Bahrain with the
                    skills, confidence, and opportunities they need to shape our nation's future.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                      Join Our Community
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/programs">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      Volunteer With Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/lead-change-impact.png"
                  width="400"
                  height="400"
                  alt="Lead The Change Be The Impact - Bahrain Youth Impact"
                  className="aspect-square overflow-hidden rounded-xl object-contain bg-white p-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-red-100">Students Reached</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-white">25+</div>
                <div className="text-red-100">Programs Launched</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-red-100">Partner Schools</div>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-red-100">Student-Led</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Mission</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We believe that young people are not just the leaders of tomorrow – they are the changemakers of
                  today. Our mission is to create opportunities, build skills, and foster leadership among Bahrain's
                  youth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Leadership Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Building confident leaders through workshops, mentorship programs, and real-world project
                    experience.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Skill Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Equipping youth with 21st-century skills including digital literacy, entrepreneurship, and
                    communication.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Creating positive change in our communities through volunteer initiatives and social impact
                    projects.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Programs</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our innovative programs designed by students, for students.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Volunteer Program</CardTitle>
                  <CardDescription>
                    A comprehensive 2-month program developing leadership skills through community service, mentorship,
                    and real-world impact projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/programs">
                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <Target className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Digital Skills Bootcamp</CardTitle>
                  <CardDescription>
                    Intensive training in coding, digital marketing, and entrepreneurship to prepare youth for the
                    digital economy.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/programs">
                    <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 bg-transparent">
                      Learn More
                    </Button>
                  </Link>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[600px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of young minds in Bahrain who are already making an impact in their communities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                    Join Our Community
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                  >
                    Volunteer With Us
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
