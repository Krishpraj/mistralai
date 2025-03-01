import React from "react";

const ArrowIcon: React.FC = () => {
  return (
    <div>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-icon"
        style={{
          width: "21px",
          height: "19px",
          flexShrink: 0,
          marginTop: "2px",
        }}
      >
        <g clipPath="url(#clip0_0_624)">
          <path
            d="M21.5039 11.5983V8.60291H18.5086V11.5983H21.5039Z"
            fill="#FA520F"
          ></path>
          <path
            d="M18.5117 8.59141V5.59607H15.5164V8.59141H18.5117Z"
            fill="#FA520F"
          ></path>
          <path
            d="M15.5117 5.5958V2.60046H12.5164V5.59579L15.5117 5.5958Z"
            fill="#FA520F"
          ></path>
          <path
            d="M18.5117 14.5934V11.598H15.5164V14.5934H18.5117Z"
            fill="#FA520F"
          ></path>
          <path
            d="M15.5039 11.5983V8.60291H0.503845L0.503845 11.5983H15.5039Z"
            fill="#FA520F"
          ></path>
          <path
            d="M15.5117 17.6002V14.6049H12.5164V17.6002H15.5117Z"
            fill="#FA520F"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_0_624">
            <rect
              width="21"
              height="19"
              fill="white"
              transform="translate(0.5 0.599976)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ArrowIcon;
