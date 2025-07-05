"use client";

// components
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ThemeProvider } from "@material-tailwind/react";

// sections
import Hero from "../components/hero";
import AboutProduct from "../components/about-product";
import WhyChooseUs from "../components/why-choose-us";
import CarouselFeatures from "../components/carousel-features";

export default function Campaign() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <AboutProduct />
      <WhyChooseUs />
      <CarouselFeatures />
      <Footer />
    </ThemeProvider>
  );
}
