"use client";
import React from "react";
import FooterNav from "./FooterNav";

const Footer: React.FC = () => {
  return (
    <footer className="px-0 py-10 w-full bg-amber-100 max-md:px-0 max-md:py-8 max-sm:px-0 max-sm:py-6">
      <div className="flex flex-wrap gap-4 items-start self-center px-6 py-0 mx-auto my-0 mr-0 ml-6 w-full min-h-[343px] max-w-[1810px] max-md:px-4 max-md:py-0 max-md:max-w-full max-sm:px-3 max-sm:py-0">
        <div className="grow shrink pr-24 h-[215px] min-w-60 w-[393px] max-md:pb-24 max-md:max-w-full">
          <div className="w-full h-[97px] max-w-[493px] max-md:pb-24 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f?placeholderIfAbsent=true"
              alt="Logo"
              className="object-contain overflow-hidden aspect-[1.41] w-[41px]"
            />
            <div className="flex flex-wrap gap-4 items-start mt-8 w-full min-h-[37px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ca687ff19fe1bc70474f40166d2b8f59cdc95e9206b799e9cca075250398032c?placeholderIfAbsent=true"
                alt="App Store"
                className="object-contain overflow-hidden shrink-0 aspect-[3.25] w-[120px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/a1fde3a9fbf13a0bf2891394073d924da79366eba9c3893385afadc3ad5958af?placeholderIfAbsent=true"
                alt="Google Play"
                className="object-contain overflow-hidden shrink-0 aspect-[3.25] w-[120px] "
              />
            </div>
          </div>
          <p className="mt-24 text-xs leading-6 text-stone-900 max-md:mt-10">
        Mistral AI © 2025
      </p>
        </div>
        <div className="grow shrink ml-20 min-h-0 min-w-60 w-[708px] max-md:pb-24 max-md:max-w-full">
          <FooterNav />
          <div className="flex flex-wrap gap-5 justify-between mt-14 w-full max-w-[739px] max-md:mt-10 max-md:max-w-full">
            <button className="flex overflow-hidden gap-4 self-start py-2 text-xs leading-6 whitespace-nowrap border-t border-black bg-opacity-0 shadow-[0px_0px_0px_rgba(0,0,0,0)] text-stone-900">
              <span>EN</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/5bf1fb2374d509980aecf9471977206fabb7645c0b9ac5f5d8a0bbb4cce9e9ed?placeholderIfAbsent=true"
                alt="Dropdown arrow"
                className="object-contain overflow-hidden shrink-0 my-auto aspect-[1.22] w-[11px]"
              />
            </button>
            <div className="flex gap-2.5 items-start min-h-[38px]">
              <a href="#">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/ee1c4f127fd6dceef6a1d1e0030e22219cf6f64a4287f0272a46a4dc7915d529?placeholderIfAbsent=true"
                  alt="Social media"
                  className="object-contain overflow-hidden shrink-0 aspect-square w-[38px]"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/988e45b569fea930bfc428fb49cd6652850c89c3992e587a471651935a935b5e?placeholderIfAbsent=true"
                  alt="Social media"
                  className="object-contain overflow-hidden shrink-0 aspect-square w-[38px]"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/9982380579f4d072e7836d4c481a8566a933c09fffce989433e2cea1e6ddd19c?placeholderIfAbsent=true"
                  alt="Social media"
                  className="object-contain overflow-hidden shrink-0 aspect-square w-[38px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
