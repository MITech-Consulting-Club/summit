import React from "react";
import Image from 'next/image';
import speaker1 from '../../person1.jpg';

const Speakers = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-12 md:px-24 lg:px-32 bg-[#debdff] dark:bg-[#9e3ffd]">
      <div className="container max-w-full px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-[#f7f1fe] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
              Speakers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
              Meet the industry leaders speaking at the Tech SumMIT 2024
            </h2>
            <p className="max-w-full text-[#411972] pt-1 pb-2 md:text-xl dark:text-[#debdff]">
              The Tech SumMIT 2024 will feature a lineup of distinguished
              speakers from various fields of technology. They will share their
              insights, experiences, and predictions for the future of
              technology. Stay tuned for the announcement of our speakers.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="bg-white w-1/4 dark:bg-[#411972] rounded-lg shadow-md p-4">
                <Image
                  alt="John Smith"
                  className="w-full h-full object-cover object-top rounded-md"
                  height="200"
                  src={speaker1}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg pt-1 font-semibold text-[#411972] dark:text-[#debdff]">
                  John Smith
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  John Smith is the founder and CEO of Hello.com
                </p>
              </div>
              <div className="bg-white w-1/4 dark:bg-[#411972] rounded-lg shadow-md p-4">
                <Image
                  alt="John Smith"
                  className="w-full h-full object-cover object-top rounded-md"
                  height="200"
                  src={speaker1}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg pt-1 font-semibold text-[#411972] dark:text-[#debdff]">
                  Tom Jones
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Tom Jones is the
                </p>
              </div>
              <div className="bg-white w-1/4 dark:bg-[#411972] rounded-lg shadow-md p-4">
                <Image
                  alt="John Smith"
                  className="w-full h-full object-cover object-top rounded-md"
                  height="200"
                  src={speaker1}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg pt-1 font-semibold text-[#411972] dark:text-[#debdff]">
                  Joe Smith
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Joe Smith is the
                </p>
              </div>
              <div className="bg-white w-1/4 dark:bg-[#411972] rounded-lg shadow-md p-4">
                <Image
                  alt="John Smith"
                  className="w-full h-full object-cover object-top rounded-md"
                  height="200"
                  src={speaker1}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <h3 className="mt-4 text-lg pt-1 font-semibold text-[#411972] dark:text-[#debdff]">
                  Tom Smith
                </h3>
                <p className="text-[#411972] dark:text-[#debdff]">
                  Tom Smith is the
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
