import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import { Model1 } from "../../components/model1";

import iconBasics from "../../assets/images/iconBasics.png";
import classIcon from "../../assets/images/classIcon.png";
import objectIcon from "../../assets/images/objectsIcon.png";
import dataAbsIcon from "../../assets/images/dataAbsIcon.png";
import encapsIcon from "../../assets/images/encapsulation.png";
import inHertIcon from "../../assets/images/InhertIcon.png";
import polyIcon from "../../assets/images/polyIcon.png";

const GameModel = () => {
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
          <Model1
            level={"Basic"}
            image={iconBasics}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
          <Model1
            level={"Class"}
            image={classIcon}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
          <Model1
            level={"Object"}
            image={objectIcon}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
          <Model1
            level={"Data Abstraction"}
            image={dataAbsIcon}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
          <Model1
            level={"Encapsulation"}
            image={encapsIcon}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
          <Model1
            level={"Inheritance"}
            image={inHertIcon}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
          <Model1
            level={"Polymorphism"}
            image={polyIcon}
            text={
              "Learn the concept of OOPs using the cloze method and Feynman's learning method"
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GameModel;

const styles = StyleSheet.create({});
