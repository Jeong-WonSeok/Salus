import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: white;
  text-align: center;
  min-height: 2rem;
  line-height: 2rem;
  color: var(--linear-blue);
  font-weight: 700;
  display: flex;
`;

const Previous = styled.div`
  /* flex: 1; */
  text-align: left;
  margin-left: 1rem;
  padding: 0 1rem 0 1rem;
`;

const Next = styled.div`
  /* flex: 1; */
  text-align: left;
  margin-right: 1rem;
  padding: 0 1rem 0 1rem;
`;

const CalendarHeader = ({ value, setValue }) => {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  // const thisMonth = () => {
  //   return value.isSame(new Date(), "month");
  // };

  return (
    <Header>
      <div>
        {currMonthName()} {currYear()}
      </div>
      <Previous onClick={() => setValue(prevMonth())}>{"<"} </Previous>
      <Next onClick={() => setValue(nextMonth())}>{">"}</Next>
    </Header>
  );
};

export default CalendarHeader;
