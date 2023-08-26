import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { styles } from "./styles";

import loginBG from "../../assets/images/loginBG.jpg";
import illus from "../../assets/images/illustration.png";

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}>
      <ImageBackground source={loginBG} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView styles={styles.ScrollView}>
            <View>
              <View>
                <Image source={illus}></Image>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
