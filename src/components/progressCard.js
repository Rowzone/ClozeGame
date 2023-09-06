import { StyleSheet, View, Text, Image } from "react-native";
// import Ellipse34 from "../../assets/vectors/Ellipse34.svg";
import profileImage from "../assets/images/userProfile.png";
// import theme from "../../theme";

export function ProgressCard() {
  return (
    <View style={styles.root}>
      <Image source={profileImage} />
      <View style={styles.frame13} />
      <Text style={styles.hydeRowland}>Hyde Rowland</Text>
      <View style={styles.progressBar}>
        <View style={styles.rectangle7} />
        <View style={styles.rectangle8} />
      </View>
      <Text style={styles.statsHere}>stats here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 400,
    height: 115,
    paddingTop: 29,
    paddingBottom: 11,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 20,
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 10,
  },
  ellipse34: {
    width: 60,
    height: 57,
    flexShrink: 0,
    borderRadius: 60,
  },
  hydeRowland: {
    width: 215,
    color: "#5E34AB",
    // fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: "normal",
  },
  rectangle7: {
    width: 300,
    height: 10,
    flexShrink: 0,
    backgroundColor: "#F1F1F1",
    borderRadius: 50,
  },
  rectangle8: {
    width: 15,
    height: 10,
    flexShrink: 0,
    backgroundColor: "#7F45CA",
    borderRadius: 50,
  },
  frame13: {
    height: 75,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 6,
  },
  progressBar: {
    width: 300,
    height: 10,
    flexShrink: 0,
  },
  statsHere: {
    width: 140,
    color: "#764CAB",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    // lineHeight: "normal",
  },
});
