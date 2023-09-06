import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles";

import Carousel, { Pagination } from "react-native-snap-carousel";

import CarouselCardItem, {
  SLIDER_WIDTH,
  ITEM_WIDTH,
  ITEM_HEIGHT,
  SLIDER_HEIGHT,
} from "../../components/CarouselCardItem";

import bg from "../../assets/images/signUpBG.png";

import data from "../../constants/data";

const Onboarding = ({ navigation }) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const [showBtn, setShowBtn] = React.useState(false);
  return (
    <View className="flex-1">
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <SafeAreaView className="">
          <Text className="text-center">Text goes here</Text>
          <View className="" style={styles.container}>
            <Carousel
              layout="tinder"
              layoutCardOffset={9}
              ref={isCarousel}
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              itemHeight={ITEM_HEIGHT}
              sliderHeight={SLIDER_HEIGHT}
              inactiveSlideShift={0}
              onSnapToItem={(index) => {
                setIndex(index);
                if (index === data.length - 1) {
                  setShowBtn(true);
                } else {
                  setShowBtn(false);
                }
              }}
              useScrollView={true}
            />
            <Pagination
              dotsLength={data.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: "rgba(0, 0, 0, 0.92)",
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />

            {showBtn && (
              <View
                className="px-6"
                style={{ alignItems: "center", marginTop: 20 }}
              >
                <TouchableOpacity
                  className="w-80"
                  onPress={() => navigation.navigate("SignIn")}
                  style={{
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: "#916DD2",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20, color: "white" }}>Next</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
