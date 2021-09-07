import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import axios from "axios";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  ButtonBoxTouch,
  TwoBoxRow,
} from "../components/homeStyles";

const Home = ({ navigation }) => {
  return (
    <StyledContainer>
      <PageLogo
        resizeMode="contain"
        source={require("./../assets/main_logo.png")}
      />
      <TwoBoxRow>
        <ButtonBox image={require("./../assets/findteacher.png")}></ButtonBox>
        <ButtonBox image={require("./../assets/community.png")}></ButtonBox>
      </TwoBoxRow>
      <TwoBoxRow>
        <ButtonBox image={require("./../assets/message_logo.png")}></ButtonBox>
        <ButtonBox
          togo={() => navigation.navigate("Mypage")}
          image={require("./../assets/mypage_logo.png")}
        ></ButtonBox>
      </TwoBoxRow>
    </StyledContainer>
  );
};
const ButtonBox = ({ togo, image }) => {
  return (
    <ButtonBoxTouch onPress={togo}>
      <Image style={styles.stretch} source={image} />
    </ButtonBoxTouch>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  st: {
    backgroundColor: "#123123",
  },
});
export default Home;
