import React from "react";
import VerticalGuides from "./VerticalGuides";
import HorizontalGuides from "./HorizontalGuides";
import LabelsXAxis from "./LabelsXAxis";
import LabelsYAxis from "./LabelsYAxis";

const LineChart = ({
  data,
  height = 200,
  width = 500,
  horizontalGuides: hg,
  verticalGuides: vg,
  precision = 0,
  guide,
  unit,
  name,
}) => {
  let value = 0;
  for (const data of guide) {
    if (data.equipmentName === name) {
      value = data.standardVolume;
      break;
    }
  }
  const STROKE = 2.5;
  const FONT_SIZE = width / 50;
  const maximumXFromData = Math.max(...data.map((e) => e.x));
  const maximumYFromData = Math.max(...data.map((e) => e.y), value);

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;
  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const guideY =
    chartHeight - (value / maximumYFromData) * chartHeight + padding;
  const guidePoints = `${padding},${guideY} ${chartWidth + padding},${guideY}`;
  const points = data
    .map((element) => {
      const x = maximumXFromData
        ? (element.x / maximumXFromData) * chartWidth + padding
        : padding;
      const y =
        chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
      return `${x},${y}`;
    })
    .join(" ");

  const dotPoints = data.map((element) => {
    const x = maximumXFromData
      ? (element.x / maximumXFromData) * chartWidth + padding
      : padding;
    const y =
      chartHeight - (element.y / maximumYFromData) * chartHeight + padding;
    const arr = [];
    arr.push(x);
    arr.push(y);
    return arr;
  });

  const Axis = ({ points }) => (
    <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />
  );

  const XAxis = ({ padding, height, width }) => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${
        height - padding
      }`}
    />
  );

  const YAxis = () => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ border: "0.5px solid #ccc" }}
    >
      <XAxis padding={padding} height={height} width={width} />
      <LabelsXAxis
        data={data}
        height={height}
        padding={padding}
        FONT_SIZE={FONT_SIZE}
        maximumXFromData={maximumXFromData}
        chartWidth={chartWidth}
      />
      <YAxis />

      {vg && (
        <VerticalGuides
          vg={vg}
          padding={padding}
          height={height}
          width={width}
          data={data}
        />
      )}
      <HorizontalGuides
        hg={hg}
        padding={padding}
        width={width}
        chartHeight={chartHeight}
      />
      <polyline
        fill="none"
        stroke="#f06875"
        strokeWidth={STROKE}
        points={guidePoints}
      />

      <g>
        <circle
          data-value="7.2"
          r="6"
          cx={padding}
          cy={guideY}
          stroke="#fff"
          fill="#f06875"
        ></circle>
        <circle
          data-value="7.2"
          r="6"
          cx={chartWidth + padding}
          cy={guideY}
          stroke="#fff"
          fill="#f06875"
        ></circle>
      </g>
      <polyline
        fill="none"
        stroke="#8DA1FF"
        strokeWidth={STROKE}
        points={points}
      />

      <g>
        {dotPoints.map((dot, index) => (
          <circle
            data-value="7.2"
            r="6"
            key={index}
            cx={dot[0]}
            cy={dot[1]}
            stroke="#fff"
            fill="#8DA1FF"
          ></circle>
        ))}
      </g>
      <text
        x={350}
        y={guideY + 15}
        style={{
          fill: "#f06875",
          fontSize: FONT_SIZE + 5,
          fontFamily: "Helvetica",
        }}
        stroke="#000"
        strokeWidth={0.05}
      >
        {value} {unit}
      </text>
      <LabelsYAxis
        hg={hg}
        FONT_SIZE={FONT_SIZE}
        chartHeight={chartHeight}
        padding={padding}
        maximumYFromData={maximumYFromData}
        precision={precision}
        unit={unit}
      />
    </svg>
  );
};

export default LineChart;
