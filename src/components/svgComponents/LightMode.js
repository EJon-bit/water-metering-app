import * as React from "react";

function SvgLightMode({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 282.58 282.58"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>{".LightMode_svg__cls-2{fill:#732c2b}"}</style>
      </defs>
      <g id="LightMode_svg__Layer_2" data-name="Layer 2">
        <g id="LightMode_svg__Layer_1-2" data-name="Layer 1">
          <path
            d="M266.53 200.09l-56.32-14.3a25.09 25.09 0 00-31 28.21l9 57.42-29.74-49.93a25.08 25.08 0 00-41.83-1.93l-34.2 47 14.29-56.32a25.08 25.08 0 00-28.21-31l-57.42 9 50-29.71A25.09 25.09 0 0063 116.7L16 82.5l56.37 14.29a25.09 25.09 0 0031-28.21l-9-57.42 29.68 49.94a25.09 25.09 0 0041.84 1.9l34.2-47-14.29 56.37a25.09 25.09 0 0028.2 31l57.42-9-49.93 29.74a25.09 25.09 0 00-1.93 41.84z"
            fill="#ec7863"
          />
          <path
            className="LightMode_svg__cls-2"
            d="M188.27 275.58a4.15 4.15 0 01-3.57-2L155 223.62a20.93 20.93 0 00-34.9-1.61l-34.2 47a4.17 4.17 0 01-7.4-3.48l14.3-56.31a20.93 20.93 0 00-23.53-25.82l-57.42 9A4.16 4.16 0 019 184.7L59 155a20.94 20.94 0 001.61-34.9l-47-34.2a4.17 4.17 0 013.48-7.4L73.4 92.75a20.91 20.91 0 0025.81-23.52l-9-57.42A4.16 4.16 0 0197.88 9l29.75 50a20.93 20.93 0 0034.89 1.61l34.2-47a4.17 4.17 0 017.4 3.48L189.83 73.4a20.91 20.91 0 0023.53 25.81l57.42-9a4.16 4.16 0 012.77 7.68l-49.93 29.75a20.92 20.92 0 00-1.62 34.88l47 34.2a4.16 4.16 0 01-3.47 7.4l-56.32-14.29a20.92 20.92 0 00-25.82 23.53l9 57.42a4.16 4.16 0 01-2.69 4.56 4.41 4.41 0 01-1.43.24zM137 205.08h1.36a29.18 29.18 0 0123.79 14.25l18.71 31.42-5.67-36.13a29.24 29.24 0 0136.09-32.89l35.39 9-29.52-21.49a29.25 29.25 0 012.25-48.77l31.42-18.72-36.13 5.68a29.25 29.25 0 01-32.89-36.09l9-35.4-21.55 29.53a29.24 29.24 0 01-48.77-2.24l-18.72-31.42 5.68 36.12a29.25 29.25 0 01-36.09 32.89L36 91.84l29.52 21.49a29.26 29.26 0 01-2.25 48.78l-31.46 18.71 36.13-5.67a29.24 29.24 0 0132.88 36.08l-9 35.4 21.49-29.52A29.18 29.18 0 01137 205.08z"
          />
          <path
            d="M276.64 141.29l-55.81 10.76a24.54 24.54 0 00-15.69 37.85L237 237l-47.1-31.86a24.54 24.54 0 00-37.85 15.69l-10.76 55.81-10.76-55.81a24.53 24.53 0 00-37.84-15.69L45.59 237l31.85-47.1a24.54 24.54 0 00-15.68-37.85L5.94 141.29l55.82-10.76a24.54 24.54 0 0015.68-37.84l-31.85-47.1 47.1 31.85a24.53 24.53 0 0037.84-15.68l10.76-55.82 10.76 55.82a24.54 24.54 0 0037.85 15.68L237 45.59l-31.86 47.1a24.54 24.54 0 0015.69 37.84z"
            fill="#de4d2e"
          />
          <path
            className="LightMode_svg__cls-2"
            d="M141.29 282.58a5.93 5.93 0 01-5.83-4.82L124.7 222A18.6 18.6 0 0096 210.07l-47.1 31.85a5.94 5.94 0 01-8.26-8.25l31.86-47.1a18.6 18.6 0 00-11.89-28.68L4.82 147.13a5.95 5.95 0 010-11.68l55.81-10.75A18.61 18.61 0 0072.52 96L40.66 48.92a5.95 5.95 0 018.26-8.26L96 72.52a18.61 18.61 0 0028.7-11.89l10.76-55.81a5.94 5.94 0 0111.67 0l10.76 55.81a18.6 18.6 0 0028.68 11.89l47.1-31.86a5.94 5.94 0 018.25 8.26L210.07 96A18.6 18.6 0 00222 124.7l55.81 10.75a5.95 5.95 0 010 11.68L222 157.89a18.59 18.59 0 00-11.88 28.68l31.85 47.1a5.94 5.94 0 01-8.25 8.25l-47.1-31.85A18.59 18.59 0 00157.89 222l-10.76 55.81a6 6 0 01-5.84 4.77zM106.42 195a30.54 30.54 0 0130 24.73l4.92 25.53 4.92-25.53a30.49 30.49 0 0147-19.48l21.59 14.6-14.6-21.59a30.49 30.49 0 0119.48-47l25.53-4.92-25.53-4.92a30.48 30.48 0 01-19.48-47l14.61-21.6-21.6 14.61a30.49 30.49 0 01-47-19.49l-4.92-25.53-4.92 25.53a30.47 30.47 0 01-47 19.48l-21.6-14.6 14.61 21.6a30.48 30.48 0 01-19.49 47l-25.53 4.92 25.53 4.92a30.49 30.49 0 0119.49 47l-14.67 21.56 21.6-14.6a30.42 30.42 0 0117.06-5.22z"
          />
          <circle
            cx={141.29}
            cy={141.29}
            r={44.12}
            transform="rotate(-22.5 141.306 141.282)"
            fill="#fec256"
          />
          <path
            className="LightMode_svg__cls-2"
            d="M141.29 189.57a48.28 48.28 0 1148.28-48.28 48.33 48.33 0 01-48.28 48.28zm0-88.24a40 40 0 1040 40 40 40 0 00-40-40z"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgLightMode;
