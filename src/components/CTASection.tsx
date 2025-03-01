"use client";
import React from "react";

const CTAButton: React.FC<{ text: string; iconSvg: string }> = ({
  text,
  iconSvg,
}) => {
  return (
    <a
      href="#"
      className="flex gap-3 items-center px-0 py-2 text-base border-b border-solid cursor-pointer border-b-stone-900 text-stone-900 max-sm:text-sm"
    >
      <span>{text}</span>
      <div dangerouslySetInnerHTML={{ __html: iconSvg }} />
    </a>
  );
};

const CTASection: React.FC = () => {
  return (
    <section className="px-12 py-16 bg-amber-50 max-sm:px-4 max-sm:py-10">
      <div className="mx-auto my-0 text-center max-w-[1151px]">
        <h2 className="mb-9 text-5xl text-stone-900 max-md:text-5xl max-sm:text-3xl">
          The next chapter of AI is yours.
        </h2>
        <div className="flex gap-8 justify-center max-md:flex-col max-md:items-center">
          <CTAButton
            text="Start building with Mistral AI"
            iconSvg='<svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 12px; height: 16px"> <g clip-path="url(#clip0_0_319)"> <path d="M11.15 6.34961H7.45703V9.38801H11.15V6.34961Z" fill="#FA520F"></path> <path d="M7.45272 3.31982H3.75977V6.35821H7.45272V3.31982Z" fill="#FA520F"></path> <path d="M3.75546 0.28125H0.0625V3.31964H3.75546V0.28125Z" fill="#FA520F"></path> <path d="M7.45272 9.38818H3.75977V12.4266H7.45272V9.38818Z" fill="#FA520F"></path> <path d="M3.75546 12.4185H0.0625V15.4568H3.75546V12.4185Z" fill="#FA520F"></path> </g> <defs> <clipPath id="clip0_0_319"> <rect width="12" height="16" fill="white" transform="translate(0.0625 0.28125)"></rect> </clipPath> </defs> </svg>'
          />
          <CTAButton
            text="Talk to an expert"
            iconSvg='<svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 12px; height: 16px"> <g clip-path="url(#clip0_0_327)"> <path d="M11.5653 6.34961H7.87231V9.38801H11.5653V6.34961Z" fill="#FA520F"></path> <path d="M7.868 3.31982H4.17505V6.35821H7.868V3.31982Z" fill="#FA520F"></path> <path d="M4.17074 0.28125H0.477783V3.31964H4.17074V0.28125Z" fill="#FA520F"></path> <path d="M7.868 9.38818H4.17505V12.4266H7.868V9.38818Z" fill="#FA520F"></path> <path d="M4.17074 12.4185H0.477783V15.4568H4.17074V12.4185Z" fill="#FA520F"></path> </g> <defs> <clipPath id="clip0_0_327"> <rect width="12" height="16" fill="white" transform="translate(0.477783 0.28125)"></rect> </clipPath> </defs> </svg>'
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
