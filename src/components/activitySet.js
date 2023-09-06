import { StyleSheet, View, Text, Image } from "react-native";
// import CircleStat3 from "../../assets/vectors/CircleStat3.svg";
// import CircleStat2 from "../../assets/vectors/CircleStat2.svg";
// import CircleStat1 from "../../assets/vectors/CircleStat1.svg";
// import theme from "../../theme";
import circleStat from "../assets/images/circleStat.png";

/** 
export function ActivitySet() {
  return (
    <View style={styles.root}>
      <Text style={styles.yourActivity}>Your Activity</Text>
      <View style={styles.frame15}>
        <Text style={styles.$5}>5</Text>
        <Text style={styles.days}>days</Text>
      </View>
      <View style={styles.metaData}>
        <View style={styles.metaData2}>
          <View style={styles.rectangle9} />
          <Text style={styles.easy}>Easy</Text>
        </View>
        <View style={styles.metaData3}>
          <View style={styles.rectangle92} />
          <Text style={styles.normal}>Normal</Text>
        </View>
        <View style={styles.metaData4}>
          <View style={styles.rectangle93} />
          <Text style={styles.hard}>Hard</Text>
        </View>
      </View>
      <View style={styles.circleStat}>
        {/* <CircleStat3 />
        <CircleStat2 />
        <CircleStat1 /> }
        <Text style={styles.$34}>34%</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  root: {
    width: 400,
    height: 187,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginVertical: 10,
  },
  yourActivity: {
    width: 157,
    color: "#5E34AB",
    // fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: "normal",
  },
  $5: {
    color: "#5E34AB",
    // fontFamily: "Inter",
    fontSize: 64,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: "normal",
  },
  days: {
    color: "#764CAB",
    // fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "normal",
  },
  frame15: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
  },
  rectangle9: {
    width: 16,
    height: 8,
    flexShrink: 0,
    backgroundColor: "#D1BAFC",
    borderRadius: 20,
  },
  easy: {
    color: "#4A4A4A",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  metaData: {
    display: "inline-flex",
    alignItems: "center",
    gap: 15,
    flexDirection: "row",
  },
  metaData2: {
    width: 50,
    height: 15,
  },
  rectangle92: {
    width: 16,
    height: 8,
    flexShrink: 0,
    backgroundColor: "#9562F1",
    borderRadius: 20,
  },
  normal: {
    color: "#4A4A4A",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  metaData3: {
    width: 64,
    height: 15,
  },
  rectangle93: {
    width: 16,
    height: 8,
    flexShrink: 0,
    backgroundColor: "#5E34AB",
    borderRadius: 20,
  },
  hard: {
    color: "#4A4A4A",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  metaData4: {
    width: 50,
    height: 15,
  },
  circleStat3: {
    width: 130,
    height: 124,
    flexShrink: 0,
  },
  circleStat2: {
    width: 98,
    height: 94,
    flexShrink: 0,
  },
  circleStat1: {
    width: 70,
    height: 68,
    flexShrink: 0,
  },
  $34: {
    color: "#5A00CC",
    // fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  circleStat: {
    width: 130,
    height: 124,
    flexShrink: 0,
  },
});
*/

export function ActivitySet() {
  return (
    <View className="flex flex-col items-start bg-white w-96 h-42 rounded-2xl m-2 p-4">
      <Text className="text-primary text-2xl font-extrabold ">
        Your Activity
      </Text>
      <View className="flex flex-row items-start mt-4 p-4">
        <Text className="text-primary font-extrabold text-6xl ml-4">5</Text>
        <Text className="text-sm p-2">days</Text>
        <Image source={circleStat} className="ml-16 pt-3 bottom-7" />
      </View>
      <View className="flex flex-row items-start">
        <View className="h-2 w-4 rounded-lg mt-1 bg-gray-300" />
        <Text className="text-center"> Easy </Text>
        <View className="ml-3 flex flex-row">
          <View className="h-2 w-4 rounded-lg mt-1 bg-primary" />
          <Text className="text-center ml-1">Normal</Text>
        </View>
        <View className="ml-3 flex flex-row">
          <View className="h-2 w-4 rounded-lg mt-1 bg-violet-950" />
          <Text className="text-center ml-1">Hard</Text>
        </View>
      </View>
    </View>
  );
}
