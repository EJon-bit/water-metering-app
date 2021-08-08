import * as React from "react";

function SvgLocation({ title, titleId, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 219.72 272.84"
      width="1em"
      height="1em"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <style>{".Location_svg__cls-2{fill:#0b0609}"}</style>
      </defs>
      <g id="Location_svg__Layer_2" data-name="Layer 2">
        <g id="Location_svg__Layer_1-2" data-name="Layer 1">
          <g id="Location_svg___Group_" data-name="&lt;Group&gt;">
            <g id="Location_svg___Group_2" data-name="&lt;Group&gt;">
              <path
                id="Location_svg___Path_"
                data-name="&lt;Path&gt;"
                fill="#46c1be"
                d="M214.1 267.22H5.62l39.95-97.59h128.58l39.95 97.59z"
              />
            </g>
            <g id="Location_svg___Group_3" data-name="&lt;Group&gt;">
              <path
                id="Location_svg___Compound_Path_"
                data-name="&lt;Compound Path&gt;"
                className="Location_svg__cls-2"
                d="M214.1 272.84H5.62a5.62 5.62 0 01-5.2-7.75l39.95-97.58a5.61 5.61 0 015.2-3.49h128.57a5.59 5.59 0 015.2 3.49l40 97.58a5.63 5.63 0 01-5.2 7.75zM14 261.6h191.72l-35.35-86.35h-121z"
              />
            </g>
            <g id="Location_svg___Group_4" data-name="&lt;Group&gt;">
              <path
                d="M109.86 5.62A72.16 72.16 0 0037.7 77.78c0 58.36 72.16 129.45 72.16 129.45S182 138.26 182 77.78a72.15 72.15 0 00-72.14-72.16zm0 98.33a34.67 34.67 0 1134.66-34.66A34.66 34.66 0 01109.86 104z"
                fill="#f05775"
                id="Location_svg___Group_5"
                data-name="&lt;Group&gt;"
              />
            </g>
            <g id="Location_svg___Group_6" data-name="&lt;Group&gt;">
              <path
                id="Location_svg___Compound_Path_2"
                data-name="&lt;Compound Path&gt;"
                className="Location_svg__cls-2"
                d="M109.8 215.06l-3.89-3.82c-3-3-73.83-73.44-73.83-133.46a77.78 77.78 0 11155.55 0c0 62.17-70.87 130.63-73.89 133.51zm.06-203.82a66.62 66.62 0 00-66.54 66.54c0 47.66 51.81 105.81 66.59 121.44 14.84-15.29 66.49-72.08 66.49-121.44a66.62 66.62 0 00-66.54-66.54zm0 98.33a40.29 40.29 0 1140.28-40.28 40.33 40.33 0 01-40.28 40.28zm0-69.33a29 29 0 1029 29.05 29.08 29.08 0 00-29-29.05z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgLocation;
