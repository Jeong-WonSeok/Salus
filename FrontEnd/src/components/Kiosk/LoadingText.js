import React from 'react';
import { Div } from './../../styles/kiosk.style';
import styled, { keyframes } from 'styled-components';
const animate = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const H1 = styled.h1`
  position: relative;
  font-size: 6em;
  color: rgba(251, 129, 107, 0.5);
  text-transform: uppercase;
  border-bottom: 16px solid rgba(251, 129, 107, 0.5);
  letter-spacing: 0.1em;
  line-height: 1em;
  &:before {
    content: attr(data-text);
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #03a9f4;
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
    border-bottom: 16px solid #92a3fd;
    animation: ${animate} 4s linear infinite;
  }
`;

const NewDiv = styled(Div)`
  box-sizing: border-box;
  min-height: 100vh;
  padding-bottom: 20%;
`

const LoadingText = () => {
  return (
    <NewDiv displayDiv="flex" justifyContent="center" alignItems="center">

      <H1 data-text="Loading...">Loading...</H1>
    </NewDiv>
  );
};

export default LoadingText;