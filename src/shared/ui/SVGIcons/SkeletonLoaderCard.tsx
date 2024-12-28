interface SkeletonLoaderCardProps {
  className: string;
}
const SkeletonLoaderCard = (props: SkeletonLoaderCardProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <svg
        role="img"
        width="300"
        height="411"
        aria-labelledby="loading-aria"
        viewBox="0 0 300 411"
        preserveAspectRatio="none"
      >
        <title id="loading-aria">Loading...</title>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#clip-path)"
          fill="url(#fill)"
        ></rect>
        <defs>
          <clipPath id="clip-path">
            <rect x="11" y="12" rx="15" ry="15" width="279" height="220" />
            <rect x="13" y="246" rx="10" ry="10" width="57" height="27" />
            <rect x="13" y="280" rx="10" ry="10" width="104" height="23" />
            <rect x="11" y="359" rx="15" ry="15" width="277" height="39" />
            <rect x="10" y="328" rx="10" ry="10" width="37" height="19" />
          </clipPath>
          <linearGradient id="fill">
            <stop offset="0.399964" stopColor="#f2f2f3" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="0.599964" stopColor="#ffffff" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1.5; -1.5; 1.5"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="1.59996" stopColor="#dacdcd" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            <stop offset="2.59996" stopColor="#f2f2f3" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="2s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export { SkeletonLoaderCard };
