import React from "react";

const VerticalGuides = ({ vg, padding, height, width, data }) => {
  const guideCount = vg || data.length - 1;

  const startY = padding;
  const endY = height - padding;

  return new Array(guideCount).fill(0).map((_, index) => {
    const ratio = (index + 1) / guideCount;

    const xCoordinate = padding + ratio * (width - padding * 2);

    return (
      <React.Fragment key={index}>
        <polyline
          fill="none"
          stroke="#ccc"
          strokeWidth=".5"
          points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
        />
      </React.Fragment>
    );
  });
};

export default VerticalGuides;
