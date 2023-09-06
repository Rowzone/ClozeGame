import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
//import { ProgressInfo } from "../../components/progressInfo";
import brainIcon from "../../assets/images/brainIcon.png";
import brainProgress from "../../assets/images/brainProgress.png";
import Vector from "../../assets/images/Vector.png";
import signOut from "../../assets/images/signOut.png";

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView
      className="flex bg-[#F0E8FF] items-start w-full min-h-screen"
      /*
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#F0E8FF",
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      */
    >
      <View className="flex-grow">
        <View className="flex flex-col items-start p-5">
          <Image source={brainIcon} />
        </View>
        <View className="flex flex-row items-start p-5 w-full gap-64">
          <Text className="text-violet-900 font-bold ">Close Game</Text>
          <Text className="text-primary">Back</Text>
        </View>
        <Text className="text-xs text-primary ml-5 bottom-3">stats here</Text>
        <View className="flex flex-row items-start w-full ml-3 mt-8 p-5">
          <Image source={brainProgress} />
          <TouchableOpacity onPress={() => navigation.navigate("ProgressPage")}>
            <Text className="text-primary font-bold text-2xl mt-2 left-7">
              Your Progress
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-start w-full ml-5 p-5">
          <Image source={Vector} />
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Text className="text-primary text-2xl font-bold left-7">
              Settings
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-start left-8 mb-8 gap-5 mt-auto">
          <Image source={signOut} />
          <Text className="text-primary top-2 font-bold text-xl">Sign Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
