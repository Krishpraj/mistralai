import React from "react";
import MistralLogo from "./MistralLogo";

const FeatureTitle: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl leading-10 text-stone-900 max-sm:text-3xl max-sm:leading-9">
        Your AI future
      </h1>
      <h1 className="text-4xl leading-10 text-stone-900 max-sm:text-3xl max-sm:leading-9">
        belongs in
      </h1>
      <div className="flex gap-3 items-center text-4xl leading-10 text-stone-900 max-sm:text-3xl max-sm:leading-9">
        <span>your hands.</span>
        <MistralLogo />
      </div>
    </div>
  );
};

export default FeatureTitle;
