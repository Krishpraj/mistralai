"use client";
import React from "react";
import MarqueeTextItem from "./MarqueeTextItem";

const MarqueeText: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex gap-16 px-0 py-16 text-6xl font-light leading-snug whitespace-nowrap text-stone-900 w-[200%] max-md:gap-10 max-md:px-0 max-md:py-12 max-md:text-5xl max-md:leading-tight max-sm:gap-8 max-sm:px-0 max-sm:py-10 max-sm:text-4xl max-sm:leading-tight"
        style={{
          animation: 'marquee 20s linear infinite',
        }}>
        <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
        />
        <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
        />
        <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
          <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
          <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
          <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
          <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
          <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
          <MarqueeTextItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/eff08a67362445de91f2102ece2f90f5/10d53b7672e53270a4785f15af6c5fcfdf548343851e88784a9488955795654f"
          text="One platform. Many uses. For all humans."
          className="mr-5"
        />
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeText;
