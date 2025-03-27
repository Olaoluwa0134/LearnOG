import * as React from "react";

const Background = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{ width: "100%", height: "100vh" }}
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop
          offset="0%"
          style={{
            stopColor: "#fff",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#b0d4ff",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#a)" />
    <path
      fill="#1A5F99"
      fillOpacity={0.8}
      d="M0 300c200-50 400 50 600 0s400 50 600 0v300H0Z"
    >
      <animate
        attributeName="d"
        dur="5s"
        repeatCount="indefinite"
        values="M0,300 C200,250 400,350 600,300 C800,250 1000,350 1200,300 V600 H0 Z; M0,300 C200,350 400,250 600,300 C800,350 1000,250 1200,300 V600 H0 Z; M0,300 C200,250 400,350 600,300 C800,250 1000,350 1200,300 V600 H0 Z"
      />
    </path>
    <path
      fill="#3189FF"
      fillOpacity={0.6}
      d="M0 320c200-50 400 50 600 0s400 50 600 0v280H0Z"
    >
      <animate
        attributeName="d"
        dur="7s"
        repeatCount="indefinite"
        values="M0,320 C200,270 400,370 600,320 C800,270 1000,370 1200,320 V600 H0 Z; M0,320 C200,370 400,270 600,320 C800,370 1000,270 1200,320 V600 H0 Z; M0,320 C200,270 400,370 600,320 C800,270 1000,370 1200,320 V600 H0 Z"
      />
    </path>
    <path
      fill="#66A3FF"
      fillOpacity={0.5}
      d="M0 340c200-50 400 50 600 0s400 50 600 0v260H0Z"
    >
      <animate
        attributeName="d"
        dur="9s"
        repeatCount="indefinite"
        values="M0,340 C200,290 400,390 600,340 C800,290 1000,390 1200,340 V600 H0 Z; M0,340 C200,390 400,290 600,340 C800,390 1000,290 1200,340 V600 H0 Z; M0,340 C200,290 400,390 600,340 C800,290 1000,390 1200,340 V600 H0 Z"
      />
    </path>
    <path
      fill="#99C2FF"
      fillOpacity={0.8}
      d="M0 360c200-50 400 50 600 0s400 50 600 0v240H0Z"
    >
      <animate
        attributeName="d"
        dur="15s"
        repeatCount="indefinite"
        values="M0,360 C200,310 400,410 600,360 C800,310 1000,410 1200,360 V600 H0 Z; M0,360 C200,410 400,310 600,360 C800,410 1000,310 1200,360 V600 H0 Z; M0,360 C200,310 400,410 600,360 C800,310 1000,410 1200,360 V600 H0 Z"
      />
    </path>
  </svg>
);
export default Background;
