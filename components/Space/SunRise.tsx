function SunRise() {
  // Calculate the new center point for the sun after scaling
  // const newCenterX = 435; // Current center X-coordinate
  // const newCenterY = 260.5; // Current center Y-coordinate
  const newCenterX = 100; // Current center X-coordinate
  const newCenterY = 130; // Current center Y-coordinate
  const scale = 1.8; // Scale factor

  return (
    <div className="dark:hidden flex">
      <svg
        viewBox="0 0 870 521"
        className="sunrise  absolute top-0 left-0 z-20 opacity-70 "
        style={{
          animation: " 15s linear infinite", // Adjust timing accordingly
        }}
      >
        <g className="sunrise">
          {/* Sun Circles */}
          {/* <circle
            className="st1 animate-pulse"
            cx={newCenterX}
            cy={newCenterY}
            r={100.7 * scale}
            fill="#9c27b0" // Darker purple
          /> */}
          <circle
            className="st2 "
            cx={newCenterX}
            cy={newCenterY}
            r={40 * scale}
            fill="#ab47bc" // Medium purple
          />
          <circle
            className="st3 "
            cx={newCenterX}
            cy={newCenterY}
            r={30 * scale}
            fill="#ba68c8" // Lighter purple
          />
          <circle
            className="st4 "
            cx={newCenterX}
            cy={newCenterY}
            r={20 * scale}
            fill="#ce93d8" // Lightest purple
          />
        </g>
      </svg>
    </div>
  );
}

export default SunRise;
