import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { SelectionBar } from "../../components/topicSet";

const GameSession = () => {
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
          <SelectionBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameSession;

const styles = StyleSheet.create({});
