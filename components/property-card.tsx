import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeartFilledIcon, StarFilledIcon } from "@/components/icons";

interface PropertyCardProps {
  title: string;
  location: string;
  image: ImageSourcePropType;
  price: number;
  rating: number;
  isFavorite: boolean;
  onPress?: () => void;
}

function PropertyCard({
  title,
  location,
  image,
  price,
  rating,
  isFavorite,
  onPress,
}: PropertyCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-48 bg-white rounded-lg shadow-lg shadow-black-100/90 overflow-hidden relative px-3 py-4"
    >
      {/* Image Section */}
      <View className="relative w-full h-36">
        <ImageBackground
          source={image}
          className="w-full h-full absolute"
          imageClassName="rounded-xl size-full"
        />
        {/* Star Rating */}
        <View className="flex-row items-center absolute px-2 top-3 right-3 bg-white/90 p-1 rounded-full z-50">
          <StarFilledIcon width="10" height="10" />
          <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
            {rating.toFixed(1)}
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View className="mt-3">
        {/* Title */}
        <Text className="text-xl font-rubik-bold text-black-300">{title}</Text>
        {/* Location */}
        <Text className="font-rubik text-xs text-black-200">{location}</Text>
        {/* Price and Favorite */}
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-base font-rubik-bold text-primary-300">
            ${price.toFixed(2)}
          </Text>
          {isFavorite && <HeartFilledIcon width="20" height="20" />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PropertyCard;
