"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider, Typography, Card, CardBody } from "@material-tailwind/react"
import { AcademicCapIcon, UsersIcon, TrophyIcon, HeartIcon } from "@heroicons/react/24/solid"

const STATS = [
  {
    icon: UsersIcon,
    title: "10,000+",
    description: "Students Enrolled",
  },
  {
    icon: AcademicCapIcon,
    title: "50+",
    description: "Expert Instructors",
  },
  {
    icon: TrophyIcon,
    title: "95%",
    description: "Success Rate",
  },
  {
    icon: HeartIcon,
    title: "5 Years",
    description: "Experience",
  },
]

export default function AboutUs() {
  return (
    <ThemeProvider>
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen sm:min-h-[50vh] w-full bg-[url('/image/about.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-gray-900/20" />
        <div className="grid min-h-screen sm:min-h-[50vh] px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography variant="h1" color="white" className="md:max-w-full lg:max-w-3xl">
              About Us
            </Typography>
            <Typography variant="lead" color="white" className="mt-6 mb-10 w-full md:max-w-full lg:max-w-2xl">
              We&apos;re passionate about empowering developers with the skills they need to build amazing React applications
              and advance their careers.
            </Typography>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-28 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Our Mission
          </Typography>
          <Typography variant="lead" className="mb-16 font-normal !text-gray-500">
            To provide world-class React education that transforms beginners into confident developers through hands-on
            learning, expert guidance, and a supportive community.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="text-center">
                <CardBody>
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-gray-900">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <Typography variant="h3" color="blue-gray" className="mb-2">
                    {title}
                  </Typography>
                  <Typography className="font-normal !text-gray-500">{description}</Typography>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Typography variant="h2" color="blue-gray" className="mb-4">
                Our Story
              </Typography>
              <Typography variant="lead" className="mb-6 font-normal !text-gray-500">
                Founded in 2024, CulinAIze started with a simple vision: make React learning accessible to everyone,
                regardless of their background or experience level.
              </Typography>
              <Typography className="mb-4 font-normal !text-gray-500">
                What began as a small online course has grown into a comprehensive learning platform trusted by
                thousands of developers worldwide. Our team of industry experts brings real-world experience to every
                lesson.
              </Typography>
              <Typography className="font-normal !text-gray-500">
                Today, we continue to innovate and expand our offerings, always keeping our students&apos; success at the
                heart of everything we do.
              </Typography>
            </div>
            <div className="rounded-xl bg-gray-200 h-96 flex items-center justify-center">
              <Typography variant="h6" color="blue-gray">
                [Company Story Image Placeholder]
              </Typography>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Our Values
          </Typography>
          <Typography variant="lead" className="mb-16 font-normal !text-gray-500">
            The principles that guide everything we do.
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  Excellence
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  We strive for the highest quality in our courses, content, and student support.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  Accessibility
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  Learning should be available to everyone, regardless of background or circumstances.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray" className="mb-4">
                  Community
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  We believe in the power of learning together and supporting each other&apos;s growth.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </ThemeProvider>
  )
}
