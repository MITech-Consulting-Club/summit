/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/gzxn3o1sZf6
 */
import Link from "next/link";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f1fe] dark:bg-[#411972]">
      <header className="flex items-center justify-between px-4 py-2 border-b border-[#9e3ffd]">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6 text-[#9e3ffd]" />
          <span className="text-lg font-semibold text-[#411972] dark:text-[#debdff]">
            Tech SumMIT 2024
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  Schedule
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  Competitions
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  Speakers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  Sponsors
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  FAQ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#"
                >
                  Register
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          className="border-[#9e3ffd] text-[#9e3ffd] hover:bg-[#9e3ffd] hover:text-[#f7f1fe] dark:border-[#debdff] dark:text-[#debdff] dark:hover:bg-[#debdff] dark:hover:text-[#411972]"
          variant="outline"
        >
          Register
        </Button>
      </header>
      <main className="flex-1">
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
                    Join us for a day of learning, networking, and innovation.
                    Meet industry leaders, learn from the best, and take part in
                    exciting competitions.
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
                  learn about the latest trends in technology, network with
                  industry leaders, and participate in exciting competitions.
                  The event will feature keynote speeches, panel discussions,
                  workshops, and much more.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  activities. From keynote speeches by industry leaders to
  hands-on workshops, there&apos;s something for everyone. Stay tuned
                  for the detailed schedule.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  The Tech SumMIT 2024 will host a variety of competitions
                  designed to challenge and inspire participants. From coding
  challenges to innovation contests, there&apos;s a competition for
                  everyone. Stay tuned for more details.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  speakers from various fields of technology. They will share
                  their insights, experiences, and predictions for the future of
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f1fe] dark:bg-[#411972]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#debdff] px-3 py-1 text-sm text-[#411972] dark:bg-[#9e3ffd] dark:text-[#f7f1fe]">
                  Sponsors
                </div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#411972] dark:text-[#debdff] sm:text-4xl">
                  Learn about the sponsors of the Tech SumMIT 2024.
                </h2>
                <p className="max-w-[600px] text-[#411972] md:text-xl dark:text-[#debdff]">
                  The Tech SumMIT 2024 is made possible by the generous support
                  of our sponsors. We are proud to partner with companies that
                  share our vision for the future of technology. Stay tuned for
                  the announcement of our sponsors.
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
                  innovate. Register now for the Tech SumMIT 2024 and be a part
                  of the future of technology.
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
      </main>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
