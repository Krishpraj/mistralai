"use client";
import React from "react";
import { FeatureItemProps } from "./types";

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  iconSvg,
}) => {
  return (
    <article className="px-0 py-8 border-t border-solid border-t-orange-200">
      <h3 className="mb-8 text-3xl leading-9 text-stone-900 max-sm:text-2xl max-sm:leading-8">
        {title}
      </h3>
      <div className="flex gap-6 items-start pr-44 max-md:pr-6 max-sm:pr-4">
        <div dangerouslySetInnerHTML={{ __html: iconSvg }} />
        <p className="text-base leading-5 text-stone-900 max-sm:text-sm max-sm:leading-5">
          {description}
        </p>
      </div>
    </article>
  );
};

export default FeatureItem;
