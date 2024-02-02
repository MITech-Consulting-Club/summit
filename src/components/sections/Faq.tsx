import React from 'react'

const Faq = () => {
  return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#debdff] dark:bg-[#9e3ffd]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#f7f1fe] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
                  Find answers to frequently asked questions about the Tech
                  SumMIT 2024.
                </h2>
                <div className="mt-8 space-y-4 text-left">
                  <div>
                    <h3 className="text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                      Question 1
                    </h3>
                    <p className="text-[#411972] dark:text-[#debdff]">
                      Answer to Question 1
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                      Question 2
                    </h3>
                    <p className="text-[#411972] dark:text-[#debdff]">
                      Answer to Question 2
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                      Question 3
                    </h3>
                    <p className="text-[#411972] dark:text-[#debdff]">
                      Answer to Question 3
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#411972] dark:text-[#debdff]">
                      Question 4
                    </h3>
                    <p className="text-[#411972] dark:text-[#debdff]">
                      Answer to Question 4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Faq