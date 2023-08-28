import { StyleSheet, View, Text, Image } from "react-native";
import progress1 from "../assets/images/homeProgress1.png";
import progress2 from "../assets/images/homeProgress2.png";

export function ProgressSet() {
  return (
    <View style={styles.root}>
      <Text style={styles.progress}>Progress</Text>
      <View style={{ flexDirection: "row", width: "100%", height: "100%" }}>
        <View style={styles.frame16}>
          <Image source={progress1} />
          <Text style={styles.memory}>Memory</Text>
          <Text style={styles.$20}>20%</Text>
        </View>
        <View style={styles.frame18}>
          <Image source={progress2} />
          <Text style={styles.adaptiveness}>Adaptiveness</Text>
          <Text style={styles.$5}>5%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 400,
    height: 258,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    marginVertical: 10,
  },
  progress: {
    width: 157,
    color: "#5E34AB",
    // fontFamily: 'Inter',
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: 'normal',
  },
  circleIcon: {
    width: 79,
    height: 76,
  },
  memory: {
    width: 79,
    color: "#4A4A4A",
    textAlign: "center",
    // fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: 'normal',
  },
  $20: {
    width: 79,
    color: "#5E34AB",
    textAlign: "center",
    // fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    // lineHeight: 'normal',
  },
  frame16: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  circleIcon2: {
    width: 79,
    height: 76,
  },
  adaptiveness: {
    width: 101,
    color: "#4A4A4A",
    textAlign: "center",
    // fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    // lineHeight: 'normal',
  },
  $5: {
    width: 79,
    color: "#5E34AB",
    textAlign: "center",
    // fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
    // lineHeight: 'normal',
  },
  frame18: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
});
