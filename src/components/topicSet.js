import { StyleSheet, View, Text, Image } from "react-native";
// import Ellipse41 from "../../assets/vectors/Ellipse41.svg";
// import Ellipse42 from "../../assets/vectors/Ellipse42.svg";
// import Ellipse43 from "../../assets/vectors/Ellipse43.svg";
// import Rectangle16 from "../../assets/vectors/Rectangle16.svg";
// import Rectangle17 from "../../assets/vectors/Rectangle17.svg";
// import union from "../../assets/images/union.png";
// import union2 from "../../assets/images/union2.png";
// import theme from "../../theme";

import iconOOP from "../assets/images/iconOOP.png";

export function SelectionBar() {
  return (
    <View style={styles.root}>
      <View style={styles.frame33}>
        <View style={styles.iconOop}>
          <Image source={iconOOP} />
        </View>
      </View>
      <View style={styles.frame31}>
        <View style={styles.frame29}>
          <Text style={styles.comingSoon}>Object Oriented Programming</Text>
          <Text
            style={
              styles.learnTheConceptOfOoPsUsingTheClozeMethodAndFeynmansLearningMethod
            }
          >
            Learn the concept of OOPs using the cloze method and Feynman's
            learning method.
          </Text>
        </View>
        <View style={styles.frame30}>
          <Text style={styles.programming}>Programming</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 430,
    alignItems: "flex-start",
    gap: 24,
    borderBottom: "0.4px solid rgba(168, 168, 168, 0.46)",
    backgroundColor: "#CECECE",
    flexDirection: "row",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  rectangle13: {
    width: 48,
    height: 6,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 1,
  },
  rectangle14: {
    width: 2,
    height: 38,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 2,
  },
  rectangle15: {
    width: 2,
    height: 38,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 2,
  },
  ellipse41: {
    width: 2,
    height: 2,
    flexShrink: 0,
    fill: "#FFF",
  },
  ellipse42: {
    width: 2,
    height: 2,
    flexShrink: 0,
    fill: "#FFF",
  },
  ellipse43: {
    width: 2,
    height: 2,
    flexShrink: 0,
    fill: "#FFF",
  },
  rectangle18: {
    width: 35,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
  },
  rectangle19: {
    width: 28,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
  },
  rectangle23: {
    width: 28,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
  },
  rectangle22: {
    width: 4,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
  },
  rectangle24: {
    width: 4,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
  },
  rectangle20: {
    width: 35,
    height: 2,
    flexShrink: 0,
    backgroundColor: "#2F2F2F",
    borderRadius: 5,
  },
  oop: {
    color: "#2F2F2F",
    // fontFamily: "Inter",
    fontSize: 6,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  frame33: {
    width: 85,
    height: 87,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
    backgroundColor: "#F1F1F1",
    paddingVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 10,
  },
  iconOop: {
    width: 48,
    height: 41,
    flexShrink: 0,
  },
  comingSoon: {
    width: 242,
    color: "#5E34AB",
    // fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  learnTheConceptOfOoPsUsingTheClozeMethodAndFeynmansLearningMethod: {
    width: 289,
    color: "#8A8A8A",
    // fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "500",
    // lineHeight: "normal",
  },
  frame31: {
    height: 113,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 24,
  },
  frame29: {
    width: 289,
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 9,
  },
  programming: {
    color: "#4A4A4A",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  frame30: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
  },
});
