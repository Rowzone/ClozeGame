import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import { GameTextContainer } from "../../components/gameTextContainer";

const GameSet1 = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#F5F0FF" }}
    >
      <View
        style={{
          padding: 10,
          width: 2000,
          //   height: 20,
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "800" }}>Basics</Text>
      </View>
      <GameTextContainer />
    </SafeAreaView>
  );
};

export default GameSet1;

const styles = StyleSheet.create({});
