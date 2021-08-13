import * as React from "react";

function SvgSettings({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 401.72 374.99"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient
          id="Settings_svg__a"
          x1={171.92}
          y1={229.8}
          x2={256.46}
          y2={145.26}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0030df" />
          <stop offset={0.18} stopColor="#003adf" />
          <stop offset={0.46} stopColor="#0053df" />
          <stop offset={0.56} stopColor="#0057df" />
          <stop offset={0.67} stopColor="#0065df" />
          <stop offset={0.78} stopColor="#007adf" />
          <stop offset={0.9} stopColor="#0099df" />
          <stop offset={1} stopColor="#00b9df" />
        </linearGradient>
        <linearGradient
          id="Settings_svg__b"
          x1={105.41}
          y1={296.31}
          x2={346.8}
          y2={54.92}
          xlinkHref="#Settings_svg__a"
        />
        <linearGradient
          id="Settings_svg__c"
          x1={151.1}
          y1={370.63}
          x2={172.47}
          y2={349.26}
          xlinkHref="#Settings_svg__a"
        />
        <linearGradient
          id="Settings_svg__d"
          x1={90.23}
          y1={328.69}
          x2={101.92}
          y2={316.99}
          xlinkHref="#Settings_svg__a"
        />
        <linearGradient
          id="Settings_svg__e"
          x1={40.58}
          y1={270.69}
          x2={59.27}
          y2={251.99}
          xlinkHref="#Settings_svg__a"
        />
        <linearGradient
          id="Settings_svg__f"
          x1={125.16}
          y1={276.56}
          x2={303.25}
          y2={98.47}
          xlinkHref="#Settings_svg__a"
        />
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M273.26 178.25a59.77 59.77 0 10-59.18 69.06 60.68 60.68 0 009.38-.73 59.85 59.85 0 0049.8-68.33zM221.34 233a46.07 46.07 0 1130.1-18.38 45.81 45.81 0 01-30.1 18.38z"
            fill="url(#Settings_svg__a)"
          />
          <path
            d="M399.41 158.47A187.47 187.47 0 0062.7 77.09a186.08 186.08 0 00-35.84 102.18l-13.71-31.79a6.86 6.86 0 00-12.59 5.43l28.72 66.58a6.84 6.84 0 006.29 4.14h.13a6.83 6.83 0 006.3-4.38l26.1-67.72a6.85 6.85 0 10-12.79-4.93l-14.89 38.59A173.83 173.83 0 01187.28 15.85C281.94 1 371 65.94 385.87 160.6s-50.09 183.74-144.75 198.59a177.2 177.2 0 01-24 2.09 6.86 6.86 0 00.12 13.71h.13a190.58 190.58 0 0025.84-2.26 187.49 187.49 0 00156.2-214.26z"
            fill="url(#Settings_svg__b)"
          />
          <path
            d="M140.3 359.84a186.77 186.77 0 0038.53 11.83l2.58-13.46a173.57 173.57 0 01-35.7-11z"
            fill="url(#Settings_svg__c)"
          />
          <path
            d="M85.35 304.14l-10.15 9.2a188.5 188.5 0 0032.37 28.37l7.8-11.27a175.31 175.31 0 01-30.02-26.3z"
            fill="url(#Settings_svg__d)"
          />
          <path
            d="M36.09 246.1a186.63 186.63 0 0016.61 36.71l11.8-7a172.68 172.68 0 01-15.39-34z"
            fill="url(#Settings_svg__e)"
          />
          <path
            d="M248.36 308.74l7.29-23.6q1.77-.75 3.51-1.56l23 9.79 22.24-17.95-5.49-24.1c.76-1 1.51-2 2.24-3.09l24.84-3 10.28-26.68-16.79-18.1c.16-1.27.29-2.55.4-3.83l20-15-4.43-28.24-23.59-7.29c-.5-1.18-1-2.35-1.57-3.51l9.8-23-18-22.25-24.1 5.5c-1-.77-2-1.51-3.08-2.24l-3-24.84-26.68-10.29-18.11 16.79c-1.27-.16-2.54-.29-3.82-.4l-15-20L180 66.3l-7.28 23.59c-1.18.5-2.35 1-3.51 1.57l-23-9.8L124 99.62l5.49 24.1c-.76 1-1.51 2-2.23 3.08l-24.84 3-10.28 26.69 16.79 18.11c-.15 1.27-.28 2.54-.39 3.82l-20 15L93 221.67l23.6 7.29q.75 1.77 1.56 3.51l-9.79 23 18 22.25 24.1-5.49c1 .76 2 1.5 3.09 2.23l3 24.84 26.68 10.28 18.1-16.78c1.27.15 2.55.28 3.83.39l15 20zm-39.28-29c-3-.16-6.05-.48-9-.94l-3.28-.51-16.64 15.44-11-4.25-2.79-22.92-2.66-1.75a90.12 90.12 0 01-7.33-5.32l-2.58-2.08-22.16 5.05-7.42-9.18 9-21.22-1.44-2.85a90.46 90.46 0 01-3.69-8.29l-1.2-3.09-21.7-6.71-1.83-11.66 18.45-13.86.18-3.19c.16-3 .48-6 .94-9l.51-3.27-15.44-16.7 4.25-11 22.92-2.78 1.75-2.67c1.65-2.53 3.44-5 5.32-7.33l2.07-2.58-5-22.16 9.18-7.41 21.22 9 2.84-1.44c2.69-1.36 5.48-2.6 8.3-3.69l3.09-1.19 6.71-21.71 11.65-1.82 13.87 18.45 3.19.17a90.67 90.67 0 019 .94l3.28.51 16.65-15.44 11 4.25 2.78 22.93 2.67 1.74c2.53 1.66 5 3.45 7.33 5.32l2.58 2.08 22.16-5 7.41 9.18-9 21.22 1.44 2.85a90.39 90.39 0 013.68 8.29l1.2 3.1 21.71 6.7 1.75 11.64-18.45 13.86-.17 3.19c-.17 3-.48 6.05-.94 9l-.51 3.27 15.43 16.65-4.24 11-22.93 2.78-1.74 2.67c-1.66 2.53-3.45 5-5.32 7.33l-2.05 2.66 5.05 22.16-9.13 7.37-21.22-9-2.85 1.44c-2.69 1.36-5.48 2.6-8.29 3.69l-3.1 1.19-6.7 21.71-11.66 1.83-13.91-18.49z"
            fill="url(#Settings_svg__f)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgSettings;
