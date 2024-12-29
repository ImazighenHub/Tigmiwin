import { Image, Text, View } from "react-native";
import React from "react";
import { BellIcon } from "@/components/_icons";

interface HomeHeaderProps {
  user: User | null;
}

const HomeHeader = ({ user }: HomeHeaderProps) => {
  return (
    <View className="flex-row items-center justify-between mt-5">
      <View className="flex-row items-center">
        <Image
          source={{ uri: user?.avatar }}
          className="size-12 rounded-full"
        />
        <View className="flex-col items-start ml-2 justify-center">
          <Text className="text-xs font-rubik text-black-100">
            Good morning
          </Text>
          <Text className="text-base font-rubik-medium text-black-300">
            {user?.name}
          </Text>
        </View>
      </View>
      <BellIcon width="24" height="24" />
    </View>
  );
};
export default HomeHeader;
