import * as React from "react";

function SvgAccMgmt({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94.36 94.03"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient
          id="AccMgmt_svg__a"
          x1={9.07}
          y1={103.11}
          x2={85.29}
          y2={26.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0c29df" />
          <stop offset={1} stopColor="#0075bf" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <path
          d="M59.66 51.21a27.14 27.14 0 10-24.95 0A43.85 43.85 0 000 94h4a39.82 39.82 0 0139.77-39.74h6.82A39.82 39.82 0 0190.36 94h4a43.85 43.85 0 00-34.7-42.79zM24.05 27.13a23.13 23.13 0 1123.13 23.13 23.15 23.15 0 01-23.13-23.13z"
          fill="url(#AccMgmt_svg__a)"
          data-name="Layer 1"
        />
      </g>
    </svg>
  );
}

export default SvgAccMgmt;
