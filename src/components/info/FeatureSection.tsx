"use client";
import React from "react";

interface FeatureSectionProps {
  title: string;
  description: string;
  buttonText: string;
  rightContent: React.ReactNode;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  buttonText,
  rightContent,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`mb-40 max-md:mb-32 transition-all duration-1000 transform ${
      isVisible ? 'scale-110 opacity-100' : 'scale-95 opacity-0'
      }`}
      style={{ marginTop: '100px' }}
    >
      <div className="flex gap-20 max-md:flex-col">
        <div className="w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center items-start py-8 pr-0 pl-80 text-left h-[250px] max-md:px-0 max-md:py-8 max-md:h-auto">
            <h2 className="mb-6 text-5xl font-light text-black max-sm:text-3xl">
              {title}
            </h2>
            <p className="mb-8 text-lg font-light leading-7 max-w-[500px] text-black max-sm:text-base">
              {description}
            </p>
            <div className="mb-10">
              <button className="inline-flex gap-2 items-center px-4 py-2 text-sm font-light text-white bg-stone-900 cursor-pointer max-sm:justify-center max-sm:w-full">
              {buttonText}
              <i className="ti ti-chevron-right text-base" />
              </button>
            </div>
            </div>
        </div>
        <div className="w-1/2 max-md:ml-0 max-md:w-full">
          {rightContent}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
