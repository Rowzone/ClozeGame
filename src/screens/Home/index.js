import { SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { ProgressCard } from "../../components/progressCard";
import { ActivitySet } from "../../components/activitySet";
import { ProgressSet } from "../../components/progressSet";
import { GameSet } from "../../components/gameSet";

import styles from "./styles";
import mobileMenu from "../../assets/images/menuButton.png";

const Home = () => {
  return (
    <SafeAreaView
      /*style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#F0E8FF",
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
      */
      className="flex-1, p-4 bg-[#F0E8FF] justify-center items-center w-full"
    >
      <ScrollView className="mt-5" showsVerticalScrollIndicator={false}>
        <View className="flex px-3">
          <Image className="w-7 h-7" source={mobileMenu}></Image>
        </View>
        <View>
          <ProgressCard />
          <ActivitySet />
          <ProgressSet />
          <GameSet />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
