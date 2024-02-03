import React from "react";

const Sponsors = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-12 md:px-24 lg:px-32 bg-[#f7f1fe] dark:bg-[#411972]">
      <div className="container max-w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#debdff] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Sponsors
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Learn about the sponsors of the Tech SumMIT 2024.
            </h2>
            <p className="flex max-w-full text-[#411972] md:text-xl dark:text-[#debdff]">
              The Tech SumMIT 2024 is made possible by the generous support of
              our sponsors. We are proud to partner with companies that share
              our vision for the future of technology. Stay tuned for the
              announcement of our sponsors.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Sponsor 1"
                  className="w-full h-16 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Sponsor 2"
                  className="w-full h-16 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Sponsor 3"
                  className="w-full h-16 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Sponsor 4"
                  className="w-full h-16 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Sponsor 5"
                  className="w-full h-16 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Sponsor 6"
                  className="w-full h-16 object-cover"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/100",
                    objectFit: "cover",
                  }}
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
