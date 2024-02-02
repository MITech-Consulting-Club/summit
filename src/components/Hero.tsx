import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#debdff] dark:bg-[#9e3ffd]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-5xl xl:text-6xl/none">
                Welcome to Tech SumMIT - Where Innovation Meets Opportunity
              </h1>
              <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
                Join us for a day of learning, networking, and innovation. Meet
                industry leaders, learn from the best, and take part in exciting
                competitions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#9e3ffd] px-8 text-sm font-medium text-[#f7f1fe] shadow transition-colors hover:bg-[#9e3ffd]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#411972] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#debdff] dark:text-[#411972] dark:hover:bg-[#debdff]/90 dark:focus-visible:ring-[#f7f1fe]"
                href="#"
              >
                Get Started
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-[#9e3ffd] bg-[#f7f1fe] px-8 text-sm font-medium text-[#9e3ffd] shadow-sm transition-colors hover:bg-[#debdff] hover:text-[#411972] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#411972] disabled:pointer-events-none disabled:opacity-50 dark:border-[#debdff] dark:bg-[#411972] dark:text-[#debdff] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus-visible:ring-[#f7f1fe] dark:border-gray-800"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
