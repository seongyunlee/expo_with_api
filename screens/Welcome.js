import React, { useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
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
  const handleMedia = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log(
          "Sorry, we need camera roll permissions to make this work!"
        );
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      videoExportPreset: ImagePicker.VideoExportPreset.LowQuality,
      allowsEditing: false,
    });
    console.log(result);
    const url = "http://192.168.0.183:3000/video/uploadvideo";
    if (!result.cancelled) {
      let formdata = new FormData();
      formdata.append("file", { uri: result.uri, type: "video/mov" });
      console.log(formdata);
      axios({
        method: "post",
        url: "http://192.168.0.183:3000/video/uploadvideo",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          const result = response.data;
          console.log(response.dat);
          const { message, status } = result;

          if (status == 200) {
            console.log("ok");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
        <StyledButton onPress={handleMedia}>
          <ButtonText>Upload Video</ButtonText>
        </StyledButton>
      </InnerContainer>
    </StyledContainer>
  );
};
export default Welcome;
