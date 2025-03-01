"use client";
import React from "react";

const GradientFooter: React.FC = () => {
  return (
    <footer className="flex flex-col bg-amber-50 text-sm">
      <img
      srcSet="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/befd10a08a3c57af72ebd018ebf88ba6dced73e6b0c3685a0d719557e4eb90fd?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/befd10a08a3c57af72ebd018ebf88ba6dced73e6b0c3685a0d719557e4eb90fd?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/befd10a08a3c57af72ebd018ebf88ba6dced73e6b0c3685a0d719557e4eb90fd?placeholderIfAbsent=true&width=400 400w"
        className="object-contain overflow-hidden z-20 self-center mt-0 ml-px max-w-full h-auto bg-blend-normal aspect-square grow-0 mb-[-px] w-[212px] max-md:-mb-20 max-md:w-[180px] max-sm:mb-0 max-sm:w-[150px] translate-y-30"
        alt="Footer logo"
      />
      <div className="flex relative mt-0 w-full bg-amber-100 min-h-[50px] max-md:mt-0 max-md:max-w-full max-sm:-mt-10" />
      <div className="flex w-full bg-yellow-400 min-h-[50px] max-md:max-w-full" />
      <div className="flex w-full bg-amber-500 min-h-[50px] max-md:max-w-full" />
      <div className="flex w-full bg-orange-500 min-h-[50px] max-md:max-w-full" />
      <div className="flex w-full bg-orange-600 min-h-[50px] max-md:max-w-full" />
      <div className="flex w-full bg-red-600 min-h-[50px] max-md:max-w-full" />
    </footer>
  );
};

export default GradientFooter;
