import React, { Fragment } from "react";
import styled from "styled-components";

const ButtonComponent = ({
  buttonWidth = 358,
  buttonHeight = 51,
  buttonText = "버튼 이름",
  buttonColor = "linear-gradient(284.21deg, #92A3FD -7.95%, #9DCEFF 138.55%)",
  fontWeight = 600,
  fontSize = 20,
  fontColor = "white",
}) => {
  const Button = styled.button`
    width: ${(props) => props.buttonWidth + "px"};
    height: ${(props) => props.buttonHeight + "px"};
    color: ${(props) => props.fontColor};
    font-weight: ${(props) => props.fontWeight};
    font-size: ${(props) => props.fontSize + "px"};
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    border-radius: 5px;
    text-align: center;
  `;
  return (
    <Fragment>
      <Button
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        buttonText={buttonText}
        buttonColor={buttonColor}
        fontWeight={fontWeight}
        fontSize={fontSize}
        fontColor={fontColor}
      >
        {buttonText}
      </Button>
    </Fragment>
  );
};

export default ButtonComponent;
