import React from "react";

const Schedule = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#debdff] dark:bg-[#9e3ffd]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#f7f1fe] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Schedule
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Check out the schedule for the Tech SumMIT 2024.
            </h2>
            <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
              The Tech SumMIT 2024 will be packed with exciting events and
              activities. From keynote speeches by industry leaders to hands-on
              workshops, there&apos;s something for everyone. Stay tuned for the
              detailed schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
