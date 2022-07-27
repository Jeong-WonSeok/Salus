import React from "react";
import styled from "@emotion/styled";

const Circle = styled.circle`
  animation: circle-fill-animation 2s ease;
  stroke-linecap: round;

  @keyframes circle-fill-animation {
    0% {
      stroke-dashoffset: -${2 * Math.PI * 90};
    }
    100% {
      stroke-dashoffset: ${(props) => -2 * Math.PI * 90 * (1-props.roundRatio)};
    }
  }
`;

const Div = styled.div`
  width: ${props => props.roundWidth ? props.roundWidth : "180px"};
  height: ${props => props.roundHeight ? props.roundHeight : "180px"};
  position: relative;
`
const TextDiv = styled.div`
  position: absolute;
  top: ${(props) => (props.textTop ? props.textTop : "10%")};
  left: ${(props) => (props.textLeft ? props.textLeft : "2.7%")};
`;
const Svg = styled.svg`
  transform: rotate(-90deg);
`

const RoundChart = ({
  roundRatio = 1,
  roundWidth = "180px",
  roundHeight = "180px",
  colorGradient = ["#9DCEFF", "#92A3FD", "#6e85f7"],
  textTop="10%",
  textLeft="2.7%",
  children
}) => {
  const KEY = Date.now();

  return (
    <Div roundHeight={roundHeight} roundWidth={roundWidth}>
      <TextDiv textTop={textTop} textLeft={textLeft}>
        {children}
      </TextDiv>
      <Svg viewBox="0 0 200 200">
        <linearGradient id={`linearColors${KEY}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colorGradient[0]}></stop>
          <stop offset="50%" stopColor={colorGradient[1]}></stop>
          <stop offset="100%" stopColor={colorGradient[2]}></stop>
        </linearGradient>
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          strokeWidth="10"
          stroke="#EDEEF4"
        />
        <Circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          strokeWidth="10"
          stroke={`url(#linearColors${KEY})`}
          strokeDasharray={`${2 * Math.PI * 90 * 1}`}
          roundRatio= {roundRatio}
        />
      </Svg>
    </Div>
  );
};

export default RoundChart;
