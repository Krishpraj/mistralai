"use client";
import React from "react";
import FeatureItem from "./FeatureItem";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Customizable, from pre-training to the real world.",
      description:
        "World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.",
      iconSvg:
        "<svg width=&quot;22&quot; height=&quot;20&quot; viewBox=&quot;0 0 22 20&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 21px; height: 19px; flex-shrink: 0; margin-top: 2px&quot;> <g clip-path=&quot;url(#clip0_0_624)&quot;> <path d=&quot;M21.5039 11.5983V8.60291H18.5086V11.5983H21.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 8.59141V5.59607H15.5164V8.59141H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 5.5958V2.60046H12.5164V5.59579L15.5117 5.5958Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 14.5934V11.598H15.5164V14.5934H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5039 11.5983V8.60291H0.503845L0.503845 11.5983H15.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 17.6002V14.6049H12.5164V17.6002H15.5117Z&quot; fill=&quot;#FA520F&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_624&quot;> <rect width=&quot;21&quot; height=&quot;19&quot; fill=&quot;white&quot; transform=&quot;translate(0.5 0.599976)&quot;></rect> </clipPath> </defs> </svg>",
    },
    {
      title: "Private and portable.",
      description:
        "A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more.",
      iconSvg:
        "<svg width=&quot;22&quot; height=&quot;20&quot; viewBox=&quot;0 0 22 20&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 21px; height: 19px; flex-shrink: 0; margin-top: 2px&quot;> <g clip-path=&quot;url(#clip0_0_609)&quot;> <path d=&quot;M21.5039 11.9639V8.96851H18.5086V11.9639H21.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 8.95701V5.96167H15.5164V8.95701H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 5.9614V2.96606H12.5164V5.96139L15.5117 5.9614Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 14.959V11.9636H15.5164V14.959H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5039 11.9639V8.96851H0.503845L0.503845 11.9639H15.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 17.9658V14.9705H12.5164V17.9658H15.5117Z&quot; fill=&quot;#FA520F&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_609&quot;> <rect width=&quot;21&quot; height=&quot;19&quot; fill=&quot;white&quot; transform=&quot;translate(0.5 0.965576)&quot;></rect> </clipPath> </defs> </svg>",
    },
    {
      title: "Transparent and trustworthy.",
      description:
        "Strongest global contributor to open source AI and AI policy. Mistral AI is the world's greenest and leading independent AI lab.",
      iconSvg:
        "<svg width=&quot;22&quot; height=&quot;20&quot; viewBox=&quot;0 0 22 20&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 21px; height: 19px; flex-shrink: 0; margin-top: 2px&quot;> <g clip-path=&quot;url(#clip0_0_595)&quot;> <path d=&quot;M21.5039 11.3233V8.32788H18.5086V11.3233H21.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 8.31638V5.32104H15.5164V8.31638H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 5.32078V2.32544H12.5164V5.32077L15.5117 5.32078Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 14.3184V11.323H15.5164V14.3184H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5039 11.3233V8.32788H0.503845L0.503845 11.3233H15.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 17.3251V14.3298H12.5164V17.3251H15.5117Z&quot; fill=&quot;#FA520F&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_595&quot;> <rect width=&quot;21&quot; height=&quot;19&quot; fill=&quot;white&quot; transform=&quot;translate(0.5 0.324951)&quot;></rect> </clipPath> </defs> </svg>",
    },
    {
      title: "Deeply engaged solutioning and value delivery.",
      description:
        "Hands-on assistance from the world's best AI engineers and scientists across deployment, solutioning, safety, and beyond.",
      iconSvg:
        "<svg width=&quot;22&quot; height=&quot;20&quot; viewBox=&quot;0 0 22 20&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 21px; height: 19px; flex-shrink: 0; margin-top: 2px&quot;> <g clip-path=&quot;url(#clip0_0_581)&quot;> <path d=&quot;M21.5039 11.2858V8.29041H18.5086V11.2858H21.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 8.27891V5.28357H15.5164V8.27891H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 5.2833V2.28796H12.5164V5.28329L15.5117 5.2833Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 14.2809V11.2855H15.5164V14.2809H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5039 11.2858V8.29041H0.503845L0.503845 11.2858H15.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 17.2877V14.2924H12.5164V17.2877H15.5117Z&quot; fill=&quot;#FA520F&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_581&quot;> <rect width=&quot;21&quot; height=&quot;19&quot; fill=&quot;white&quot; transform=&quot;translate(0.5 0.287476)&quot;></rect> </clipPath> </defs> </svg>",
    },
    {
      title: "Delightful interfaces.",
      description:
        "Bringing frontier intelligence to life with intuitive user experiences across life and work.",
      iconSvg:
        "<svg width=&quot;22&quot; height=&quot;20&quot; viewBox=&quot;0 0 22 20&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 21px; height: 19px; flex-shrink: 0; margin-top: 2px&quot;> <g clip-path=&quot;url(#clip0_0_565)&quot;> <path d=&quot;M21.5039 11.8389V8.84351H18.5086V11.8389H21.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 8.83201V5.83667H15.5164V8.83201H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 5.8364V2.84106H12.5164V5.83639L15.5117 5.8364Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M18.5117 14.834V11.8386H15.5164V14.834H18.5117Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5039 11.8389V8.84351H0.503845L0.503845 11.8389H15.5039Z&quot; fill=&quot;#FA520F&quot;></path> <path d=&quot;M15.5117 17.8408V14.8455H12.5164V17.8408H15.5117Z&quot; fill=&quot;#FA520F&quot;></path> </g> <defs> <clipPath id=&quot;clip0_0_565&quot;> <rect width=&quot;21&quot; height=&quot;19&quot; fill=&quot;white&quot; transform=&quot;translate(0.5 0.840576)&quot;></rect> </clipPath> </defs> </svg>",
    },
  ];

  return (
    <section className="flex gap-12 px-24 py-6 pr-5 mx-5 mx-auto my-0 bg-amber-50 max-w-[1637px] max-md:flex-col max-md:p-6 max-sm:p-4">
      <div className="pr-28 mr-8 flex-[0_0_300px] max-md:flex-none max-md:w-full">
        <div className="flex flex-col">
          <h2 className="text-4xl leading-10 text-stone-900 max-sm:text-3xl max-sm:leading-9">
            Your AI future
          </h2>
          <h2 className="text-4xl leading-10 text-stone-900 max-sm:text-3xl max-sm:leading-9">
            belongs in
          </h2>
          <div className="flex gap-3 items-center text-4xl leading-10 text-stone-900 max-sm:text-3xl max-sm:leading-9">
            <span>your hands.</span>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg width=&quot;28&quot; height=&quot;32&quot; viewBox=&quot;0 0 28 32&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 27px; height: 31px&quot;> <g clip-path=&quot;url(#clip0_0_548)&quot;> <mask id=&quot;mask0_0_548&quot; style=&quot;mask-type:luminance&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;0&quot; y=&quot;0&quot; width=&quot;28&quot; height=&quot;32&quot;> <path d=&quot;M27.6719 0.234375H0.671875V31.2344H27.6719V0.234375Z&quot; fill=&quot;white&quot;></path> </mask> <g mask=&quot;url(#mask0_0_548)&quot;> <path d=&quot;M27.5793 4.73083H14.1719V9.13229H23.1101V17.9352H14.1719V22.3367H27.5793V4.73083Z&quot; fill=&quot;#FA500F&quot; stroke=&quot;#FA500F&quot; stroke-width=&quot;0.25&quot; stroke-miterlimit=&quot;10&quot;></path> <path d=&quot;M0.765625 31.1397H5.24216V17.9353H14.173V13.5339H5.24216V4.73093H14.173V0.329468H0.765625V31.1397Z&quot; fill=&quot;#FA500F&quot; stroke=&quot;#FA500F&quot; stroke-width=&quot;0.25&quot; stroke-miterlimit=&quot;10&quot;></path> </g> </g> <defs> <clipPath id=&quot;clip0_0_548&quot;> <rect width=&quot;27&quot; height=&quot;31&quot; fill=&quot;white&quot; transform=&quot;translate(0.671875 0.234375)&quot;></rect> </clipPath> </defs> </svg>",
              }}
            />
          </div>
        </div>
        <div className="mt-0 mr-16 max-sm:hidden">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=&quot;563&quot; height=&quot;661&quot; viewBox=&quot;0 0 563 661&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width: 563px; height: 660px; margin-top: 167px; margin-left: 7px&quot;> <g clip-path=&quot;url(#clip0_0_531)&quot;>   <path d=&quot;M349.694 447.538H403.083V502.012H349.694V447.538Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M350.258 86.0016H403.083V138.329H350.258V86.0016Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M455.902 418.996H508.727V471.324H455.902V418.996Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M455.909 365.717H562.504V418.996H455.909V365.717Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M-6.66193 365.717H99.9327V418.996H-6.66193V365.717Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M426.397 0.374512H532.991V53.6536H426.397V0.374512Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M297.431 500.817H403.083V555.048H297.431V500.817Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M191.307 500.817H243.655V555.048H191.307V500.817Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M138.011 554.096H403.083V607.376H138.011V554.096Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M349.694 607.137H403.083V660.655H349.694V607.137Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M402.602 607.137H455.991V660.655H402.602V607.137Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M243.852 607.137H297.241V660.655H243.852V607.137Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M138.009 607.137H191.398V660.655H138.009V607.137Z&quot; fill=&quot;#FFF0C3&quot;></path>   <path d=&quot;M145.622 63.1682V169.722H92.3223V63.1682H145.622Z&quot; fill=&quot;#FFF0C3&quot;></path> </g> <defs>   <clipPath id=&quot;clip0_0_531&quot;>     <rect width=&quot;562.5&quot; height=&quot;660.28&quot; fill=&quot;white&quot; transform=&quot;translate(0 0.374512)&quot;></rect>   </clipPath> </defs> </svg>",
            }}
          />
        </div>
      </div>
      <div className="flex-1 grow px-0 py-8 pb-4 -mr-0.5 w-full bg-amber-50 border-t border-b border-solid border-y-orange-200 max-md:w-full">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            iconSvg={feature.iconSvg}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
