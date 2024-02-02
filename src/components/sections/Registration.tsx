import Link from "next/link";
import React from "react";

const Registration = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f1fe] dark:bg-[#411972]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#debdff] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Register
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Register now for the Tech SumMIT 2024.
            </h2>
            <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
              Don&apos;t miss out on this opportunity to learn, network, and
              innovate. Register now for the Tech SumMIT 2024 and be a part of
              the future of technology.
            </p>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#9e3ffd] px-8 text-sm font-medium text-[#f7f1fe] shadow transition-colors hover:bg-[#9e3ffd]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#411972] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#debdff] dark:text-[#411972] dark:hover:bg-[#debdff]/90 dark:focus-visible:ring-[#f7f1fe]"
              href="#"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
