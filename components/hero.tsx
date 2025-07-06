"use client";

import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/food.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
          >
            Master the Power of AI
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
          >
            Our chatbot is designed to help you learn and master the
            fundamentals of AI, providing you with the knowledge and skills to
            excel in this rapidly evolving field.
          </Typography>
          <div>
            <a href="/chat">
              <Button variant="gradient" color="white">
                GET STARTED
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
