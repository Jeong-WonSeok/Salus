import React from "react";

const LabelsXAxis = ({
  data,
  height,
  padding,
  FONT_SIZE,
  maximumXFromData,
  chartWidth,
}) => {
  const y = height - padding + FONT_SIZE * 2;

  return data.map((element, index) => {
    const x =
      (element.x / maximumXFromData) * chartWidth + padding - FONT_SIZE / 2;
    return (
      <text
        key={index}
        x={x}
        y={y}
        style={{
          fill: "#808080",
          fontSize: FONT_SIZE,
          fontFamily: "Helvetica",
        }}
      >
        {element.label}
      </text>
    );
  });
};

export default LabelsXAxis;
