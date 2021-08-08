import * as React from "react";

function SvgGenerateBill({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62 62.14"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>
          {
            ".GenerateBill_svg__cls-1{fill:#e6e9ed}.GenerateBill_svg__cls-2{fill:#969faa}.GenerateBill_svg__cls-3{fill:#69d6f4}.GenerateBill_svg__cls-5{fill:#aab2bd}"
          }
        </style>
      </defs>
      <g id="GenerateBill_svg__Layer_2" data-name="Layer 2">
        <g id="GenerateBill_svg__Layer_1-2" data-name="Layer 1">
          <path
            className="GenerateBill_svg__cls-1"
            d="M23 45H5a4 4 0 01-2-.54V59l3.66 2 3.67-2L14 61l3.67-2 3.67 2L25 59V44.46a4 4 0 01-2 .54z"
          />
          <path
            className="GenerateBill_svg__cls-2"
            d="M27 5v4H1V5a4 4 0 014-4h18a4 4 0 014 4zM27 37v4a4 4 0 01-4 4H5a4 4 0 01-4-4v-4z"
          />
          <path
            className="GenerateBill_svg__cls-3"
            d="M27 27v10H1V9h26v18zm-4 6V13H5v20h18z"
          />
          <path fill="#fcd770" d="M14 13H5v20h18V13h-9z" />
          <path
            className="GenerateBill_svg__cls-1"
            d="M43 5a2 2 0 012 2 2 2 0 01-2 2H33a2 2 0 01-2-2 2 2 0 012-2z"
          />
          <path className="GenerateBill_svg__cls-5" d="M35 9h6v8h-6z" />
          <path
            className="GenerateBill_svg__cls-1"
            d="M43 19v6a2 2 0 01-2 2H27V17h14a2 2 0 012 2zM57 25v6h-6v-5a1 1 0 00-1-1h-7v-6h8a6 6 0 016 6z"
          />
          <path
            className="GenerateBill_svg__cls-5"
            d="M61 32v2a1 1 0 01-1 1H48a1 1 0 01-1-1v-2a1 1 0 011-1h12a1 1 0 011 1z"
          />
          <path
            className="GenerateBill_svg__cls-3"
            d="M59.91 50.29A7 7 0 0154 61a7 7 0 01-5.88-10.71L54 41z"
          />
          <path d="M60 36H48a2 2 0 01-2-2v-2a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2zm-12-4v2h12v-2z" />
          <path d="M52 31h-2v-5h-7v-2h7a2 2 0 012 2z" />
          <path d="M58 31h-2v-6a5 5 0 00-5-5h-8v-2h8a7 7 0 017 7z" />
          <path d="M23 46H5a5 5 0 01-5-5V5a5 5 0 015-5h18a5 5 0 015 5v11h13a3 3 0 013 3v6a3 3 0 01-3 3H28v13a5 5 0 01-5 5zM5 2a3 3 0 00-3 3v36a3 3 0 003 3h18a3 3 0 003-3V20h2v6h13a1 1 0 001-1v-6a1 1 0 00-1-1H26V5a3 3 0 00-3-3z" />
          <path d="M11 4h6v2h-6zM12 40h4v2h-4zM1 8h26v2H1zM1 36h26v2H1zM24 34H4V12h20zM6 32h16V14H6zM19 4h2v2h-2zM7 4h2v2H7z" />
          <path d="M14 28a3 3 0 01-3-3h2a1 1 0 101-1 3 3 0 113-3h-2a1 1 0 10-1 1 3 3 0 010 6z" />
          <path d="M13 16h2v3h-2zM13 27h2v3h-2zM6.67 62.14L2 59.59V44.46h2v13.95l2.67 1.45 3.66-2 3.66 2 3.67-2 3.67 2L24 58.41V44.46h2v15.13l-4.67 2.55-3.67-2-3.67 2-3.66-2-3.66 2z" />
          <path d="M6 48h16v2H6zM6 52h16v2H6zM54 58a4 4 0 01-4-4 3.92 3.92 0 01.62-2.13l2.54-4L54.84 49l-2.53 4A2 2 0 0054 56z" />
          <path d="M54 62a8 8 0 01-8-8 7.92 7.92 0 011.25-4.28L54 39.14l6.75 10.61A8 8 0 0154 62zm0-19.14l-5.07 8a6 6 0 1010.14 0zM34 9h2v8h-2zM40 9h2v8h-2z" />
          <path d="M43 10H33a3 3 0 010-6h10a3 3 0 010 6zM33 6a1 1 0 000 2h10a1 1 0 000-2z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgGenerateBill;
