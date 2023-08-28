import { StyleSheet, View, Text } from "react-native";

export function GameTextContainer() {
  return (
    <View style={styles.root}>
      <View style={styles.frame22}>
        <Text
          style={
            styles.thisModeIsLessDifficultWith15MinutesToReadAndCommitTheMaterialIntoMemoryItAlsoHasAFewWordsRemovedForYouToFillInQuestionsAskedInThisModeAreFairlySimpleAndEasyToAnswer
          }
        >
          This mode is less difficult, with 15 minutes to read and commit the
          material into memory. It also has a few words removed for you to
          fill-in. Questions asked in this mode are fairly simple and easy to
          answer.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 48,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  thisModeIsLessDifficultWith15MinutesToReadAndCommitTheMaterialIntoMemoryItAlsoHasAFewWordsRemovedForYouToFillInQuestionsAskedInThisModeAreFairlySimpleAndEasyToAnswer:
    {
      width: 370,
      height: 382,
      color: "#6F6F6F",
      //   fontFamily: "Inter",
      fontSize: 16,
      fontStyle: "normal",
      fontWeight: "600",
      //   lineHeight: "normal",
    },
  frame22: {
    width: 400,
    paddingTop: 42,
    paddingBottom: 97,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
