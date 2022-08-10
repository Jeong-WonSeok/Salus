import styled from "styled-components";


export const RoundButton = styled.button`
  width: ${(props) => (props.buttonWidth ? props.buttonWidth : "100%")};
  height: ${(props) => (props.buttonHeight ? props.buttonHeight : "100%")};
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  color: white;
  text-align: center;
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "0px")};
`;