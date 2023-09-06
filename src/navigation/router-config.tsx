import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SafeAreaView } from "react-native";
import Login from "../screens/login";
import Signup from "../screens/signup";
import Onboarding from "../screens/appInfo";
import Home from "../screens/Home";
import Menu from "../screens/menu";
import GameSession from "../screens/gameSession";
import GameModel from "../screens/gameModel";
import GameSet1 from "../screens/gameStage1";

const Stack = createNativeStackNavigator();
const RouterConfig = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnBoarding"
      >
        <Stack.Screen name="OnBoarding" component={Onboarding} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterConfig;
