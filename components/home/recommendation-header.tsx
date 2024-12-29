import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const RecommendationHeader = () => {
  return (
    <View className="flex-row items-center justify-between mt-5">
      <Text className="text-xl font-rubik-bold text-black-300">
        Our Recommendations
      </Text>
      <TouchableOpacity>
        <Text className="text-base font-rubik-bold text-primary-300">
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default RecommendationHeader;
