import React, { useLayoutEffect } from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CredentialsConText } from "./components/CredentialsContext";
import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import VideoList from "./screens/VideoList";
import Mypage from "./screens/Mypage";
import TeacherProfile from "./screens/TeacherProfile";
const Stack = createStackNavigator();

const RootStack = ({ onLayout }) => {
  useLayoutEffect(() => {
    onLayout();
  }, []);
  return (
    <CredentialsConText.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: true,
              gestureEnabled: false,
            }}
          >
            <Stack.Screen
              options={{ title: "홈", headerShown: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VideoList" component={VideoList} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen
              options={{ title: "마이페이지" }}
              name="Mypage"
              component={Mypage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </CredentialsConText.Consumer>
  );
};

export default RootStack;
