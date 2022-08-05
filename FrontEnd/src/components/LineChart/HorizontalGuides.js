import React from "react";

const HorizontalGuides = ({ hg, padding, width, chartHeight }) => {
  const startX = padding;
  const endX = width - padding;

  return new Array(hg).fill(0).map((_, index) => {
    const ratio = (index + 1) / hg;

    const yCoordinate = chartHeight - chartHeight * ratio + padding;

    return (
      <React.Fragment key={index}>
        <polyline
          fill="none"
          stroke={"#ccc"}
          strokeWidth=".5"
          points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
        />
      </React.Fragment>
    );
  });
};

export default HorizontalGuides;
