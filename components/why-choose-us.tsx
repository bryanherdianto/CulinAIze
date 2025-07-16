"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 size-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Why choose CulinAIze?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Discover the unique advantages and features that make CulinAIze the perfect 
        AI cooking companion for your culinary journey.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="AI-Powered Intelligence">
            Experience cutting-edge AI technology that understands your cooking 
            preferences and dietary requirements.
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Smart Recipe Suggestions">
                Get personalized recipe recommendations based on your available 
                ingredients and cooking skill level.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="Nutritional Analysis">
                Receive detailed nutritional information and dietary insights 
                for every recipe you create.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Cooking Techniques">
              Learn proper cooking techniques and methods with step-by-step 
              AI guidance tailored to your experience level.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="Ingredient Substitutions">
                Discover smart ingredient alternatives and substitutions when 
                you&apos;re missing items from your pantry.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={UsersIcon} title="Meal Planning">
                Plan your weekly meals efficiently with AI-powered suggestions 
                based on your schedule and preferences.
              </Option>
            </div>
            <Option icon={CloudArrowDownIcon} title="Recipe Storage">
              Save and organize your favorite recipes with smart categorization 
              and easy search functionality.
            </Option>
          </div>
          <BackgroundCard title="24/7 Culinary Support">
            Get instant cooking help anytime with our AI assistant that never 
            sleeps and is always ready to help.
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
