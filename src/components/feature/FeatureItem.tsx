import React from "react";
import ArrowIcon from "./ArrowIcon";

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex gap-6 items-start pr-44 max-md:pr-6 max-sm:pr-4">
      <ArrowIcon />
      <p className="text-base leading-5 text-stone-900 max-sm:text-sm max-sm:leading-5">
        {text}
      </p>
    </div>
  );
};

export default FeatureItem;
