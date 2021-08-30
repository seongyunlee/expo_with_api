import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";
import axios from "axios";
import { Ionicons, Octicons } from "@expo/vector-icons";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledInputLabel,
  MsgBox,
  RightIcon,
  StyledFormArea,
  StyledTextInput,
  StyledButton,
  ButtonText,
  TextLink,
} from "./../components/styles";

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();

  const handleMessage = (message) => {
    setMessage(message);
  };

  const handleLogin = (credential, setSubmitting) => {
    //console.log(credential);
    const url = "http://192.168.0.183:3000/user/signin";
    axios
      .post(url, credential)
      .then((response) => {
        const result = response.data;
        const { message, status } = result;

        if (status !== "Success") {
          handleMessage(message);
        } else {
          navigation.navigate("Welcome");
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
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styling.container}
    >
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
                //console.log(33);
                handleMessage("please fill all the fields");
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
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
                <MsgBox>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>login</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator
                      size="large"
                      color="#330000"
                    ></ActivityIndicator>
                    <ButtonText>login</ButtonText>
                  </StyledButton>
                )}
                <TextLink>
                  <StyledInputLabel
                    onPress={() => {
                      navigation.navigate("Signup");
                    }}
                  >
                    Make an Account!
                  </StyledInputLabel>
                </TextLink>
              </StyledFormArea>
            )}
          </Formik>
          <PageTitle>Hi</PageTitle>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingView>
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
const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
export default Login;
