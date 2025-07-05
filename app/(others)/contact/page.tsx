"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider, Typography, Card, CardBody, Input, Textarea, Button } from "@material-tailwind/react"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid"

export default function ContactUs() {
  return (
    <ThemeProvider>
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[50vh] w-full bg-[url('/image/contact.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 size-full bg-gray-900/20" />
        <div className="grid min-h-[50vh] px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography variant="h1" color="white" className="md:max-w-full lg:max-w-3xl">
              Contact Us
            </Typography>
            <Typography variant="lead" color="white" className="mt-6 mb-10 w-full md:max-w-full lg:max-w-2xl">
              Get in touch with our team. We&apos;re here to help you with any questions about our React course and learning
              platform.
            </Typography>
          </div>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <section className="py-28 px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Typography variant="h3" color="blue-gray" className="mb-4">
                Send us a Message
              </Typography>
              <Typography variant="lead" className="mb-8 font-normal !text-gray-500">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </Typography>

              <Card>
                <CardBody className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="First Name" crossOrigin="" />
                    <Input label="Last Name" crossOrigin="" />
                  </div>
                  <Input label="Email Address" crossOrigin="" />
                  <Input label="Subject" crossOrigin="" />
                  <Textarea label="Message" rows={6} />
                  <Button color="gray" size="lg" className="w-full">
                    Send Message
                  </Button>
                </CardBody>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <Typography variant="h3" color="blue-gray" className="mb-4">
                Get in Touch
              </Typography>
              <Typography variant="lead" className="mb-8 font-normal !text-gray-500">
                Reach out to us through any of the following channels.
              </Typography>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gray-900 p-4">
                    <PhoneIcon className="size-6 text-white" />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Phone
                    </Typography>
                    <Typography className="font-normal !text-gray-500">+1 (555) 123-4567</Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gray-900 p-4">
                    <EnvelopeIcon className="size-6 text-white" />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Email
                    </Typography>
                    <Typography className="font-normal !text-gray-500">support@chatbot.com</Typography>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gray-900 p-4">
                    <MapPinIcon className="size-6 text-white" />
                  </div>
                  <div>
                    <Typography variant="h6" color="blue-gray" className="mb-1">
                      Address
                    </Typography>
                    <Typography className="font-normal !text-gray-500">
                      123 Learning Street
                      <br />
                      Education City, EC 12345
                      <br />
                      United States
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </ThemeProvider>
  )
}
