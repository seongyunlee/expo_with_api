import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import Welcome from "./screens/Welcome";
import Signup from "./screens/Signup";

import RootStack from "./RootStack";
export default function App() {
  return <RootStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
