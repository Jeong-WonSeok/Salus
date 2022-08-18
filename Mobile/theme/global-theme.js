import styled from 'styled-components/native';
export const Container = styled.View`
  flex: ${(props) => (props.flex ? props.flex : '')};
  background: ${(props) => (props.background ? props.background : "white")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  margin: ${(props) => (props.m ? props.m : 0)};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
  padding-top: ${(props) => (props.pt ? props.pt : 0)};
  padding-bottom: ${(props) => (props.pt ? props.pb : 0)};
  padding-right: ${(props) => (props.pt ? props.pr : 0)};
  padding-left: ${(props) => (props.pt ? props.pl : 0)};
  padding: ${(props) => (props.p ? props.p : 0)};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  color: ${(props) => (props.fontColor ? props.fontColor : "")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : 0)};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};
  border: ${(props) => (props.border ? props.border : 'none')};
`;

