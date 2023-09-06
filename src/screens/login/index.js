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

import loginBG from "../../assets/images/loginBG.jpg";
import illus from "../../assets/images/illustration.png";

const Login = ({ navigation }) => {
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
      <ImageBackground source={loginBG} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "", padding: 20 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <SafeAreaView>
            <View className="">
              {/* view for illustration */}
              <View className="flex justify-center items-center">
                <Image className="w-80 h-80" source={illus}></Image>
              </View>

              <Text
                className="text-center font-bold"
                style={{ fontSize: 22, color: "#5E34AB" }}
              >
                Sign in
              </Text>

              {/* section for input  */}
              <View
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
                      <Text style={{ fontWeight: "300", fontSize: 15 }}>
                        Email
                      </Text>
                    </View>

                    <View
                      className="ml-3 pr-10"
                      style={{ flexDirection: "row" }}
                    >
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
                      <Text style={{ fontWeight: "300", fontSize: 15 }}>
                        Password
                      </Text>
                    </View>

                    <View
                      className="ml-3 pr-10"
                      style={{ flexDirection: "row" }}
                    >
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
                        Login
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="flex flex-row gap-x-2 justify-center items-center mt-8">
                    <Text className="font-normal text-gray-500 text-base">
                      Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={navigateToSignUp}>
                      <Text className="text-base text-primary underline">
                        Sign up
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default Login;
