import React from "react";

const LogoIcon: React.FC = () => {
  return (
    <div>
      <svg
        width="64"
        height="47"
        viewBox="0 0 64 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
        style={{
          position: "absolute",
          width: "64px",
          height: "46px",
          left: "31px",
          top: "40px",
          zIndex: 1,
        }}
      >
        <g clipPath="url(#clip0_0_65)">
          <mask
            id="mask0_0_65"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="64"
            height="47"
          >
            <path
              d="M63.8558 0.75H0.150177V46.25H63.8558V0.75Z"
              fill="white"
            ></path>
          </mask>
          <g mask="url(#mask0_0_65)">
            <path
              d="M18.3508 0.75H9.25082V9.84886H18.3508V0.75Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M54.7542 0.75H45.6542V9.84886H54.7542V0.75Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M27.4508 9.84894H9.25082V18.9478H27.4508V9.84894Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M54.7535 9.84894H36.5535V18.9478H54.7535V9.84894Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M54.7565 18.9478H9.25082V28.0467H54.7565V18.9478Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M18.3508 28.0522H9.25082V37.151H18.3508V28.0522Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M36.5525 28.0522H27.4525V37.151H36.5525V28.0522Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M54.7542 28.0522H45.6542V37.151H54.7542V28.0522Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M27.4558 37.1511H0.150177V46.25H27.4558V37.1511Z"
              fill="#FFFAEB"
            ></path>
            <path
              d="M63.8591 37.1511H36.5535V46.25H63.8591V37.1511Z"
              fill="#FFFAEB"
            ></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_65">
            <rect
              width="63.99"
              height="45.5"
              fill="white"
              transform="translate(0.0078125 0.75)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default LogoIcon;
