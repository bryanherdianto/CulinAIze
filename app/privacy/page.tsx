"use client"

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider, Typography, Card, CardBody } from "@material-tailwind/react"

export default function Privacy() {
  return (
    <ThemeProvider>
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen sm:min-h-[50vh] w-full bg-[url('/image/privacy.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 size-full bg-gray-900/20" />
        <div className="grid min-h-screen sm:min-h-[50vh] px-8">
          <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <Typography variant="h1" color="white" className="md:max-w-full lg:max-w-3xl">
              Privacy Policy
            </Typography>
            <Typography variant="lead" color="white" className="mt-6 mb-10 w-full md:max-w-full lg:max-w-2xl">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </Typography>
          </div>
        </div>
      </div>

      {/* Privacy Content */}
      <section className="py-28 px-8">
        <div className="container mx-auto max-w-4xl">
          <Typography variant="small" className="mb-8 font-normal !text-gray-500 text-center">
            Last updated: {new Date().toLocaleDateString()}
          </Typography>

          <div className="space-y-8">
            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Information We Collect
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  We collect information you provide directly to us, such as when you create an account, enroll in a
                  course, or contact us for support.
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-2">This may include:</Typography>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Name and email address</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Course progress and completion data</li>
                  <li>Communications with our support team</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  How We Use Your Information
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, including to:
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Process your enrollment and provide course access</li>
                  <li>Send you course updates and educational content</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze usage patterns to improve our platform</li>
                  <li>Detect and prevent fraud or abuse</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Information Sharing
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-2">
                  We may share your information in the following situations:
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Data Security
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  However, no method of transmission over the internet or electronic storage is 100% secure, so we
                  cannot guarantee absolute security.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Your Rights
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  You have certain rights regarding your personal information, including:
                </Typography>
                <ul className="list-disc list-inside space-y-2 text-gray-500 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                </ul>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Cookies and Tracking
                </Typography>
                <Typography className="font-normal !text-gray-500 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website, analyze
                  usage patterns, and provide personalized content.
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  You can control cookie settings through your browser preferences, though this may affect some
                  functionality of our website.
                </Typography>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-4">
                  Contact Us
                </Typography>
                <Typography className="font-normal !text-gray-500">
                  If you have any questions about this Privacy Policy, please contact us at privacy@culinaize.com or
                  through our contact page.
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
