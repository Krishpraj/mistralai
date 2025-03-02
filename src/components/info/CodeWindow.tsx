"use client";
import React from "react";

interface CodeWindowProps {
  headerText: string;
  iconUrl: string;
  codeLines: string[];
}

const CodeWindow: React.FC<CodeWindowProps> = ({
  headerText,
  iconUrl,
  codeLines,
}) => {
  return (
    <div className="overflow-hidden relative mr-52 ml-auto w-full bg-white h-[214px] max-w-[207px] rounded-[51px_0_6px_19px] max-md:w-full max-md:h-auto max-md:rounded-3xl">
      <div className="absolute left-1 p-3 text-xs border border-solid bg-stone-900 border-stone-800 h-[175px] text-zinc-600 top-[34px] w-[186px] max-md:relative max-md:w-full max-md:h-auto">
        <header className="flex gap-2 items-center mb-3">
          <img src={iconUrl} alt="" className="h-[9px] w-[9px]" />
          <p className="text-xs font-semibold text-stone-500">{headerText}</p>
        </header>
        <pre className="text-xs leading-relaxed text-stone-500">
          {codeLines.map((line, index) => (
            <code key={index} className="mb-1 block">
              {line}
            </code>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;
