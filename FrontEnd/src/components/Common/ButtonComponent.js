import React, { Fragment } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.buttonWidth ? props.buttonWidth : "0px"};
  height: ${(props) => props.buttonHeight ? props.buttonHeight : "0px"};
  color: ${(props) => props.fontColor};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize + "px"};
  background-image: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  border-radius: 5px;
  text-align: center;
  transition: 0.35s;

  &:hover {
    opacity: 0.7;
    transform: scale(0.95);
  }
`;

const ButtonComponent = ({
  buttonWidth = 358,
  buttonHeight = 51,
  buttonText = "버튼 이름",
  fontWeight = 600,
  fontSize = 20,
  fontColor = "white",
  onClick = {}
}) => {
  
  return (
    <Fragment>
      <Button
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        buttonText={buttonText}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Fragment>
  );
};

export default ButtonComponent;
