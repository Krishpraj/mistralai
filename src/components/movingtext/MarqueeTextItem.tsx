import React from "react";

interface MarqueeTextItemProps {
  iconSrc: string;
  text: string;
  className?: string;
}

const MarqueeTextItem: React.FC<MarqueeTextItemProps> = ({
  iconSrc,
  text,
  className = "",
}) => {
  return (
    <div className={`flex gap-5 items-center ${className}`}>
      <img
      src={iconSrc}
      alt=""
      className="object-contain overflow-visible w-8 h-auto aspect-[1.38] max-sm:w-6 shrink-0"
      />
      <span>{text}</span>
    </div>
  );
};

export default MarqueeTextItem;
