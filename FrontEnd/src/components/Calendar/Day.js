import React from "react";
import dayStyles from "./styles";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  width: calc(100% / 7);
  height: 150px;
  display: block;
  background-color: white;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 1px solid #dcddde;
  z-index: 1;
  text-align: center;
  padding: 1rem 0 1rem 0;

  &div {
    position: relative;
    z-index: 100;
  }

  & div.before {
    color: lightgray;
    height: 2rem;
  }

  & div.selected {
    background: linear-gradient(284.21deg, #fb816b -7.95%, #fea08f 138.55%);
    color: white;
    justify-content: center;
    margin: 0 auto;
    height: 2rem;
    width: 2.2rem;
    border-radius: 7px;
  }

  & div.today {
    background: red;
    color: white;
    justify-content: center;
    margin: 0 auto;
    height: 2rem;
    width: 2.2rem;
    border-radius: 7px;
  }

  & div.events {
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    color: white;
    justify-content: center;
    margin: 0 auto;
    height: 2rem;
    width: 2.2rem;
    border-radius: 7px;
  }
`;

const Event = styled.div`
  margin-top: 1rem;
  position: relative;
  color: red;
`;

function Day({ day, value, events, onChange }) {
  const context = dayStyles(day, value, events);
  return (
    <Div onClick={() => onChange(day)}>
      <div className={context === "today" ? context : context.style}>
        {day.format("D").toString()}
      </div>
      <Event>{context.type}</Event>
    </Div>
  );
}

export default Day;
