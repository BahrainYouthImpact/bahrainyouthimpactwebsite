import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Award, ArrowLeft, Clock, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

export default function ProgramsPage() {
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
            <Link href="/programs" className="text-red-700 hover:text-red-800 transition-colors">
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
                  Our <span className="text-red-600">Programs</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Innovative, student-designed programs that empower young Bahrainis to develop skills, build
                  confidence, and create positive change in their communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Volunteer Program */}
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Award className="h-6 w-6 text-red-600" />
                    </div>
                    <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Flagship Program</Badge>
                  </div>
                  <CardTitle className="text-red-700 text-2xl">Volunteer Program</CardTitle>
                  <CardDescription className="text-base">
                    Our comprehensive 2-month leadership development program designed to build the next generation of
                    Bahraini leaders through community service and hands-on experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span>2 months</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-red-600" />
                      <span>25 participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span>Next: March 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <span>Manama & Online</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">What You'll Learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Public speaking and communication skills</li>
                      <li>• Project management and team leadership</li>
                      <li>• Community organizing and social impact</li>
                      <li>• Personal branding and networking</li>
                    </ul>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3C8ZjcB1l6khKeFRd6iXmLuJKiLykZ5eck_9lhCTmlcqbpw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Apply Now</Button>
                  </a>
                </CardContent>
              </Card>

              {/* Digital Skills Bootcamp */}
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Target className="h-6 w-6 text-red-600" />
                    </div>
                    <Badge className="bg-green-100 text-green-700">New Program</Badge>
                  </div>
                  <CardTitle className="text-red-700 text-2xl">Digital Skills Bootcamp</CardTitle>
                  <CardDescription className="text-base">
                    Intensive 3-month program focusing on digital literacy, coding, and entrepreneurship to prepare
                    youth for the digital economy.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span>3 months</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-red-600" />
                      <span>30 participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span>Next: February 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <span>Hybrid Format</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Skills Covered:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Web development (HTML, CSS, JavaScript)</li>
                      <li>• Digital marketing and social media</li>
                      <li>• Basic entrepreneurship and business planning</li>
                      <li>• Data analysis and presentation skills</li>
                    </ul>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeUCShcJNmmkJcjiLcD9AeFx09N1qgsBwBTs3urGXmuS8aHYQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Join Waitlist</Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Programs */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">More Programs</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our full range of programs designed to meet different interests and skill levels.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Community Service Initiative</CardTitle>
                  <CardDescription>
                    Monthly volunteer projects addressing local community needs and social issues.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>• Environmental cleanup projects</p>
                    <p>• Elderly care visits</p>
                    <p>• Educational support for younger students</p>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf3C8ZjcB1l6khKeFRd6iXmLuJKiLykZ5eck_9lhCTmlcqbpw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Digital Bootskills Program</CardTitle>
                  <CardDescription>
                    Connect with experienced student mentors for guidance and support in your personal development
                    journey.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>• One-on-one mentoring sessions</p>
                    <p>• Group workshops and discussions</p>
                    <p>• Career guidance and planning</p>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeUCShcJNmmkJcjiLcD9AeFx09N1qgsBwBTs3urGXmuS8aHYQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white border-red-100 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <Target className="h-5 w-5 text-red-600" />
                  </div>
                  <CardTitle className="text-red-700">Introduction to Python</CardTitle>
                  <CardDescription>
                    Learn programming fundamentals with Python through hands-on projects and real-world applications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>• Basic programming concepts</p>
                    <p>• Hands-on coding projects</p>
                    <p>• Real-world applications</p>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc6s6OOOrBpMVEeY_OUjDRC623IcHfALNDJsz5VlgAP9octcg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-red-200 text-red-700 hover:bg-red-50 bg-transparent"
                    >
                      Learn More
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Program Impact */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Real Impact, Real Results
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Our programs don't just teach skills – they create lasting change in the lives of young Bahrainis and
                  their communities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">95%</div>
                    <div className="text-sm text-gray-600">Program Completion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">200+</div>
                    <div className="text-sm text-gray-600">Alumni Network</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">50+</div>
                    <div className="text-sm text-gray-600">Community Projects</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">15+</div>
                    <div className="text-sm text-gray-600">Partner Organizations</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                  height="400"
                  alt="Program participants celebrating"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-600 to-red-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-red-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of young minds in Bahrain who are already developing their skills and making an impact.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Apply to Programs
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                  >
                    Contact Us
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
