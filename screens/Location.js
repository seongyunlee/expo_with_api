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

const Location = ({ navigation, ...data }) => {
  return <StyledContainer></StyledContainer>;
};
const ButtonBox = ({ image }) => {
  return (
    <ButtonBoxTouch>
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
export default Location;
