import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const GameSet2 = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#F5F0FF",
      }}
    >
      <View
        style={{
          padding: 10,
          width: "100%",
          //   height: 20,
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "800" }}>
          Fill-in the spaces
        </Text>

        <View
          style={{
            width: "100%",
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <TextInput
            multiline={true}
            style={{ backgroundColor: "#fff", fontSize: 22 }}
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5E34AB",
            paddingVertical: 10,
            width: "80%",
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 22, color: "#fff" }}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GameSet2;

const styles = StyleSheet.create({});
