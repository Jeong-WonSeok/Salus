import styled from "styled-components";
import { Div } from "../../../../src/styles/web.style";
export const Label = styled.label`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  color: black;
  font-size: 1.3rem;
  z-index: 1;
  position: relative;
  border-radius: 5px;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
`;

export const StyledDiv = styled(Div)`
  position: absolute;
  height: 100%;
  width: 25%;
  z-index: 0;
  left: 0;
  bottom: 0;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  border-radius: 5px;
  transition: all 0.35s ease;
`;

export const NewDiv = styled(Div)`
  #upper:checked ~ div .slider {
    left: 25%;
  }
  #lower:checked ~ div .slider {
    left: 50%;
  }
  #cardio:checked ~ div .slider {
    left: 75%;
  }
  #whole:checked ~ div label.Whole,
  #upper:checked ~ div label.Upper,
  #lower:checked ~ div label.Lower,
  #cardio:checked ~ div label.Cardio {
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .content {
    display: none;
  }

  #whole:checked ~ section .content1 {
    display: block;
  }

  #upper:checked ~ section .content2 {
    display: block;
  }

  #lower:checked ~ section .content3 {
    display: block;
  }

  #cardio:checked ~ section .content4 {
    display: block;
  }

  & input[type="radio"] {
    display: none;
  }
`;

export const Section = styled.section`
  background-color: white;
  width: 100%;
  height: 780px;
  display: flex;
  justify-content: center;
`;
