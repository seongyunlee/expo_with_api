import React, { useState } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { Ionicons, Octicons } from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  MsgBox,
  PageTitle,
  StyledInputLabel,
  RightIcon,
  StyledFormArea,
  StyledTextInput,
  StyledButton,
  ButtonText,
  TextLink,
} from "./../components/styles";

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hidePassword2, setHidePassword2] = useState(true);
  const [message, setMessage] = useState();

  const handleMessage = (message) => {
    setMessage(message);
  };

  const handleSignup = (credential, setSubmitting) => {
    handleMessage(null);
    const url = "http://192.168.0.183:3000/user/signup";
    credential = {
      email: credential.email,
      password: credential.password,
    };
    axios
      .post(url, credential)
      .then((response) => {
        const result = response.data;
        const { message, status } = result;

        if (status !== "SUCCESS") {
          handleMessage(message);
        } else {
          navigation.navigate("Login");
        }
        setSubmitting(false);
      })
      .catch((err) => {
        //console.log(err.JSON());
        setSubmitting(false);
        handleMessage("check your input or your network");
      });
  };

  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="contain"
          source={require("./../assets/logo.png")}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              handleMessage("please fill all the fields");
              setSubmitting(false);
            } else if (values.password != values.pw2) {
              handleMessage("check password confirmation");
            } else {
              handleSignup(values, setSubmitting);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                lable="Email Address"
                icon="mail"
                placeholder="email address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
              <MyTextInput
                lable="Password"
                icon="mail"
                placeholder="*****"
                placholderTextColor="#F0F0F0"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                keyboardType="visible-password"
                secureTextEntry={!hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                lable="Confirm password"
                icon="mail"
                placeholder="*****"
                placholderTextColor="#F0F0F0"
                onChangeText={handleChange("pw2")}
                onBlur={handleBlur("pw2")}
                value={values.pw2}
                keyboardType="visible-password"
                secureTextEntry={!hidePassword2}
                isPassword={true}
                hidePassword={hidePassword2}
                setHidePassword={setHidePassword2}
              />
              <MsgBox>{message}</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Submit!</ButtonText>
              </StyledButton>
              <TextLink
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <StyledInputLabel>Back to Login</StyledInputLabel>
              </TextLink>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};
const MyTextInput = ({
  lable,
  icon,
  hidePassword,
  isPassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <StyledInputLabel>{lable}</StyledInputLabel>
      <StyledTextInput {...props}></StyledTextInput>
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color="#33ff33"
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Signup;
