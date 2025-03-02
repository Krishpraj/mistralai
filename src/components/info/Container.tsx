"use client";
import React from "react";
import FeatureSection from "./FeatureSection";
import ChatWindow from "./ChatWindow";
import CodeWindow from "./CodeWindow";

const Container: React.FC = () => {
  return (
    <section className="overflow-auto relative z-0 px-32 py-5 bg-amber-50 h-[1430px] max-md:p-5 max-md:h-auto max-sm:p-4">
      <div 
      className="absolute left-[5.7%] right-[5.7%] top-0 bottom-20 -z-10"
      style={{
      backgroundSize: '50px 50px',
      backgroundImage: `
      linear-gradient(to right, rgba(252, 211, 77, 0.3) 1px, transparent 1px), 
      linear-gradient(to bottom, rgba(252, 211, 77, 0.3) 1px, transparent 1px)
      `, // Changed to amber-300 (rgb: 252, 211, 77) and reduced opacity
      }}
      />
      <FeatureSection
      title="Get work done."
      description="Your personalized multilingual Al assistant, with web search, uploads, and data connectors"
      buttonText="Discover Le Chat"
      rightContent={
      <ChatWindow
      chatText="Can you generate a product launch timeline template as a gantt chart?"
      chatResponse="Sure! Here is a product launch timeline template in the form of a Gantt chart using Mermaid syntax"
      chartItems={[
      "Market Research",
      "Product Design",
      "Competitor Analysis",
      "Prototyping Testing",
      "UX Design Camp",
      "Marketing Setup",
      "Final Testing",
      "Live Launch Control",
      ]}
      chatIconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/945b080b57177293c3725662bab8dabd8bd68ed9"
      chartImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bb0724e7814f21e7dabffd35fc5e6b40fcabdedb"
      />
      }
      />

      <FeatureSection
      title="Code faster."
      description="Build faster with coding assistance across 80+ languages."
      buttonText="Code With Le Chat"
      rightContent={
      <CodeWindow
      headerText="Create canvas that uses PyScript py-repl to execute python in my browser"
      iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/069fc54cc521d6ebbffc232cc45be6afd1265f6b"
      codeLines={[
      "",
      "shel",
      "theed",
      "long-en??",
      "Swto", 
      "ssnst:uf-g",
      "mmer7Viempar57 cardert-7eidtrnvice-eli®k",
      "uPeSerigs, (aways",
      "11t3e",
      'rel="stylesheet&quot; href="https://script.net/',
      "rela&quot;stylieaheet* Nrefa&quot;hnctpaz/Joyeoript.net/",
      "Tde&quot;python-repl&quot;",
      "quto-peneretew&quot;true&quot;k",
      "iwdp",
      ]}
      />
      }
      />

      <FeatureSection
      title="Build Al-powered apps."
      description="Build and deploy custom Al solutions with frontier models."
      buttonText="Discover La Platoforme"
      rightContent={
      <CodeWindow
      headerText="PyScript Canvas"
      iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/42e012fb8e387dcfa2bf58d4b13f762a7342a044"
      codeLines={["Todo App", "Acld an new biesk", "Agd"]}
      />
      }
      />
    </section>
  );
};

export default Container;
