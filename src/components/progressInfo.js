import { StyleSheet, View, Text } from "react-native";
// import theme from "../../theme";

export function ProgressInfo() {
  return (
    <View style={styles.root}>
      <Text style={styles.objectOrientedProgramming}>
        Object Oriented Programming
      </Text>
      <Text style={styles.progress}>Progress</Text>
      <Text style={styles.outOf9Lessons}>out of 9 lessons</Text>
      <View style={styles.progressBar}>
        <View style={styles.rectangle50} />
        <View style={styles.rectangle51} />
      </View>
      <Text style={styles.$4}>4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 370,
    height: 208,
    flexShrink: 0,
    backgroundColor: "#E4D5FD",
    borderRadius: 7,
  },
  objectOrientedProgramming: {
    width: 293,
    height: 24,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "#000",
    // fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  progress: {
    width: 72,
    height: 20,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "#4B4B4B",
    // fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  outOf9Lessons: {
    width: 100,
    height: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
    flexShrink: 0,
    color: "#4B4B4B",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  rectangle50: {
    width: 293,
    height: 13,
    flexShrink: 0,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  rectangle51: {
    width: 72,
    height: 13,
    flexShrink: 0,
    backgroundColor: "#916DD2",
    borderRadius: 50,
  },
  progressBar: {
    width: 293,
    height: 13,
    flexShrink: 0,
  },
  $4: {
    width: 32,
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    color: "#3D3D3D",
    // fontFamily: "Inter",
    fontSize: 32,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: "normal",
  },
});
