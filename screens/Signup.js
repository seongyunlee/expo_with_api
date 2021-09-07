import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import Constants from "expo-constants";
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

const StatusBarHeight = Constants.statusBarHeight;

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(false);
  const [hidePassword2, setHidePassword2] = useState(false);
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
      isTeacher: credential.isTeacher,
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
        handleMessage("네트워크 연결상태를 확인하세요.");
      });
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={StatusBarHeight}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styling.container}
      onPress={console.log(33)}
    >
      <StyledContainer>
        <ScrollView style={styling.container}>
          <InnerContainer>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values, { setSubmitting }) => {
                if (values.email == "" || values.password == "") {
                  handleMessage("모든 항목을 입력하세요.");
                  setSubmitting(false);
                } else if (values.password != values.pw2) {
                  handleMessage("비밀번호 확인이 다릅니다.");
                } else {
                  handleSignup(values, setSubmitting);
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    lable="아이디"
                    icon="mail"
                    placeholder="아이디 입력"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="default"
                  />
                  <MyTextInput
                    lable="비밀번호"
                    icon="mail"
                    placeholder="비밀번호 입력"
                    placholderTextColor="#F0F0F0"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    keyboardType="default"
                    secureTextEntry={!hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <MyTextInput
                    lable="비밀번호 확인"
                    icon="mail"
                    placeholder="비밀번호 확인"
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
                  <StyledButton
                    onPress={() => {
                      values.isTeacher = false;
                      handleSubmit();
                    }}
                  >
                    <StyledInputLabel>학생/학부모로 가입하기</StyledInputLabel>
                  </StyledButton>
                  <StyledButton
                    onPress={() => {
                      values.isTeacher = true;
                      handleSubmit();
                    }}
                  >
                    <StyledInputLabel>선생님으로 가입하기</StyledInputLabel>
                  </StyledButton>
                  <TextLink
                    onPress={() => {
                      console.log("33");
                      navigation.navigate("Login");
                    }}
                  >
                    <StyledInputLabel>이전 화면으로 이동</StyledInputLabel>
                  </TextLink>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </ScrollView>
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
    </View>
  );
};
const styling = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignSelf: "stretch",
    flex: 1,
  },
  wrapper: {
    backgroundColor: "#000000",
  },
});
export default Signup;
