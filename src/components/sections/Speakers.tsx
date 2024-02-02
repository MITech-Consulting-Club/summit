import React from "react";

const Speakers = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#debdff] dark:bg-[#9e3ffd]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#f7f1fe] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Speakers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Meet the industry leaders speaking at the Tech SumMIT 2024.
            </h2>
            <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
              The Tech SumMIT 2024 will feature a lineup of distinguished
              speakers from various fields of technology. They will share their
              insights, experiences, and predictions for the future of
              technology. Stay tuned for the announcement of our speakers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Speaker 1"
                  className="w-full h-32 object-cover rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                  Speaker 1
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Details about Speaker 1
                </p>
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Speaker 2"
                  className="w-full h-32 object-cover rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                  Speaker 2
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Details about Speaker 2
                </p>
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Speaker 3"
                  className="w-full h-32 object-cover rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                  Speaker 3
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Details about Speaker 3
                </p>
              </div>
              <div className="bg-white dark:bg-[#411972] rounded-lg shadow-md p-4">
                <img
                  alt="Speaker 4"
                  className="w-full h-32 object-cover rounded-md"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                  Speaker 4
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Details about Speaker 4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
