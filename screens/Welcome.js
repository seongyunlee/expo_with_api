import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import { Ionicons, Octicons } from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledInputLabel,
  RightIcon,
  StyledFormArea,
  StyledTextInput,
  StyledButton,
  ButtonText,
  TextLink,
} from "./../components/styles";

const Welcome = ({ navigation, ...data }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="contain"
          source={require("./../assets/logo.png")}
        />
        <PageTitle>Login Success</PageTitle>
        <StyledButton
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <ButtonText>Log out</ButtonText>
        </StyledButton>
      </InnerContainer>
    </StyledContainer>
  );
};
export default Welcome;
