import React from "react";
import DailySummary from "./DailySummary";
import styled from "styled-components";

const Container = styled.div`
  width: 93vw;
  height: 15.6vh;
  background-color: white;
  margin: 0 auto;
  border-radius: 8px;
  color: #443b46;
`;

const Header = styled.div`
  display: flex;
  width: 93vw;
  padding-top: 2rem;
  margin-bottom: 2rem;
`;

const Day = styled.div`
  width: calc(100% / 5);
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const Icon = styled.div`
  display: flex;
  margin: 0 auto;
`;

function WeeklySummary({ datas, onChange, date }) {
  return (
    <Container>
      <Header>
        {["오늘", "1일 전", "2일 전", "3일 전", "4일 전"].map((day, index) => {
          return <Day key={index}>{day}</Day>;
        })}
      </Header>
      <Icon>
        {datas.map((data, index) => {
          return (
            <DailySummary
              data={data}
              key={index}
              setValue={onChange}
              date={date}
            />
          );
        })}
      </Icon>
    </Container>
  );
}

export default WeeklySummary;
