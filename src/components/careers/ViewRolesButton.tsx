"use client";
import React from "react";

const ViewRolesButton = () => {
  const handleClick = () => {
    // Handle button click - can be implemented based on requirements
    console.log("View open roles clicked");
  };

  return (
    <button
      onClick={handleClick}
      className="flex absolute bottom-0 right-12 gap-3 items-center px-0 py-2 text-base text-white border-b border-solid cursor-pointer border-b-white max-md:relative max-md:right-auto max-md:bottom-auto max-md:mt-6"
      aria-label="View open roles"
    >
      <span>View open roles</span>
      <svg
        width="13"
        height="17"
        viewBox="0 0 13 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3 h-4"
      >
        <g clipPath="url(#clip0_0_339)">
          <path
            d="M11.5875 6.16211H7.89453V9.20051H11.5875V6.16211Z"
            fill="#FA520F"
          ></path>
          <path
            d="M7.89022 3.13232H4.19727V6.17071H7.89022V3.13232Z"
            fill="#FA520F"
          ></path>
          <path
            d="M4.19296 0.09375H0.5V3.13214H4.19296V0.09375Z"
            fill="#FA520F"
          ></path>
          <path
            d="M7.89022 9.20068H4.19727V12.2391H7.89022V9.20068Z"
            fill="#FA520F"
          ></path>
          <path
            d="M4.19296 12.231H0.5V15.2693H4.19296V12.231Z"
            fill="#FA520F"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_0_339">
            <rect
              width="12"
              height="16"
              fill="white"
              transform="translate(0.5 0.09375)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default ViewRolesButton;
