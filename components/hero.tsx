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
            Master Cooking with AI
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
          >
            Our chatbot is designed to help you learn and master the
            arts of cooking. Whether you're a beginner or an experienced chef, it can provide
            personalized guidance to elevate your culinary skills.
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
