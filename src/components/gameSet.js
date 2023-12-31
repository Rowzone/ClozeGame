import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import gameImage from "../assets/images/gameImage.png";

/*
export function GameSet() {
  return (
    <View style={styles.root}>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.game}>Game</Text>
        <Image
          source={gameImage}
          style={{ width: 360, height: 187 }}
          contentFit="cover"
        />
      </View>
      <View style={styles.frame19}>
        <Text style={styles.startSession}>Start Session</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 400,
    height: 342,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginVertical: 10,
  },
  startSession: {
    color: "#FFF",
    // fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "900",
    // lineHeight: "normal",
  },
  frame19: {
    width: 359,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#764CAB",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  game: {
    width: 157,
    color: "#5E34AB",
    // fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: "normal",
  },
  frame14: {
    width: 360,
    height: 187,
    flexShrink: 0,
    borderRadius: 7,
  },
});
*/

export function GameSet() {
  return (
    <View className="flex flex-col items-start justify-center gap-1 bg-white rounded-2xl w-96 h-70 m-2 p-3">
      <Text className="text-primary text-2xl font-extrabold">Game</Text>
      <Image source={gameImage} className="mb-2" />
      <TouchableOpacity className="bg-violet-800 rounded-lg w-full p-3 ">
        <Text className="text-center font-bold text-lg text-white">
          Start Session
        </Text>
      </TouchableOpacity>
    </View>
  );
}
