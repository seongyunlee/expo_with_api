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

export const UpperView = styled.View`
  height: 35%;
  align-items: center;
  padding: 1px;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;
export const ProfileImage = styled.Image`
  flex: 2;
  margin: 10px;
`;

export const InfoView = styled.View`
  flex: 3;
`;

export const TabBoxContainer = styled.View`
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
`;
export const TabBox = styled.View`
  flex: 1;
  height: 40px;
  padding-top: 5px;
  align-items: center;
  border-width: 3px;
  margin: 1px;
`;
export const TabText = styled.Text`
  font-size: 20px;
  height: 100%;
  background-color: ${primary};
`;

export const Line = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${green};
`;

export const UnderView = styled.View`
  height: 75;
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
