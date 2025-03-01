"use client";
import React from "react";

const CareersHero: React.FC = () => {
  return (
    <section className="relative w-full h-[483px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e179466bcb2d9a027e4d4bc874d9e45a15dcdfec"
        alt="Office environment with people working"
        className="object-cover px-16 size-full max-sm:px-5"
      />
      <div className="absolute px-12 py-0 -translate-y-2/4 left-[141px] top-[366px] w-[1462px] max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0 max-sm:left-[19px] max-sm:top-[228px] max-sm:w-[1322px]">
        <div className="text-white max-w-[438px] max-sm:max-w-[295px]">
          <h2 className="mb-10 text-4xl leading-10 max-md:text-3xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
            <span>Build the future of</span>
            <br />
            <span>secure, private AI.</span>
          </h2>
          <p className="text-base leading-5 max-sm:text-sm">
            <span>Now seeking: Insatiably curious AI enthusiasts with an</span>
            <br />
            <span>entrepreneurial spirit.</span>
          </p>
        </div>
        <a
          href="#"
          className="flex absolute bottom-0 right-12 gap-3 items-center px-0 py-2 text-base text-white border-b border-solid cursor-pointer border-b-white max-md:relative max-md:right-auto max-md:bottom-auto max-md:mt-6"
        >
          <span>View open roles</span>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=&quot;13&quot; height=&quot;17&quot; viewBox=&quot;0 0 13 17&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 12px; height: 16px&quot;> <g clip-path=&quot;url(#clip0_0_339)&quot;> <path d=&quot;M11.5875 6.16211H7.89453V9.20051H11.5875V6.16211Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M7.89022 3.13232H4.19727V6.17071H7.89022V3.13232Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M4.19296 0.09375H0.5V3.13214H4.19296V0.09375Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M7.89022 9.20068H4.19727V12.2391H7.89022V9.20068Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M4.19296 12.231H0.5V15.2693H4.19296V12.231Z&quot; fill=&quot;#FA520F&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_339&quot;> <rect width=&quot;12&quot; height=&quot;16&quot; fill=&quot;white&quot; transform=&quot;translate(0.5 0.09375)&quot;></rect> </clipPath> </defs> </svg>",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default CareersHero;
