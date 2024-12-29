import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FeaturedList from "./featured-list";
import { featured } from "@/data";

const FeaturedSection = () => {
  return (
    <View>
      <View className="flex-row items-center justify-between mt-5">
        <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
        <TouchableOpacity>
          <Text className="text-base font-rubik-bold text-primary-300">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FeaturedList data={featured} />
    </View>
  );
};
export default FeaturedSection;
