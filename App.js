import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { Fragment } from "react";
import { AppNavigator } from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

import GameSet2 from "./src/screens/gameStage2";

export default function App() {
  return (
    <Fragment>
      <AppNavigator />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
