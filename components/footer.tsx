import { Typography, Button, Input } from "@material-tailwind/react"

const LINKS = [
  {
    title: "Pages",
    items: [
      { name: "Home", href: "/" },
      { name: "Login", href: "/login" },
      { name: "Chat", href: "/chat" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" },
      { name: "Team", href: "/team" },
      { name: "About Us", href: "/about" },
    ],
  },
]

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={typeof link === "string" ? link : link.name}>
                    <Typography
                      as="a"
                      href={typeof link === "string" ? "#" : link.href}
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {typeof link === "string" ? link : link.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets informed about fresh sales.
            </Typography>
            <Typography variant="small" className="font-medium mb-2 text-left">
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree to the{" "}
                  <a href="/terms" className="font-bold underline hover:text-gray-900 transition-colors">
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button color="gray" className="w-full lg:w-fit" size="md">
                Send
              </Button>
            </div>
          </div>
        </div>
        <Typography color="blue-gray" className="md:text-center mt-16 font-normal !text-gray-700">
          &copy; {CURRENT_YEAR} CulinAIze. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  )
}

export default Footer
