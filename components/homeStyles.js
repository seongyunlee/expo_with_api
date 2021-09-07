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
  align-items: center;
  align-self: center;
  flex: 1;
  width: 100%;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  width: 80%;
  align-items: center;
  padding: 1px;
  align-self: center;
  background-color: ${primary};
`;

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`;
export const TwoBoxRow = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonBoxTouch = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  margin: 10px;
  align-items: center;
`;
