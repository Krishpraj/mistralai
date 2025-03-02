import React from "react";
import FeatureItem from "./FeatureItem";

interface FeatureSectionProps {
  title: string;
  text: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, text }) => {
  return (
    <section className="px-0 py-8 border-b border-solid border-b-orange-200">
      <h2 className="mb-8 text-3xl leading-9 text-stone-900 max-sm:text-2xl max-sm:leading-8">
        {title}
      </h2>
      <FeatureItem text={text} />
    </section>
  );
};

export default FeatureSection;
