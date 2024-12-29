import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeartFilledIcon, StarFilledIcon } from "../../_icons";
import { Property } from "@/types";

interface FeaturedCardProps extends Property {
  onPress?: () => void;
}

function FeaturedCard({
  title,
  location,
  image,
  price,
  rating,
  isFavorite,
  onPress,
}: FeaturedCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-col items-start rounded-2xl w-60 h-80 relative overflow-hidden"
    >
      <ImageBackground
        source={image}
        className="w-full h-full absolute"
        imageClassName="rounded-2xl size-full"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        className="absolute inset-0"
      />
      <View className="flex-row bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <StarFilledIcon width="12" height="12" />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          {rating.toFixed(1)}
        </Text>
      </View>
      <View className="flex flex-col items-start absolute inset-x-5 bottom-3">
        <Text
          className="text-xl font-rubik-extrabold text-white "
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text className="font-rubik text-base text-white">{location}</Text>
        <Text className="text-xl font-rubik-extrabold text-white mt-1">
          ${price.toFixed(2)}
        </Text>
      </View>
      {isFavorite && (
        <View className="absolute bottom-5 right-5">
          <HeartFilledIcon width="20" height="20" />
        </View>
      )}
    </TouchableOpacity>
  );
}

export default FeaturedCard;
