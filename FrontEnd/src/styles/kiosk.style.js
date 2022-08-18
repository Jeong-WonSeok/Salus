// 기본 div 로직
import styled from 'styled-components';

export const Div = styled.div`
  margin: ${(props) => (props.m ? props.m : "0px")};
  margin-bottom: ${(props) =>
    props.mb ? (props.mb / 1920) * 100 + "vh" : "0px"};
  margin-top: ${(props) => (props.mt ? (props.mt / 1920) * 100 + "vh" : "0px")};
  margin-right: ${(props) =>
    props.mr ? (props.mr / 1080) * 100 + "vw" : "0px"};
  margin-left: ${(props) =>
    props.ml ? (props.ml / 1080) * 100 + "vw" : "0px"};
  padding-top: ${(props) =>
    props.pt ? (props.pt / 1920) * 100 + "vh" : "0px"};
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
`;

//기본 Div를 상속받아 오버라이딩한 스타일
export const LogoDiv = styled(Div)`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '100px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
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
  width: ${(props) => (props.divWidth / 1080) * 100 + 'vw'};
  height: ${(props) => (props.divHeight / 1920) * 100 + 'vh'};
`;

export const DailyLogoDiv = styled(LogoDiv)`
  background: linear-gradient(284.21deg, #2e52ff -7.95%, #8da1ff 138.55%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
