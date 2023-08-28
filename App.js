import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import Onboarding from "./src/screens/appInfo";
import Home from "./src/screens/Home";
import Menu from "./src/screens/menu";
import GameSession from "./src/screens/gameSession";
import GameModel from "./src/screens/gameModel";
import GameSet1 from "./src/screens/gameStage1";
import GameSet2 from "./src/screens/gameStage2";
export default function App() {
  return (
    <NavigationContainer>
      {/* <GestureHandlerRootView> */}
      <View style={styles.container}>
        <GameSet2 />
        <StatusBar style="auto" />
      </View>
      {/* </GestureHandlerRootView> */}
    </NavigationContainer>
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
