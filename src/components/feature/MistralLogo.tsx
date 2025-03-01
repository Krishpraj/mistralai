import React from "react";

const MistralLogo: React.FC = () => {
  return (
    <div>
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo"
        style={{ width: "27px", height: "31px" }}
      >
        <g clipPath="url(#clip0_0_548)">
          <mask
            id="mask0_0_548"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="28"
            height="32"
          >
            <path
              d="M27.6719 0.234375H0.671875V31.2344H27.6719V0.234375Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_0_548)">
            <path
              d="M27.5793 4.73083H14.1719V9.13229H23.1101V17.9352H14.1719V22.3367H27.5793V4.73083Z"
              fill="#FA500F"
              stroke="#FA500F"
              strokeWidth="0.25"
              strokeMiterlimit="10"
            ></path>
            <path
              d="M0.765625 31.1397H5.24216V17.9353H14.173V13.5339H5.24216V4.73093H14.173V0.329468H0.765625V31.1397Z"
              fill="#FA500F"
              stroke="#FA500F"
              strokeWidth="0.25"
              strokeMiterlimit="10"
            ></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_548">
            <rect
              width="27"
              height="31"
              fill="white"
              transform="translate(0.671875 0.234375)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default MistralLogo;
