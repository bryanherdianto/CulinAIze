'use client';

import React, { useState, useEffect } from 'react';
import { Navbar as MTNavbar, Collapse, IconButton, Typography, Button, Menu, MenuHandler, MenuList, MenuItem, Avatar } from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon, PowerIcon } from "@heroicons/react/24/solid";
import { createClient, Session } from '@supabase/supabase-js';

const supabaseUrl = 'https://xovecwyuxzopohszmtfx.supabase.co'
const supabaseAnonKey = 'sb_publishable_ESraJ_8BhDs7zFoJyION0Q_IKc3J0QG'
const supabase = createClient(supabaseUrl, supabaseAnonKey);


interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  isScrolling?: boolean;
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
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  // NEW: State to hold the user's session information
  const [session, setSession] = useState<Session | null>(null);

  const handleOpen = () => setOpen((cur) => !cur);

  // NEW: Function to handle user logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    // The onAuthStateChange listener will automatically update the session state and re-render
  };

  // NEW: useEffect to check auth state on load and listen for changes
  useEffect(() => {
    // Check for an initial session when the component first loads
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for future auth events (login, logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Cleanup the subscription when the component unmounts
    return () => subscription.unsubscribe();
  }, []);


  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpen(false));
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            CulinAIze
          </Typography>
        </a>
        <ul className={`ml-10 hidden items-center gap-6 lg:flex w-fit ${isScrolling ? "text-gray-900" : "text-white"}`}>
          <NavItem href="/" isScrolling={isScrolling}>Home</NavItem>
          <NavItem href="/about" isScrolling={isScrolling}>About Us</NavItem>
          <NavItem href="/contact" isScrolling={isScrolling}>Contact Us</NavItem>
          <NavItem href="/chat" isScrolling={isScrolling}>Chat</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex items-center">
          {/* Social Icons can remain here if you wish */}
          
          {/* NEW: Conditional rendering for Login button or User Menu */}
          {session ? (
            <Menu>
              <MenuHandler>
                <button className="flex items-center gap-2 cursor-pointer">
                   <Avatar src={session.user.user_metadata.avatar_url} alt="avatar" size="sm" variant="circular" />
                   <Typography variant="small" className={`font-medium ${isScrolling ? "text-gray-900" : "text-white"}`}>
                      {session.user.user_metadata.user_name}
                   </Typography>
                </button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={handleLogout} className="flex items-center gap-2 text-red-500">
                  <PowerIcon className="h-4 w-4" />
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <a href="/login">
              <Button color={isScrolling ? "gray" : "white"} size="sm">
                Login
              </Button>
            </a>
          )}
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
          {/* Mobile Nav Items can remain here */}
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
            <NavItem href="/chat">Chat</NavItem>
          </ul>
          {/* You can also add the conditional login/logout logic for mobile here */}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
