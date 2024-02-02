import React from "react";

const Competitions = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f1fe] dark:bg-[#411972]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#debdff] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Competitions
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Learn about the exciting competitions at the Tech SumMIT 2024.
            </h2>
            <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
              The Tech SumMIT 2024 will host a variety of competitions designed
              to challenge and inspire participants. From coding challenges to
              innovation contests, there&apos;s a competition for everyone. Stay
              tuned for more details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
