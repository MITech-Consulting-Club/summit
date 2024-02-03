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
import Hero from "./Hero";
import Overview from "./sections/Overview";
import Faq from "./sections/Faq";
import Schedule from "./sections/Schedule";
import Competitions from "./sections/Competitions";
import Speakers from "./sections/Speakers";
import Sponsors from "./sections/Sponsors";
import { FaHome, FaMedal, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineSchedule } from "react-icons/md";
import { BsQuestionSquare } from "react-icons/bs";
import { SiGithubsponsors } from "react-icons/si";
import { FcPodiumWithSpeaker } from "react-icons/fc";

export function HomePage() {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen bg-[#f7f1fe] dark:bg-[#411972]"
    >
      <header className="flex items-center justify-between px-4 py-2 border-b border-[#9e3ffd]">
        <Link className="flex items-center gap-2" href="#home">
          <MountainIcon className="h-6 w-6 text-[#9e3ffd]" />
          <span className="hidden sm:flex text-lg font-semibold text-[#411972] dark:text-[#debdff]">
            Tech SumMIT 2024
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="grid grid-cols-3 sm:flex sm:flex-row sm:items-centered sm:justi-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#home"
                >
                  <i className="flex sm:hidden">
                    <FaHome />
                  </i>
                  <div className="hidden sm:flex">Home</div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#schedule"
                >
                  <i className="flex sm:hidden">
                    <MdOutlineSchedule />
                  </i>
                  <div className="hidden sm:flex">Schedule</div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#competitions"
                >
                  <i className="flex sm:hidden">
                    <FaMedal />
                  </i>
                  <div className="hidden sm:flex">Competitons</div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#speakers"
                >
                  <i className="flex sm:hidden">
                    <FcPodiumWithSpeaker />
                  </i>
                  <div className="hidden sm:flex">Speakers</div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#sponsors"
                >
                  <i className="flex sm:hidden">
                    <SiGithubsponsors />
                  </i>
                  <div className="hidden sm:flex">Sponsors</div>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-[#f7f1fe] px-4 py-2 text-sm font-medium transition-colors hover:bg-[#debdff] hover:text-[#411972] focus:bg-[#debdff] focus:text-[#411972] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#debdff]/50 data-[state=open]:bg-[#debdff]/50 dark:bg-[#411972] dark:hover:bg-[#9e3ffd] dark:hover:text-[#f7f1fe] dark:focus:bg-[#9e3ffd] dark:focus:text-[#f7f1fe] dark:data-[active]:bg-[#9e3ffd]/50 dark:data-[state=open]:bg-[#9e3ffd]/50"
                  href="#faq"
                >
                  <i className="flex sm:hidden">
                    <BsQuestionSquare />
                  </i>
                  <div className="hidden sm:flex">FAQ</div>
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
        <div id="hero">
          <Hero />
        </div>
        <div id="overview">
          <Overview />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="competitions">
          <Competitions />
        </div>
        <div id="speakers">
          <Speakers />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </main>
      <footer className="flex items-center justify-center py-4 border-t border-[#9e3ffd]">
        <div className="flex items-center gap-6 px-5">
          <Link href="">
            <FaLinkedin size={35} />
          </Link>
          <Link href="">
            <FaInstagramSquare size={35} />
          </Link>
          <Link href="">
            <FaFacebook size={35} />
          </Link>
          <Link href="">
            <FaSquareXTwitter size={35} />
          </Link>
        </div>
        <p className="text-[#411972] dark:text-[#f7f1fe] inset-y-0 right-0 px-5">
          &copy; {new Date().getFullYear()} Tech SumMIT 2024. All rights
          reserved.
        </p>
      </footer>
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
