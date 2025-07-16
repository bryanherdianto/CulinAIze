"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider, Typography, Card, CardBody } from "@material-tailwind/react"

export default function Terms() {
  return (
    <ThemeProvider>
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen sm:min-h-[50vh] w-full bg-[url('/image/terms.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 size-full bg-gray-900/20" />
        <div className="grid min-h-screen sm:min-h-[50vh] px-8">
          <div className="container relative z-10 m-auto grid place-items-center text-center">
            <Typography variant="h1" color="white" className="md:max-w-full lg:max-w-3xl">
              Terms and Conditions
            </Typography>
            <Typography variant="lead" color="white" className="mt-6 mb-10 w-full md:max-w-full lg:max-w-2xl">
              Please read these terms and conditions carefully before using our service.
            </Typography>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <section className="py-28 px-8">
        <div className="container mx-auto max-w-4xl">
          <Typography variant="small" className="mb-8 font-normal !text-gray-500 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          <div className="space-y-8">
            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  1. Acceptance of Terms
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above, please do not use this service.
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  These Terms of Service (&quot;Terms&quot;) govern your use of our website located at culinaize.com (the &quot;Service&quot;)
                  operated by CulinAIze (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  2. Use License
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  Permission is granted to temporarily download one copy of the materials on CulinAIze&apos;s website for
                  personal, non-commercial transitory viewing only.
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-2">
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  3. Course Access and Content
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  Upon enrollment in our courses, you will receive access to course materials including videos,
                  documents, and other educational content. This access is granted for personal use only.
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  Course content may not be shared, distributed, or used for commercial purposes without explicit
                  written permission from CulinAIze.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  4. User Accounts
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and
                  current at all times. You are responsible for safeguarding the password and for all activities under
                  your account.
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  You agree not to disclose your password to any third party and to take sole responsibility for
                  activities under your account.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  5. Disclaimer
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  The materials on CulinAIze&apos;s website are provided on an &apos;as is&apos; basis. CulinAIze makes no warranties,
                  expressed or implied, and hereby disclaims and negates all other warranties including without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  Further, CulinAIze does not warrant or make any representations concerning the accuracy, likely results,
                  or reliability of the use of the materials on its website or otherwise relating to such materials or
                  on any sites linked to this site.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  6. Contact Information
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  If you have any questions about these Terms and Conditions, please contact us at support@culinaize.com
                  or through our contact page.
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
