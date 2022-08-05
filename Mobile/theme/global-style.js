import styled from 'styled-components/native';
import { View } from 'react-native';

const Container = styled.view`
  margin: ${(props) => (props.m ? props.m : 0)};
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)};
  margin-top: ${(props) => (props.mt ? props.mt : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  padding-top: ${(props) => (props.pt ? props.pt : 0)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 0)};
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
  flex: ${(props) => (props.flex ? props.flex : 1)};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "")};
  box-shadow: ${(props) => (props.shadowView ? props.shadowView : "")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "nowrap")};
  overflow: ${(props) => (props.overflow ? props.overflow : "")};
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
`;