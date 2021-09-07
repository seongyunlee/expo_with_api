import React, { useState, useLayoutEffect } from "react";
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { Video, AVPlaybackStatus } from "expo-av";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { Ionicons, Octicons } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  VideoBox,
  PageTitle,
  StyledInputLabel,
  RightIcon,
  StyledFormArea,
  StyledTextInput,
  StyledButton,
  ButtonText,
  TextLink,
} from "./../components/styles";

const VideoList = ({ navigation, ...data }) => {
  const [videodata, setvideodata] = useState([]);
  const [videopath, setvideopath] = useState({ uri: "" });
  const [openPlayer, setopenPlayer] = useState(false);
  const [status, setStatus] = useState({});
  const video = React.useRef(null);

  const getVideo = (values) => {
    setvideopath({ uri: values.videopath });
    console.log(values.videopath);
    setopenPlayer(true);
  };
  const getpath = (id) => {
    return "";
  };
  const renderItem = ({ item }) => {
    return (
      <VideoBox id={item.id}>
        <Formik
          initialValues={{ videopath: item.videopath, content: item.content }}
          onSubmit={(videopath, { setSubmitting }) => {
            getVideo(videopath);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <TouchableOpacity
              videopath={values.videopath}
              onPress={handleSubmit}
            >
              <StyledInputLabel>video1</StyledInputLabel>
              <StyledInputLabel>{values.content}</StyledInputLabel>
            </TouchableOpacity>
          )}
        </Formik>
      </VideoBox>
    );
  };
  useLayoutEffect(() => {
    getData();
  }, []);
  const getData = () => {
    console.log("getting data");
    const url = "http://192.168.0.183:3000/video/getList";
    axios
      .get(url)
      .then((result) => {
        const rawDATA = result.data.data;
        setvideodata(rawDATA);
      })
      .catch((err) => {
        console.log(err);
        setvideodata([]);
      });
  };
  return (
    <StyledContainer>
      <View style={styles.container}>
        <StyledInputLabel>{videopath.uri}</StyledInputLabel>
        <Video
          source={videopath}
          ref={video}
          style={styles.video}
          useNativeControls
          resizeMode="cover"
          isLooping={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>

      <InnerContainer>
        <FlatList
          style={styles.styleView}
          contentContainerStyle={styles.styleViewContent}
          data={videodata}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </InnerContainer>
    </StyledContainer>
  );
};
const styles = StyleSheet.create({
  styleView: {
    width: "100%",
    backgroundColor: "#334455",
    alignSelf: "center",
  },
  styleViewContent: {
    alignItems: "stretch",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
});

export default VideoList;
