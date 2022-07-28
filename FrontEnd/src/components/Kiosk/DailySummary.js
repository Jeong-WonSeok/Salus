import React from "react";
import styled from "styled-components";

const Round = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  width: 16.666vw;
  height: 9.375vh;
  border: 8px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  text-align: center;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.25),
    inset 5px 2px 5px rgba(0, 0, 0, 0.25);
`;

const Type = styled.div`
  height: 2rem;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1.6rem;
  margin-bottom: 1rem;
`;

const Info = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1.5rem;
`;

function DailySummary({ data, setValue }) {
  return (
    <Round
      onClick={() => {
        console.log(data.day);
        setValue(data.day);
      }}
    >
      <Type>{data.type}</Type>
      <div>
        <Info>Calorie(Kcal): {data.calorie}</Info>
        <Info>Volume(kg): {data.volume}</Info>
      </div>
    </Round>
  );
}

export default DailySummary;
