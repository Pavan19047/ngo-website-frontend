import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Globe, Award, Target, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Mission</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
              We are a global non-profit organization dedicated to creating sustainable positive change in communities
              worldwide through volunteer action and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower communities worldwide by connecting passionate volunteers with meaningful opportunities
                  that create lasting positive change and sustainable development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A world where every community has access to the resources, education, and support they need to thrive,
                  fostered by a global network of dedicated volunteers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Compassion, integrity, sustainability, and empowerment guide everything we do. We believe in the power
                  of collective action and community-driven solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Founded in 2015 by a group of passionate individuals who believed that small actions could create big
                  changes, our organization started with just 50 volunteers in three cities.
                </p>
                <p className="text-lg">
                  What began as local community clean-up drives and tutoring programs has grown into a global movement
                  spanning 25 countries, with over 2,500 active volunteers making a difference every day.
                </p>
                <p className="text-lg">
                  Today, we continue to expand our reach while staying true to our core belief: that every person has
                  the power to create positive change, and together, we can build a better world for all.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/about_us.png"
                alt="About our NGO - Our volunteers in action making a difference"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
            <p className="text-xl text-blue-100">See the difference we've made together over the years</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-blue-100">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Dedicated individuals leading our mission to create positive change</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/team-sarah.svg"
                  alt="Sarah Johnson - Executive Director"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Executive Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With 15 years in non-profit leadership, Sarah drives our strategic vision and global expansion
                  efforts.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/team-michael.svg"
                  alt="Michael Chen - Program Director"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Michael Chen</CardTitle>
                <CardDescription>Program Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Michael oversees all volunteer programs and ensures our initiatives create meaningful, sustainable
                  impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Image
                  src="/team-amara.svg"
                  alt="Dr. Amara Okafor - Community Outreach Director"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <CardTitle>Dr. Amara Okafor</CardTitle>
                <CardDescription>Community Outreach Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Dr. Okafor leads our community partnerships and ensures our programs meet the real needs of the
                  communities we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Honored to be recognized for our commitment to positive change</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">Global Impact Award</CardTitle>
                <CardDescription>2023</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Community Choice Award</CardTitle>
                <CardDescription>2022</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Sustainability Excellence</CardTitle>
                <CardDescription>2021</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Volunteer Organization of the Year</CardTitle>
                <CardDescription>2020</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission Today</h2>
          <p className="text-xl mb-8 text-purple-100">
            Be part of a global community that's making a real difference. Your skills, passion, and time can help
            create the change you want to see in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              <Link href="/volunteer">Become a Volunteer</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
