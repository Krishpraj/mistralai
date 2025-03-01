"use client";
import React from "react";
import { FooterColumnProps } from "./types";

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="grow shrink pr-20 pb-5 min-h-[121px] w-[138px] max-md:pb-5">
      <span className="text-orange-500">{title}</span>
      {links.map((link, index) => (
        <a key={index} href="#" className="block mt-1">
          <span>{link}</span>
        </a>
      ))}
    </div>
  );
};

const FooterNav: React.FC = () => {
  const columns = [
    {
      title: "Why Mistral",
      links: ["About us", "Our customers", "Careers", "Contact us"],
    },
    {
      title: "Explore",
      links: ["AI solutions", "Partners", "Research", "Documentation"],
    },
    {
      title: "Build",
      links: ["La Plateforme", "Le Chat", "Try the API"],
    },
    {
      title: "Legal",
      links: [
        "Terms of service",
        "Privacy policy",
        "Data processing agreement",
        "Legal notice",
      ],
    },
  ];

  return (
    <nav className="flex flex-wrap gap-4 items-start max-w-full text-xs leading-5 min-h-[121px] text-stone-900 w-[739px]">
      {columns.map((column, index) => (
        <FooterColumn key={index} title={column.title} links={column.links} />
      ))}
    </nav>
  );
};

export default FooterNav;
