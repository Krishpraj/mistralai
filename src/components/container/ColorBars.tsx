import React from "react";

const ColorBars: React.FC = () => {
  return (
    <div className="absolute size-full">
      <div className="w-full bg-yellow-400 h-[25px] max-sm:hidden" />
      <div className="w-full bg-amber-500 h-[25px] max-sm:hidden" />
      <div className="w-full bg-orange-500 h-[25px] max-sm:hidden" />
      <div className="w-full bg-orange-600 h-[25px] max-sm:hidden" />
      <div className="w-full bg-red-600 h-[25px] max-sm:hidden" />
    </div>
  );
};

export default ColorBars;
