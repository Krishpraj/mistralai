"use client";
import * as React from "react";
import CareersContent from "./CareersContent";
import ViewRolesButton from "./ViewRolesButton";

function Careers() {
  return (
    <section className="relative w-full h-[483px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e179466bcb2d9a027e4d4bc874d9e45a15dcdfec"
        className="object-cover px-24 size-full max-sm:px-5"
        alt="Office environment with people working"
      />
      <div className="absolute px-12 py-0 -translate-y-2/4 left-[141px] top-[366px] w-[1180px] max-md:px-6 max-md:py-0 max-sm:px-4 max-sm:py-0 max-sm:left-[19px] max-sm:top-[228px] max-sm:w-[1322px]">
        <CareersContent />
        <ViewRolesButton />
      </div>
    </section>
  );
}

export default Careers;
