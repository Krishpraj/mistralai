import React from "react";
import FeatureTitle from "./FeatureTitle";
import PatternSVG from "./PatternSVG";
import FeatureSection from "./FeatureSection";

const AIFeatureShowcase: React.FC = () => {
  const features = [
    {
      title: "Customizable, from pre-training to the real world.",
      text: "World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.",
    },
    {
      title: "Private and portable.",
      text: "A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more.",
    },
    {
      title: "Transparent and trustworthy.",
      text: "Strongest global contributor to open source AI and AI policy. Mistral AI is the world's greenest and leading independent AI lab.",
    },
    {
      title: "Deeply engaged solutioning and value delivery.",
      text: "Hands-on assistance from the world's best AI engineers and scientists across deployment, solutioning, safety, and beyond.",
    },
    {
      title: "Delightful interfaces.",
      text: "Bringing frontier intelligence to life with intuitive user experiences across life and work.",
    },
  ];

  return (
    <section className="flex gap-12 px-24 py-6 pr-5  mx-auto my-0 bg-amber-50 max-w-[1637px] max-md:flex-col max-md:p-6 max-sm:p-4">
      <header className="pr-28 mr-8 flex-[0_0_300px] max-md:flex-none max-md:w-full">
        <FeatureTitle />
        <div className="mt-0 mr-16 max-sm:hidden">
          <PatternSVG />
        </div>
      </header>

      <main className="flex-1 grow px-0 py-8 pb-4 -mr-0.5 w-full bg-amber-50 border-t border-b border-solid border-y-orange-200 max-md:w-full">
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            title={feature.title}
            text={feature.text}
          />
        ))}
      </main>
    </section>
  );
};

export default AIFeatureShowcase;
