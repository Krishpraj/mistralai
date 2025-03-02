import React from "react";
import ArrowIcon from "./ArrowIcon";

const AnnouncementTitle: React.FC = () => {
  return (
    <h2 className="text-3xl leading-9 text-black max-sm:text-2xl max-sm:leading-8">
      Announcing the all new le Chat:
      <br />
      Your AI assistant for life and
      <br />
      work.
      <span className="inline-flex relative top-1 justify-center items-center ml-3 bg-orange-600 h-[27px] w-[27px]">
        <ArrowIcon />
      </span>
    </h2>
  );
};

export default AnnouncementTitle;
