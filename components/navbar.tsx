"use client"

import React from "react"
import { Navbar as MTNavbar, Collapse, IconButton, Typography, Button } from "@material-tailwind/react"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { after } from "node:test"

interface NavItemProps {
  children: React.ReactNode
  href?: string
  isScrolling?: boolean
}
function NavItem({ children, href, isScrolling }: NavItemProps) {
  return (
    <li className={`relative after:block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] ${isScrolling ? "after:bg-gray-900" : "after:bg-white"} after:w-full after:scale-x-0 after:transform after:transition-transform after:duration-300 after:origin-right hover:after:scale-x-100`}>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_self" : "_blank"}
        variant="paragraph"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  )
}

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [isScrolling, setIsScrolling] = React.useState(false)

  const handleOpen = () => setOpen((cur) => !cur)

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false))
  }, [])

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 drop-shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Typography variant="h5" color={isScrolling ? "blue-gray" : "white"}>
            Chatbot
          </Typography>
        </a>
        <ul className={`ml-10 hidden items-center gap-6 lg:flex w-fit ${isScrolling ? "text-gray-900" : "text-white"}`}>
          <NavItem href="/" isScrolling={isScrolling}>Home</NavItem>
          <NavItem href="/about" isScrolling={isScrolling}>About Us</NavItem>
          <NavItem href="/contact" isScrolling={isScrolling}>Contact Us</NavItem>
          <NavItem href="/chat" isScrolling={isScrolling}>Chat</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex">
          <IconButton variant="text" color={isScrolling ? "gray" : "white"} size="sm">
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton variant="text" color={isScrolling ? "gray" : "white"} size="sm">
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton variant="text" color={isScrolling ? "gray" : "white"} size="sm">
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <a href="/login">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Login
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? <XMarkIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
            <NavItem href="/chat">Chat</NavItem>
          </ul>
          <div className="mt-4 flex gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <a href="/login">
              <Button color="gray" size="sm" className="ml-auto">
                Login
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  )
}

export default Navbar
