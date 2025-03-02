"use client";
import React from "react";

interface ChatWindowProps {
  chatText: string;
  chatResponse: string;
  chartItems: string[];
  chatIconUrl: string;
  chartImageUrl: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  chatText,
  chatResponse,
  chartItems,
  chatIconUrl,
  chartImageUrl,
}) => {
  return (
    <div className="overflow-hidden relative mr-52 ml-auto w-full bg-white h-[214px] max-w-[205px] rounded-[51px_0_6px_19px] max-md:w-full max-md:h-auto max-md:rounded-3xl">
      <div className="absolute left-1 p-3 text-xs border border-solid bg-stone-900 border-stone-800 h-[175px] text-zinc-600 top-[34px] w-[186px] max-md:relative max-md:w-full max-md:h-auto">
        <header className="flex gap-2 items-center mb-3">
          <img src={chatIconUrl} alt="" className="h-[9px] w-[9px]" />
          <p className="text-xs font-semibold text-stone-500">{chatText}</p>
        </header>
        <p>{chatResponse}</p>
        <div className="mt-5">
          <img
            src={chartImageUrl}
            alt="Gantt chart"
            className="h-[102px] w-[153px]"
          />
          <ul className="mt-3 text-xs text-zinc-700">
            {chartItems.map((item, index) => (
              <li key={index} className="mb-1.5">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
