import * as React from "react";

function SvgWaterMeter({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 229.32 229.32"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient
          id="WaterMeter_svg__a"
          x1={43.77}
          y1={114.63}
          x2={185.03}
          y2={114.63}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#3953a4" />
          <stop offset={0.04} stopColor="#3c5fac" />
          <stop offset={0.12} stopColor="#4172b9" />
          <stop offset={0.2} stopColor="#447dc0" />
          <stop offset={0.28} stopColor="#4581c3" />
          <stop offset={0.67} stopColor="#269bd1" />
          <stop offset={0.89} stopColor="#67c6b9" />
          <stop offset={1} stopColor="#6dc5a4" />
        </linearGradient>
        <linearGradient
          id="WaterMeter_svg__b"
          x1={7.71}
          y1={115.53}
          x2={32.18}
          y2={115.53}
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__c"
          x1={198.03}
          y1={115.53}
          x2={222.5}
          y2={115.53}
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__d"
          x1={35.63}
          y1={48.24}
          x2={60}
          y2={48.24}
          gradientTransform="rotate(45 47.816 48.246)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__e"
          x1={110.11}
          y1={20.37}
          x2={120.11}
          y2={20.37}
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__f"
          x1={170.21}
          y1={48.24}
          x2={194.58}
          y2={48.24}
          gradientTransform="rotate(45 182.39 48.238)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__g"
          x1={186.56}
          y1={69.67}
          x2={210.41}
          y2={69.67}
          gradientTransform="rotate(28.81 198.469 69.67)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__h"
          x1={11.28}
          y1={88.99}
          x2={36.17}
          y2={88.99}
          gradientTransform="rotate(73.81 23.72 88.993)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__i"
          x1={194.05}
          y1={142.06}
          x2={218.94}
          y2={142.06}
          gradientTransform="rotate(73.81 206.489 142.06)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__j"
          x1={61.17}
          y1={32.14}
          x2={77.34}
          y2={32.14}
          gradientTransform="rotate(28.81 69.243 32.142)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__k"
          x1={135.83}
          y1={24.14}
          x2={147.45}
          y2={24.14}
          gradientTransform="rotate(73.81 141.632 24.135)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__l"
          x1={10.5}
          y1={139.33}
          x2={35.44}
          y2={139.33}
          gradientTransform="rotate(14.49 22.987 139.318)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__m"
          x1={194.77}
          y1={91.72}
          x2={219.71}
          y2={91.72}
          gradientTransform="rotate(14.49 207.254 91.713)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__n"
          x1={21.32}
          y1={67.21}
          x2={44.94}
          y2={67.21}
          gradientTransform="rotate(59.48 33.132 67.217)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__o"
          x1={85.82}
          y1={23.39}
          x2={96.78}
          y2={23.39}
          gradientTransform="rotate(14.48 91.317 23.393)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__p"
          x1={155.06}
          y1={33.55}
          x2={171.79}
          y2={33.55}
          gradientTransform="rotate(59.48 163.428 33.556)"
          xlinkHref="#WaterMeter_svg__a"
        />
        <linearGradient
          id="WaterMeter_svg__q"
          x1={0}
          y1={114.66}
          x2={229.32}
          y2={114.66}
          xlinkHref="#WaterMeter_svg__a"
        />
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <path
            d="M114.8 106.88a7.86 7.86 0 107.86 7.86 7.87 7.87 0 00-7.86-7.86zM154 75a56 56 0 00-65.48-10.1l24.09 36.12A13.86 13.86 0 01125.15 124l6.1 12-8.92 4.52-6.08-12a13.84 13.84 0 01-12-22.75L86.71 65.94a56.09 56.09 0 008.91 101.58h37.47A56.06 56.06 0 00154 75zm-39.2 31.88a7.86 7.86 0 107.86 7.86 7.87 7.87 0 00-7.86-7.86zM154 75a56 56 0 00-65.48-10.1l24.09 36.12A13.86 13.86 0 01125.15 124l6.1 12-8.92 4.52-6.08-12a13.84 13.84 0 01-12-22.75L86.71 65.94a56.09 56.09 0 008.91 101.58h37.47A56.06 56.06 0 00154 75zm-31.38 39.71a7.86 7.86 0 10-7.86 7.86 7.86 7.86 0 007.9-7.83zM114.4 44a70.65 70.65 0 00-18.14 138.94l1.51-.9.87 1.48a68.7 68.7 0 006.93 1.22l-1.41-5.33 1.94-.52 1.61 6.08c1.38.14 2.78.23 4.19.27v-8.12h5v8.12c1.39 0 2.77-.13 4.13-.26l1.71-6.09 1.93.54-1.49 5.32a71.1 71.1 0 007-1.24l.83-1.44 1.49.86A70.64 70.64 0 00114.4 44zM145 167.52h-11.91A56.06 56.06 0 1088.56 64.93l24.09 36.12a13.86 13.86 0 0112.5 22.95l6.1 12-8.92 4.52-6.08-12a13.84 13.84 0 01-12-22.75L86.71 65.94a56.09 56.09 0 008.91 101.58H83.78a61.15 61.15 0 01-30.44-52.85 61.1 61.1 0 0131.35-53.33l-2.89-6.55 4 6A61 61 0 01145 167.52zm-30.2-44.92a7.86 7.86 0 10-7.86-7.86 7.87 7.87 0 007.86 7.86zm0-15.72a7.86 7.86 0 107.86 7.86 7.87 7.87 0 00-7.86-7.86zM154 75a56 56 0 00-65.48-10.1l24.09 36.12A13.86 13.86 0 01125.15 124l6.1 12-8.92 4.52-6.08-12a13.84 13.84 0 01-12-22.75L86.71 65.94a56.09 56.09 0 008.91 101.58h37.47A56.06 56.06 0 00154 75zm-39.2 31.88a7.86 7.86 0 107.86 7.86 7.87 7.87 0 00-7.86-7.86zM154 75a56 56 0 00-65.48-10.1l24.09 36.12A13.86 13.86 0 01125.15 124l6.1 12-8.92 4.52-6.08-12a13.84 13.84 0 01-12-22.75L86.71 65.94a56.09 56.09 0 008.91 101.58h37.47A56.06 56.06 0 00154 75z"
            fill="url(#WaterMeter_svg__a)"
          />
          <path
            fill="url(#WaterMeter_svg__b)"
            d="M7.71 110.53h24.47v10H7.71z"
          />
          <path
            fill="url(#WaterMeter_svg__c)"
            d="M198.03 110.53h24.47v10h-24.47z"
          />
          <path
            transform="rotate(-45 47.819 48.233)"
            fill="url(#WaterMeter_svg__d)"
            d="M42.82 36.01h10v24.47h-10z"
          />
          <path fill="url(#WaterMeter_svg__e)" d="M110.11 8.13h10V32.6h-10z" />
          <path
            transform="rotate(-45 182.392 48.24)"
            fill="url(#WaterMeter_svg__f)"
            d="M170.16 43.24h24.47v10h-24.47z"
          />
          <path
            transform="rotate(-28.81 198.474 69.674)"
            fill="url(#WaterMeter_svg__g)"
            d="M186.25 67.17h24.47v5h-24.47z"
          />
          <path
            transform="rotate(-73.81 23.724 88.989)"
            fill="url(#WaterMeter_svg__h)"
            d="M21.22 76.76h5v24.47h-5z"
          />
          <path
            transform="rotate(-73.81 206.484 142.066)"
            fill="url(#WaterMeter_svg__i)"
            d="M203.99 129.83h5v24.47h-5z"
          />
          <path
            transform="rotate(-28.81 69.248 32.146)"
            fill="url(#WaterMeter_svg__j)"
            d="M66.75 19.91h5v24.47h-5z"
          />
          <path
            transform="rotate(-73.81 141.631 24.149)"
            fill="url(#WaterMeter_svg__k)"
            d="M129.41 21.64h24.47v5h-24.47z"
          />
          <path
            transform="rotate(-14.49 22.974 139.325)"
            fill="url(#WaterMeter_svg__l)"
            d="M10.74 136.83h24.47v5H10.74z"
          />
          <path
            transform="rotate(-14.49 207.234 91.73)"
            fill="url(#WaterMeter_svg__m)"
            d="M195.01 89.22h24.47v5h-24.47z"
          />
          <path
            transform="rotate(-59.48 33.133 67.208)"
            fill="url(#WaterMeter_svg__n)"
            d="M30.63 54.97h5v24.47h-5z"
          />
          <path
            transform="rotate(-14.48 91.331 23.4)"
            fill="url(#WaterMeter_svg__o)"
            d="M88.8 11.16h5v24.47h-5z"
          />
          <path
            transform="rotate(-59.48 163.435 33.544)"
            fill="url(#WaterMeter_svg__p)"
            d="M151.19 31.05h24.47v5h-24.47z"
          />
          <path
            d="M114.66 0a114.66 114.66 0 10114.66 114.66A114.79 114.79 0 00114.66 0zm101 142.12q-.65 2.41-1.43 4.79a104.69 104.69 0 01-200-2.74c-.47-1.59-.91-3.2-1.29-4.83a102.31 102.31 0 01-2.78-18.81c-.12-1.94-.17-3.9-.17-5.87 0-1.38 0-2.76.09-4.13a103.43 103.43 0 013.2-22c.42-1.61.87-3.22 1.37-4.8A103.2 103.2 0 0123 64.15q1.21-2.19 2.52-4.32A105.48 105.48 0 0137 44.53c2.23-2.48 4.59-4.84 7.05-7.09A104.5 104.5 0 0162 24.22c1.44-.85 2.9-1.65 4.38-2.42a102.77 102.77 0 0119.85-7.88c1.6-.46 3.22-.87 4.85-1.25a103.26 103.26 0 0119-2.56c1.51-.08 3-.11 4.55-.11 1.83 0 3.64.05 5.45.14a104.08 104.08 0 0122 3.51q2.41.64 4.79 1.43a103.15 103.15 0 0119.47 8.6q2.17 1.23 4.29 2.58a104.81 104.81 0 0115.06 11.61q3.67 3.39 7 7.13a105.15 105.15 0 0112.9 17.9q1.25 2.17 2.38 4.41A103.69 103.69 0 01215.6 87c.44 1.6.85 3.22 1.2 4.85a102.77 102.77 0 012.43 18.7c.06 1.37.09 2.75.09 4.13 0 2 0 3.93-.17 5.87a103.86 103.86 0 01-3.49 21.57z"
            fill="url(#WaterMeter_svg__q)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgWaterMeter;
