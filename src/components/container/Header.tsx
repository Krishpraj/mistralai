"use client";
import React from "react";
import ColorBars from "./ColorBars";
import LogoIcon from "./LogoIcon";
import AppStoreButtons from "./AppStoreButtons";

const Header: React.FC = () => {
  return (
    <header className="flex relative items-center pr-5 mx-52 mt-12 bg-amber-100 h-[125px] w-[calc(100%_-_416px)] max-sm:flex-col max-sm:p-4 max-sm:ml-24 max-sm:h-auto">
      <div className="relative h-[125px] w-[125px] max-sm:mb-4 max-sm:w-20 max-sm:h-20">
      <ColorBars />
      <LogoIcon />
      </div>

      <div className="flex flex-1 justify-between items-center px-6 py-0 max-md:px-4 max-md:py-0 max-sm:flex-col max-sm:gap-4 max-sm:mr-2.5 max-sm:text-center">
      <p className="text-lg leading-7 text-stone-900 max-md:text-base max-md:leading-6 max-sm:text-sm max-sm:leading-5">
      Le Chat: Your AI assistant for life and work.
      </p>

      <AppStoreButtons />
      </div>

      <img
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1935cec3ae9d36450b764aa3de984141078d9028"
      alt="Le Chat mascot"
      className="object-contain h-[125px] w-[185px] max-sm:mt-4 max-sm:h-auto max-sm:w-[100px]"
      />
    </header>
  );
};

export default Header;
