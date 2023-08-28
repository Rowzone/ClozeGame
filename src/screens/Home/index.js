import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React from "react";
import { ProgressCard } from "../../components/progressCard";
import { ActivitySet } from "../../components/activitySet";
import { ProgressSet } from "../../components/progressSet";
import { GameSet } from "../../components/gameSet";

import styles from "./styles";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#F0E8FF",
        // justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
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
