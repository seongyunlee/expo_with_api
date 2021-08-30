import styled from "styled-components";
import { View, Text, TextInput, Image } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#E5e7eB",
  tertiary: "#333333",
  brand: "#33a221",
  green: "#00ff00",
  red: "#ff0000",
};

const { primary, secondary, tertiary, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  padding: 5px;
  align-items: center;
  align-self: stretch;
  flex: 1;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  width: 100%;
  align-items: center;
  padding: 1px;
  align-self: stretch;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: #33ff44;
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
`;
export const StyledFormArea = styled.View`
  width: 100%;
  background-color: ${red};
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  border-radius: 5px;
  font-size: 16px;
  color: ${tertiary};
`;

export const RightIcon = styled.TouchableOpacity`
  position: absolute;
  right: 3px;
  bottom: 10px;
  z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  align-items: center;
  background-color: ${green};
  padding: 15px;
  height: 60px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  align-self: center;
  color: ${primary};
`;
export const StyledInputLabel = styled.Text`
  font-size: 20px;
  color: ${tertiary};
`;
export const TextLink = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
