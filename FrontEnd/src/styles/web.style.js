import styled from "styled-components";

export const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
  margin-top: ${(props) => (props.mt ? props.mt : "0px")};
  margin-right: ${(props) => (props.mr ? props.mr : "0px")};
  margin-left: ${(props) => (props.ml ? props.ml : "0px")};
  padding-top: ${(props) => (props.pt ? props.pt : "0px")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  display: ${(props) => (props.displayDiv ? props.displayDiv : "block")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "none"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "none")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  background: ${(props) => (props.bgMain ? props.bgMain : "")};
  -webkit-background-clip: ${(props) => (props.bgClip ? props.bgClip : "")};
  -webkit-text-fill-color: ${(props) => (props.bgFill ? props.bgFill : "")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  position: ${(props) => (props.positionDiv ? props.positionDiv : "relative")};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  box-shadow: ${(props) => (props.shadowDiv ? props.shadowDiv : "")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};
  overflow: ${(props) => (props.overflow ? props.overflow : "")};

  .content::-webkit-scrollbar {
    width: 15px;
    height: 100%;
    background-color: black;
    border-radius: 10px;
    
  }
  .content::-webkit-scrollbar-thumb {
    background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
    border-radius: 10px;
    
  }
  .content::-webkit-scrollbar-track {
    background-color: #e6eaff;
    border-radius: 10px;
  }
`;

//기본 Div를 상속받아 오버라이딩한 스타일
export const LogoDiv = styled(Div)`
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "100px")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  background: linear-gradient(284.21deg, #92a3fd -7.95%, #9dceff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
// 기본 Div를 상속받아 크기를 조절할 수 있는 스타일
export const CustomDiv = styled(Div)`
  width: ${(props) => props.divWidth};
  height: ${(props) => props.divHeight};

  & .wrap-over {
    display: hidden;
    transition: 0.3s ease;
  }

  & .wrap-over div {
    display: flex;
    & button {
      display: none;
    }
  }

  & .wrap-over:hover {
    display: block;
    background: #e6eaff;
    & div button {
      display: block;
      transition: 0.35s ease;
      font-weight: 600;
      font-size: 16px;
      width: 120px;
      height: 30px;
      box-shadow: 0px 1px 0.5px;
      &:hover {
        color: #443b46;
      }
    }
  }
`;