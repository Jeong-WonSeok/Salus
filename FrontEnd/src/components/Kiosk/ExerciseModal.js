import React from "react";
import closeIcon from "./../../assets/images/common/close-icon.jpg";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { Div } from "../../styles/web.style";


const BackDropDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const modalActive = keyframes`
  from { top: 200px;}
  to { bottom: 0px;}
`;

const ModalDiv = styled.div`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
    height: 30%;
    background: white;
    border-radius: 8px;
    &.modal-active {
      animation: ${modalActive} 0.6s;
    }
`;



const Img = styled.img`
  width: 7%;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const Backdrop = (props) => {
  if (!props.open) return null;
  return <BackDropDiv onClick={props.toggleModal}></BackDropDiv>;
};

const ModalOverlay = (props) => {
  if (!props.open) return null;
  return (
    <ModalDiv className="modal-active">
      <Img src={closeIcon} alt="" onClick={props.toggleModal} />
      <Div mt="200px" ml="300px" fontSize="5rem">{props.title}</Div>
    </ModalDiv>
  );
};

const ExerciseModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop toggleModal={props.toggleModal} open={props.open} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          toggleModal={props.toggleModal}
          open={props.open}
          title={props.title}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ExerciseModal;
