import React from "react";
import MistralLogo from "./MistralLogo";

const FeatureTitle: React.FC = () => {
  return (
    <div className="flex flex-col sticky top-50 items-center w-full max-w-3xl mx-auto">
      <div className="self-center ml-20"> {/* Changed self-start to self-center and added ml-20 */}
        <h1 className="text-5xl leading-tight text-stone-900 max-sm:text-3xl max-sm:leading-10">
          Your AI future
        </h1>
        <h1 className="text-5xl leading-tight text-stone-900 max-sm:text-3xl max-sm:leading-10">
          belongs in
        </h1>
        <div className="flex gap-3 items-center text-5xl leading-tight text-stone-900 max-sm:text-3xl max-sm:leading-10">
          <span>your hands.</span>
          <MistralLogo />
        </div>
      </div>
    </div>
  );
};

export default FeatureTitle;
