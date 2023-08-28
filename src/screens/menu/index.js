import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { ProgressInfo } from "../../components/progressInfo";

const Menu = () => {
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
          <ProgressInfo />
        </View>
      </ScrollView>
      <Text>Menu</Text>
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({});
