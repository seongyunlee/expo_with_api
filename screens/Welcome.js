import React, { useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, Octicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
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

    const url = "http://192.168.0.183:3000/video/uploadvideo";

    if (!result.cancelled) {
      let formdata = new FormData();
      formdata.append("file", { uri: result.uri, type: "video/mov" });
      console.log(formdata);
      let options = {
        httpMethod: "PATCH",
        fieldName: "video",
        uploadType: FileSystem.FileSystemUploadType.MULTIPART,
        parameters: { email: "mader0708@gmail.come" },
      };
      FileSystem.uploadAsync(url, result.uri, options)
        .then((response) => {
          console.log(response);
          const result = response.data;
          const { message, status } = result;
          console.log("kkkkk");
          if (status == 200) {
            console.log("ok");
            return;
          } else {
            return;
          }
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    }
  };
  return (
    <StyledContainer>
      <InnerContainer>
        <PageLogo
          resizeMode="contain"
          source={require("./../assets/main_logo.png")}
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
        <StyledButton onPress={() => navigation.navigate("VideoList")}>
          <ButtonText>Watch Video</ButtonText>
        </StyledButton>
      </InnerContainer>
    </StyledContainer>
  );
};
export default Welcome;
