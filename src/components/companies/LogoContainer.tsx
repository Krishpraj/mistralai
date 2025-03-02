"use client";
import * as React from "react";

const logos = [
  "https://cdn.builder.io/api/v1/image/assets/TEMP/656ada40cbaeda3560a4f786d16853070c256fb9",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/7d2cc0e029e61a83286f92c2d19f536c1e156ba7",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a86617e31bb4f0dd1580852b3fbf144a75c01b4c",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/b839fe3a79d6b9ab3a5b048e335c5f80fab691ff",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/44b13dedb4f235f987885b1451997cda5f13d05c",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/5959c01728e7417c68043cd0b309c8209c5f22bb",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d10ea000d502cbc493e87000edd28d1fa220f8f6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/7f4d279103dfdc7a51b25bf216c1d202027c1e37",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/656ada40cbaeda3560a4f786d16853070c256fb9",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/7d2cc0e029e61a83286f92c2d19f536c1e156ba7",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/a86617e31bb4f0dd1580852b3fbf144a75c01b4c",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/b839fe3a79d6b9ab3a5b048e335c5f80fab691ff",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/44b13dedb4f235f987885b1451997cda5f13d05c",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/5959c01728e7417c68043cd0b309c8209c5f22bb",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d10ea000d502cbc493e87000edd28d1fa220f8f6",
  "https://cdn.builder.io/api/v1/image/assets/TEMP/7f4d279103dfdc7a51b25bf216c1d202027c1e37",
];

function LogoContainer() {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
      <div className="inline-flex gap-4 items-center animate-marquee">
        {/* First set of logos */}
        {logos.map((url, index) => (
          <img
            key={`first-${index}`}
            src={url}
            className="object-contain w-auto h-11"
            alt="Logo"
          />
        ))}
        {/* Duplicate logos for seamless scrolling */}
        {logos.map((url, index) => (
          <img
            key={`second-${index}`}
            src={url}
            className="object-contain w-auto h-11"
            alt="Logo"
          />
        ))}
      </div>
    </div>
  );
}

export default LogoContainer;
