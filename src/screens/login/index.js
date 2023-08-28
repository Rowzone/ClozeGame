import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./styles";

import loginBG from "../../assets/images/loginBG.jpg";
import illus from "../../assets/images/illustration.png";

const Login = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground source={loginBG} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "", padding: 20 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView styles={styles.scrollView}>
            <View>
              {/* view for illustration */}
              <View style={{ width: "100%" }}>
                <Image source={illus}></Image>
              </View>

              {/* section for input  */}
              <View style={styles.formContainer}>
                <Text style={{ fontSize: 22, color: "#5E34AB" }}>Sign In</Text>
                <View style={{ width: "100%" }}>
                  <Text>Email</Text>
                  <TextInput style={styles.textInput} placeholder="email" />
                </View>
                <View style={{ width: "100%" }}>
                  <Text>Password</Text>
                  <TextInput style={styles.textInput} placeholder="password" />
                </View>
                <View style={{ width: "100%" }}>
                  <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={{ fontSize: 22 }}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
