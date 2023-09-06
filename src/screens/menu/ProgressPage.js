import { Text, View, TouchableOpacity, Image } from "react-native";
import backButton from "../../assets/images/backButton.png";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProgressPage({ navigation }) {
  return (
    <SafeAreaView className="flex bg-[#F0E8FF] items-start min-h-screen">
      <View className="flex flex-row items-start gap-3 p-4 mt-3">
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Image source={backButton} />
        </TouchableOpacity>
        <Text className="text-3xl font-bold bottom-1 "> Your Progress</Text>
      </View>
      <View className="flex flex-row gap-3 items-start">
        <TouchableOpacity className="bg-violet-300 rounded-full left-8 w-18 p-4 ">
          <Text className="text-center font-bold text-md text-primary ">
            Learning
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-violet-100 border-2 border-primary rounded-full left-8 w-18 py-3 px-4 ">
          <Text className="text-center font-bold text-md text-primary">
            Rewards
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
