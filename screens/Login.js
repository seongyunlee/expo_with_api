import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
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

  /*From here*/

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styling.container}
    >
      <StyledContainer>
        <InnerContainer>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == "" || values.password == "") {
                //console.log(33);
                handleMessage("아이디 비밀번호를 입력하세요");
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
                  icon="mail"
                  placeholder="아이디"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  icon="mail"
                  placeholder="비밀번호"
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
                    <StyledInputLabel>로그인</StyledInputLabel>
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
                <View style={styling.links}>
                  <TextLink>
                    <StyledInputLabel
                      onPress={() => {
                        navigation.navigate("Signup");
                      }}
                    >
                      회원가입
                    </StyledInputLabel>
                  </TextLink>
                  <TextLink>
                    <StyledInputLabel>|</StyledInputLabel>
                  </TextLink>
                  <TextLink>
                    <StyledInputLabel
                      onPress={() => {
                        navigation.navigate("Signup");
                      }}
                    >
                      비밀번호찾기
                    </StyledInputLabel>
                  </TextLink>
                </View>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingView>
  );
};
const MyTextInput = ({
  icon,
  hidePassword,
  isPassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <StyledTextInput {...props}></StyledTextInput>
    </View>
  );
};
const styling = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  links: {
    flexDirection: "row",
    alignSelf: "center",
  },
});
export default Login;
