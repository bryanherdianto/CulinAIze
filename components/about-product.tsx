"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Recipe Generation",
    description:
      "Generate personalized recipes based on your ingredients and preferences.",
  },
  {
    icon: AcademicCapIcon,
    title: "Smart Cooking Tips",
    description:
      "Get intelligent cooking suggestions and techniques to improve your culinary skills.",
  },
  {
    icon: CheckBadgeIcon,
    title: "24/7 AI Assistant",
    description: "Access your personal cooking assistant anytime, anywhere.",
  },
];

export function AboutProduct() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="max-h-[500px] size-full object-cover scale-110"
            alt="CulinAIze AI cooking assistant"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            AI Cooking Assistant
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Transform your cooking experience with CulinAIze, the intelligent AI tool 
            that helps you create delicious meals from any ingredients. Whether you&apos;re 
            a beginner or a seasoned chef, our AI assistant will guide you through 
            every step of your culinary journey.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProduct;
