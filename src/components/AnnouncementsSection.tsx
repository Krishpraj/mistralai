"use client";
import React from "react";

const AnnouncementsSection: React.FC = () => {
  return (
    <section className="self-stretch px-12 pt-8 pb-8 mx-16 mb-20 w-auto bg-amber-100 max-sm:p-6 max-sm:mx-5 max-sm:mb-9">
      <div className="relative mx-auto my-0 max-w-[1151px]">
        <header className="mb-12 text-base text-black">Announcements</header>
        <h2 className="text-3xl leading-9 text-black max-sm:text-2xl max-sm:leading-8">
          <span>Announcing the all new le Chat:</span>
          <br />
          <span>Your AI assistant for life and</span>
          <br />
          <span>work.</span>
          <div className="inline-flex relative top-1 justify-center items-center ml-3 bg-orange-600 h-[27px] w-[27px]">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=&quot;9&quot; height=&quot;17&quot; viewBox=&quot;0 0 9 17&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 8px; height: 16px&quot;> <g clip-path=&quot;url(#clip0_0_364)&quot;> <path d=&quot;M8.4546 9.95845V7.43604H7.31354V9.95845H8.4546Z&quot; fill=&quot;#FFFAEB&quot;></path> <path d=&quot;M7.31473 7.4262V4.90381H6.17366V7.4262H7.31473Z&quot; fill=&quot;#FFFAEB&quot;></path> <path d=&quot;M6.17187 4.90374V2.38135H5.03081V4.90373L6.17187 4.90374Z&quot; fill=&quot;#FFFAEB&quot;></path> <path d=&quot;M7.31473 12.4804V9.95801H6.17366V12.4804H7.31473Z&quot; fill=&quot;#FFFAEB&quot;></path> <path d=&quot;M6.16889 9.95845V7.43604H0.454575L0.454575 9.95845H6.16889Z&quot; fill=&quot;#FFFAEB&quot;></path> <path d=&quot;M6.17187 15.0126V12.4902H5.03081V15.0126H6.17187Z&quot; fill=&quot;#FFFAEB&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_364&quot;> <rect width=&quot;8&quot; height=&quot;16&quot; fill=&quot;white&quot; transform=&quot;translate(0.453125 0.696777)&quot;></rect> </clipPath> </defs> </svg>",
              }}
            />
          </div>
        </h2>
        <time className="absolute right-0 bottom-0 text-base text-black">
          Feb 6, 2025
        </time>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
