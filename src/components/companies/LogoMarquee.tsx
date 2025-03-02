"use client";
import * as React from "react";
import LogoContainer from "./LogoContainer";

const LogoMarquee: React.FC = () => {
  return (
    <section className="w-full py-20 px-[200px]">
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          <LogoContainer />
         
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
