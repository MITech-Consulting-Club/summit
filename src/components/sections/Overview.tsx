import React from "react";

const Overview = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f1fe] dark:bg-[#411972]">
      <div className="container mx-auto px-4">
        <div className="flex flex-row lg:flex-row md: flex-col items-center justify-between">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1593642632822-9a4b3b1f6c2d?auto=format&fit=crop&w=800&q=80"
              alt="About Us Img"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#411972] dark:text-[#f7f1fe]">
              About Us
            </h2>
            <p className="text-lg lg:text-xl mt-4 text-[#411972] dark:text-[#f7f1fe]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula auctor neque, sit amet ultrices sem lacinia nec. Donec
              venenatis, metus sit amet tincidunt volutpat, justo libero
              fermentum odio, ac scelerisque odio metus et nisl.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
