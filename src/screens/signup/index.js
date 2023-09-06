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
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";

import React, { useState } from "react";

import signUpBG from "../../assets/images/signUpBG.png";
import illus from "../../assets/images/illustration.png";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    /// make request to backedn using axios

    navigation.navigate("Home");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const [fontsLoaded] = useFonts({
    Manrope: require("../../../assets/fonts/Manrope/static/Manrope-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      className=""
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={signUpBG}
        resizeMode="cover"
        style={styles.image}
      >
        <SafeAreaView className="flex justify-center items-center flex-1">
          <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "", padding: 20 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* section for input  */}
            <View
              className=""
              style={{
                justifyContent: "center",
                flex: 1,
                alignContent: "center",
                marginTop: 50,
              }}
            >
              <View className="flex gap-y-3">
                <View>
                  <View className="ml-6" style={{ marginBottom: 10 }}>
                    <Text
                      className="text-primary"
                      style={{ fontWeight: "300", fontSize: 15 }}
                    >
                      Enter your email address
                    </Text>
                  </View>

                  <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                    <TextInput
                      className="pl-3 border-primary rounded-lg"
                      placeholder="example@domain.com"
                      value={email}
                      onChangeText={(text) => {
                        setEmail(text);
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: "#E5E7EB",
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                      }}
                      keyboardType="default"
                    />
                  </View>
                </View>

                <View>
                  <View className="ml-6" style={{ marginBottom: 10 }}>
                    <Text
                      className="text-primary"
                      style={{ fontWeight: "300", fontSize: 15 }}
                    >
                      Enter your username
                    </Text>
                  </View>

                  <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                    <TextInput
                      className="pl-3 rounded-lg border-primary"
                      placeholder="Your username"
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: "#E5E7EB",
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                      }}
                      keyboardType="default"
                    />
                  </View>
                </View>

                <View>
                  <View className="ml-6" style={{ marginBottom: 10 }}>
                    <Text
                      className="text-primary"
                      style={{ fontWeight: "300", fontSize: 15 }}
                    >
                      Date of birth
                    </Text>
                  </View>

                  <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                    <TextInput
                      className="pl-3 rounded-lg border-primary"
                      placeholder="dd, mm, yyyy"
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: "#E5E7EB",
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                      }}
                      keyboardType="default"
                    />
                  </View>
                </View>
                <View>
                  <View className="ml-6" style={{ marginBottom: 10 }}>
                    <Text
                      className="text-primary"
                      style={{ fontWeight: "300", fontSize: 15 }}
                    >
                      Choose a Password
                    </Text>
                  </View>

                  <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                    <TextInput
                      className="pl-3 rounded-lg border-primary"
                      secureTextEntry={true}
                      placeholder="your password"
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: "#E5E7EB",
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                      }}
                      keyboardType="default"
                    />
                  </View>
                </View>
                <View>
                  <View className="ml-6" style={{ marginBottom: 10 }}>
                    <Text
                      className="text-primary"
                      style={{ fontWeight: "300", fontSize: 15 }}
                    >
                      Confirm password
                    </Text>
                  </View>

                  <View className="ml-3 pr-10" style={{ flexDirection: "row" }}>
                    <TextInput
                      className="pl-3 rounded-lg border-primary"
                      secureTextEntry={true}
                      placeholder="password"
                      value={password}
                      onChangeText={(text) => {
                        setPassword(text);
                      }}
                      style={{
                        borderWidth: 1,
                        borderColor: "#E5E7EB",
                        width: "100%",
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 10,
                      }}
                      keyboardType="default"
                    />
                  </View>
                </View>

                <View
                  className="px-6"
                  style={{ alignItems: "center", marginTop: 20 }}
                >
                  <TouchableOpacity
                    className="w-full mt-5 bg-primary"
                    onPress={handleSubmit}
                    style={{
                      height: 50,
                      borderRadius: 5,
                      backgroundColor: "#916DD2",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      className="font-medium"
                      style={{ fontSize: 20, color: "white" }}
                    >
                      SignUp
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row gap-x-2 justify-center items-center mt-8">
                  <Text className="font-normal text-gray-500 text-base">
                    Already have an account?
                  </Text>
                  <TouchableOpacity onPress={navigateToSignUp}>
                    <Text className="text-base text-primary underline">
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default Signup;
