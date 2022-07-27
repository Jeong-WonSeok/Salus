import React from 'react';
import { Fragment } from 'react';
import RoundChart from './../components/RoundChart';

const KioskMainPage = () => {
  return (
    <Fragment>
      <RoundChart roundRatio={0.9} roundWidth = "180px" roundHeight = "180px" colorGradient={["#9DCEFF", "#92A3FD", "#6e85f7"]}>
      </RoundChart>
    </Fragment>
  );
};

export default KioskMainPage;