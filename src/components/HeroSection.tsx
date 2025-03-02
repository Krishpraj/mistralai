"use client";
import React from "react";
import Navbar from "./Navbar";
import { LinkItemProps } from "./types";

const LinkItem: React.FC<LinkItemProps> = ({ text, iconSvg }) => {
  return (
    <a
      href="#"
      className="flex gap-3 items-center pb-3 text-sm text-white border-b border-solid border-b-white"
    >
      <span>{text}</span>
      <div dangerouslySetInnerHTML={{ __html: iconSvg as string }} />
    </a>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden relative flex-col items-center px-20 pt-11 pb-28 w-full min-h-[700px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
      src="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/54f9f45fc7867d2030b9dc75792edfc48ecaa2503e01abf104eb6b6d7b16a9af?placeholderIfAbsent=true"
      alt="Hero background"
      className="object-cover absolute inset-0 size-full"
      />
      <Navbar />
      <div className="relative pt-24 text-center z-[1] max-md:pt-16">
       
        <h1 className="mt-[50px] mx-auto my-0 text-8xl text-white leading-[90px] max-w-full whitespace-nowrap max-md:px-5 max-md:py-0 max-md:text-6xl max-md:leading-[70px] max-sm:text-4xl max-sm:leading-[50px]">
          Frontier AI. In Your Hands.
        </h1>
        <p className="mt-12 text-2xl text-white max-sm:text-lg">
          Configurable AI for all builders.
        </p>
        <div className="flex items-center py-3 pr-3 pl-6 mx-auto my-8 bg-amber-50 shadow max-w-[539px] max-sm:mx-5 max-sm:my-8">
          <input
            type="text"
            placeholder="Talk to le Chat"
            className="flex-1 text-xs border-[none] text-stone-900 text-opacity-50"
          />
            <button className="flex justify-center items-center p-1.5 bg-orange-600 h-[26px] w-[26px] z-50">
            <div>
              <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon"
              style={{ width: "14px", height: "14px", transform: "rotate(360deg)" }}
              >
              <g clipPath="url(#clip0_0_107)">
                <mask
                id="mask0_0_107"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="14"
                height="14"
                >
                <path d="M14 0H0V14H14V0Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_0_107)">
                <path
                  d="M7 10.4993V12.8327H9.33333V10.4993H7ZM9.33333 8.16601V10.4993H11.6667V8.16601H9.33333ZM11.6667 5.83268V8.16601H14L14 5.83268H11.6667ZM9.33333 3.49935V5.83268H11.6667V3.49935L9.33333 3.49935ZM7 1.16602V3.49935H9.33333V1.16602L7 1.16602ZM7 5.83268V8.16602L9.33333 8.16601V5.83268H7ZM4.66667 5.83268V8.16602H7V5.83268L4.66667 5.83268ZM2.3333 5.83268V8.16602H4.66667V5.83268H2.3333ZM0 5.83268V8.16602H2.3333V5.83268H0Z"
                  fill="white"
                ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_0_107">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="matrix(0 1 -1 0 14 0)"
                ></rect>
                </clipPath>
              </defs>
              </svg>
            </div>
            </button>
        </div>
        <div className="flex gap-8 justify-center mt-12 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
          <LinkItem
            text="Enterprise deployments"
            iconSvg='<svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 12px; height: 16px"> <g clip-path="url(#clip0_0_90)"> <path d="M11.2594 6.56848H7.56641V9.60688H11.2594V6.56848Z" fill="#1F1F1F"></path> <path d="M7.5621 3.53845H3.86914V6.57684H7.5621V3.53845Z" fill="#1F1F1F"></path> <path d="M3.86483 0.5H0.171875V3.53839H3.86483V0.5Z" fill="#1F1F1F"></path> <path d="M7.5621 9.60699H3.86914V12.6454H7.5621V9.60699Z" fill="#1F1F1F"></path> <path d="M3.86483 12.637H0.171875V15.6754H3.86483V12.637Z" fill="#1F1F1F"></path> </g> <defs> <clipPath id="clip0_0_90"> <rect width="12" height="16" fill="white" transform="translate(0.171875 0.5)"></rect> </clipPath> </defs> </svg>'
          />
          <LinkItem
            text="APIs on la Plateforme"
            iconSvg='<svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 12px; height: 16px"> <g clip-path="url(#clip0_0_98)"> <path d="M12.0153 6.56848H8.32239V9.60688H12.0153V6.56848Z" fill="#1F1F1F"></path> <path d="M8.31808 3.53845H4.62512V6.57684H8.31808V3.53845Z" fill="#1F1F1F"></path> <path d="M4.62081 0.5H0.927856V3.53839H4.62081V0.5Z" fill="#1F1F1F"></path> <path d="M8.31808 9.60699H4.62512V12.6454H8.31808V9.60699Z" fill="#1F1F1F"></path> <path d="M4.62081 12.637H0.927856V15.6754H4.62081V12.637Z" fill="#1F1F1F"></path> </g> <defs> <clipPath id="clip0_0_98"> <rect width="12" height="16" fill="white" transform="translate(0.927856 0.5)"></rect> </clipPath> </defs> </svg>'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
