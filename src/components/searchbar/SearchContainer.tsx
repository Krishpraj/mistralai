"use client";
import * as React from "react";

/**
 * SearchContainer component that displays a search input with a button
 */
function SearchContainer() {
  return (
    <form
      className="flex items-center py-3 pr-3 pl-6 mx-auto bg-amber-50 shadow max-w-[539px] max-sm:mx-5 fixed bottom-10 z-50 left-0 right-0"
      onSubmit={(e) => e.preventDefault()}
    >
      <SearchInput />
      <SearchButton />
    </form>
  );
}

/**
 * SearchInput component for the search field
 */
function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Talk to le Chat"
      className="flex-1 text-xs border-[none] text-stone-900 text-opacity-50 bg-transparent outline-none"
      aria-label="Search input"
    />
  );
}

/**
 * SearchButton component with the search icon
 */
function SearchButton() {
  return (
    <button
      type="submit"
      className="flex justify-center items-center p-1.5 bg-orange-600 h-[26px] w-[26px]"
      aria-label="Search"
    >
      <SearchIcon />
    </button>
  );
}

/**
 * SearchIcon component that renders the SVG icon
 */
function SearchIcon() {
  return (
    <div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="search-icon"
        style={{ width: "14px", height: "14px", transform: "rotate(-90deg)" }}  // Changed from 90deg to 180deg
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
  );
}

export default SearchContainer;
