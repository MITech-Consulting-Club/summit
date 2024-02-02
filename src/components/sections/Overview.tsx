import React from "react";

const Overview = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f1fe] dark:bg-[#411972]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#debdff] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Event Overview
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Learn about the Tech SumMIT 2024, its goals, and what makes it
              unique.
            </h2>
            <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
              The Tech SumMIT 2024 is a premier event for technology
              enthusiasts, professionals, and students. It&apos;s a platform to
              learn about the latest trends in technology, network with industry
              leaders, and participate in exciting competitions. The event will
              feature keynote speeches, panel discussions, workshops, and much
              more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
