"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider, Typography, Card, CardBody } from "@material-tailwind/react"

const TEAM_MEMBERS = [
  {
    name: "Bryan Herdianto",
    role: "Frontend Developer",
    bio: "10+ years of React development experience at top tech companies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Wesley Frederick Oh",
    role: "Backend Developer",
    bio: "Former Facebook engineer specializing in React performance optimization.",
    image: "/placeholder.svg?height=300&width=300",
  }
]

export default function Team() {
  return (
    <ThemeProvider>
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen sm:min-h-[50vh] w-full bg-[url('/image/teams.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 size-full bg-gray-900/20" />
        <div className="grid min-h-screen sm:min-h-[50vh] px-8">
          <div className="container relative z-10 m-auto grid place-items-center text-center">
            <Typography variant="h1" color="white" className="md:max-w-full lg:max-w-3xl">
              Meet Our Team
            </Typography>
            <Typography variant="lead" color="white" className="mt-6 mb-10 w-full md:max-w-full lg:max-w-2xl">
              The passionate educators and developers behind your React learning journey.
            </Typography>
          </div>
        </div>
      </div>

      {/* Team Introduction */}
      <section className="py-28 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Our Expert Team
          </Typography>
          <Typography variant="lead" className="mb-16 font-normal !text-gray-500">
            We&apos;re a diverse group of industry professionals, educators, and React enthusiasts committed to your success.
            Each team member brings unique expertise and real-world experience to help you master React development.
          </Typography>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="pb-28 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Card key={index} className="text-center">
                <CardBody>
                  <div className="mx-auto mb-6 size-32 rounded-full bg-gray-200 flex items-center justify-center">
                    <Typography variant="small" color="blue-gray">
                      [Photo]
                    </Typography>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {member.name}
                  </Typography>
                  <Typography variant="small" className="mb-4 font-medium text-gray-600 uppercase tracking-wide">
                    {member.role}
                  </Typography>
                  <Typography className="font-normal !text-gray-500">{member.bio}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </ThemeProvider>
  )
}
