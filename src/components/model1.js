import { StyleSheet, View, Text, Image } from "react-native";
// import IconBasics from "../../assets/vectors/IconBasics.svg";
// import theme from "../../theme";
export function Model1({ level, text, image }) {
  return (
    <View style={styles.root}>
      <View
        style={{
          justifyContent: "space-between",
          height: "100%",
          paddingVertical: 20,
        }}
      >
        <Text style={styles.basics}>{level}</Text>
        {/* <IconBasics /> */}
        <Text
          style={
            styles.learnTheConceptOfOoPsUsingTheClozeMethodAndFeynmansLearningMethod
          }
        >
          {text}
        </Text>
        <View style={styles.frame24}>
          <Text style={styles.$continue}>Continue</Text>
        </View>
      </View>
      <Image source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 400,
    height: 219,
    backgroundColor: "#FFF",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  basics: {
    width: 110,
    color: "#4A4A4A",
    // fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "800",
    // lineHeight: "normal",
  },
  $continue: {
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    // lineHeight: "normal",
  },
  frame24: {
    width: 175,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
    backgroundColor: "#5E34AB",
    flexDirection: "row",
    padding: 5,
    borderRadius: 7,
  },
  iconBasics: {
    width: 114.133,
    height: 86.004,
    flexShrink: 0,
  },
  learnTheConceptOfOoPsUsingTheClozeMethodAndFeynmansLearningMethod: {
    width: 201,
    color: "#8A8A8A",
    // fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    // lineHeight: "normal",
  },
});
