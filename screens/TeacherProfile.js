import React, { useState } from "react";
import { View, Image, StyleSheet, SectionList } from "react-native";
import axios from "axios";
import { Formik } from "formik";
import { Video, AVPlaybackStatus } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  Line,
  ButtonBoxTouch,
  TwoBoxRow,
  UpperView,
  UnderView,
  InfoView,
  ProfileImage,
  TabBoxContainer,
  TabBox,
  TabText,
} from "../components/profileStyles";
import { StyledInputLabel, TextLink } from "../components/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Location = ({ navigation, ...data }) => {
  const video = React.useRef(null);
  const [status, setStatus] = useState({});
  const [listnum, setlistnum] = useState("1");

  return (
    <StyledContainer>
      <UpperView>
        <ProfileImage
          resizeMode="contain"
          source={require("./../assets/icon.png")}
        />
        <InfoView>
          <LogoInfo
            lable={"00대학 00학과"}
            image={require("./../assets/icon.png")}
          ></LogoInfo>
          <LogoInfo
            lable={"중학교 영어 전범위"}
            image={require("./../assets/icon.png")}
          ></LogoInfo>
          <LogoInfo
            lable={"강남구 대치동 ,역삼동"}
            image={require("./../assets/icon.png")}
          ></LogoInfo>
        </InfoView>
      </UpperView>
      <Video
        source={{
          uri: "http://192.168.0.183:3000/video/getVideo/video-1630654842967.mov",
        }}
        ref={video}
        style={styles.video}
        useNativeControls
        resizeMode="cover"
        isLooping={false}
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <TabBoxContainer>
        <Tab
          onPress={() => {
            setlistnum("1");
          }}
          lable={"프로필"}
        ></Tab>
        <Tab
          onPress={() => {
            setlistnum("2");
          }}
          lable={"경력"}
        ></Tab>
        <Tab
          onPress={() => {
            setlistnum("3");
          }}
          lable={"리뷰"}
        ></Tab>
      </TabBoxContainer>
      <StyledInputLabel>{listnum}</StyledInputLabel>
    </StyledContainer>
  );
};
const Tab = ({ lable, onPress, isClick }) => {
  return (
    <TabBox>
      <TouchableOpacity onPress={onPress}>
        <TabText>{lable}</TabText>
        {isClick && <Line />}
      </TouchableOpacity>
    </TabBox>
  );
};
const LogoInfo = ({ image, lable }) => {
  return (
    <View style={styles.row}>
      <Image style={styles.stretch} source={image} />
      <StyledInputLabel>{lable}</StyledInputLabel>
      <TextLink>
        <StyledInputLabel>수정</StyledInputLabel>
      </TextLink>
    </View>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 10,
    height: 10,
    resizeMode: "contain",
  },
  row: {
    flexDirection: "row",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});
export default Location;
