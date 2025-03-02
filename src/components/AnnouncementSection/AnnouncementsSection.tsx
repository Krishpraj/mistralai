"use client";

import React from "react";
import AnnouncementHeader from "./AnnouncementHeader";
import AnnouncementTitle from "./AnnouncementTitle";
import AnnouncementDate from "./AnnouncementDate";

const AnnouncementsSection: React.FC = () => {
  return (
    <section className="relative self-stretch px-12 pt-8 pb-8 mx-24 mb-20 w-auto bg-amber-100 max-sm:p-6 max-sm:mx-5 max-sm:mb-9">
      <div className="relative mx-auto my-0 max-w-[1151px]">
        <AnnouncementHeader />
        <AnnouncementTitle />
        <AnnouncementDate />
      </div>
    </section>
  );
};

export default AnnouncementsSection;
