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

import styles from "./styles";

import illus from "../../assets/images/illustration.png";
import signUpBG from "../../assets/images/signUpBG.png";

const Signup = () => {
  return (
    <SafeAreaView style={{ flex: 1, width: "100%", backgroundColor: "#fff" }}>
      <ImageBackground
        source={signUpBG}
        resizeMode="cover"
        style={styles.image}
      >
        <KeyboardAvoidingView
          style={{
            flex: 1,
            backgroundColor: "",
            padding: 20,
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* section for input  */}
          <View
            style={{
              flex: 1,
              // width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ width: "100%" }}>
              <Text>Enter your email address</Text>
              <TextInput style={styles.textInput} placeholder="email" />
            </View>
            <View style={{ width: "100%" }}>
              <Text>Enter your username</Text>
              <TextInput style={styles.textInput} placeholder="username" />
            </View>
            <View style={{ width: "100%" }}>
              <Text>Date of birth</Text>
              <TextInput style={styles.textInput} placeholder="date of birth" />
            </View>
            <View style={{ width: "100%" }}>
              <Text>Choose your password</Text>
              <TextInput style={styles.textInput} placeholder="password" />
            </View>
            <View style={{ width: "100%" }}>
              <Text>Confirm your password</Text>
              <TextInput
                style={styles.textInput}
                placeholder="confirm password"
              />
            </View>
            <View style={{ width: "100%" }}>
              <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={{ fontSize: 22, color: "#fff" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
