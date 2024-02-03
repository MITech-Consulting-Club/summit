// Timeline.tsx
import Image from "next/image";
import React from "react";

interface TimelineEvent {
  date: Date;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  events: TimelineEvent[];
}

interface TimelineItemProps {
  event: TimelineEvent;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLeft }) => {
  const eventTime = `${event.date.toLocaleDateString()} ${event.date
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase()}`;
  return isLeft ? (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-end w-full mx-auto">
        <div className="w-1/2 pl-8">
          <div className="relative flex-1 bg-white rounded-lg shadow mb-8 dark:bg-slate-950">
            <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
              <div className="h-10 origin-top-right transform -rotate-45 bg-purple-600 dark:bg-purple-500 block drop-shadow-lg"></div>
            </div>
            <div className="relative z-20 p-6">
              <div className="absolute top-0 left-0 inline-block px-2 py-2  dark:bg-purple-500 bg-purple-600 rounded-br-lg rounded-tl-lg">
                <span className="text-xs text-gray-100 ">{eventTime}</span>
              </div>
              <p className="mt-4 mb-2 text-xl font-bold text-gray-600 dark:text-gray-300">
                {event.title}
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
        <span className="text-purple-600 dark:text-gray-400">{event.icon}</span>
      </div>
    </div>
  ) : (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-start w-full mx-auto">
          <div className="w-1/2 pr-8">
            <div className="relative flex-1 bg-white rounded-lg shadow mb-8 dark:bg-slate-950">
              <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                <div className="h-10 origin-bottom-left transform -rotate-45 bg-purple-600 shadow block dark:bg-purple-500"></div>
              </div>
              <div className="relative z-20 p-6">
                <div className="absolute top-0 right-0 inline-block px-2 py-2 dark:bg-purple-500 bg-purple-600 rounded-bl-lg rounded-tr-lg">
                  <span className="text-xs text-gray-100 ">{eventTime}</span>
                </div>
                <p className="mt-4 mb-2 text-xl font-bold text-gray-600 dark:text-gray-300">
                  {event.title}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-purple-100 border border-purple-600 rounded-full dark:border-gray-700 dark:bg-gray-700 left-1/2 sm:translate-y-0">
          <span className="text-purple-600 dark:text-gray-400">
            {event.icon}
          </span>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="bg-purple-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center lg:items-start lg:flex-row my-12 lg:my-24">
        <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <p className="ml-2 text-[#411972] dark:text-[#debdff] uppercase tracking-loose">
            Working Process
          </p>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
            Working Process of Fest
          </p>
          <p className="text-sm md:text-base text-gray-50 mb-4">
            Here’s your guide to the tech fest 2021 process. Go through all the
            steps to know the exact process of the fest.
          </p>
        </div>
        <div className="ml-0 w-10/12 lg:ml-12 lg:w-2/3 sticky">
          <div className="container relative w-full h-full">
            <div className="absolute w-px h-full transform -translate-x-1/2 bg-purple-300 dark:bg-gray-600 block left-1/2"></div>
            <div className="relative wrap block overflow-hidden lg:p-10 h-full">
              {events.map((event, index) => (
                <TimelineItem
                  key={index}
                  event={event}
                  isLeft={index % 2 == 0}
                />
              ))}
            </div>
          </div>
          <img
            className="mx-auto"
            src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            alt="Timeline"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
