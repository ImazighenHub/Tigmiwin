import React, { ReactNode } from "react";
import { SvgProps } from "react-native-svg/src/elements/Svg";
import { Text, TouchableOpacity, View } from "react-native";
import cn from "@/utils/cn";
import AngleRightIcon from "@/components/_icons/angle-right";

interface SettingsItemProps {
  icon: (props: SvgProps) => ReactNode;
  title: string;
  onPress?: () => void;
  textClassName?: string;
  showArrow?: boolean;
  iconColor?: string;
}

function SettingsItem({
  icon,
  title,
  onPress,
  textClassName,
  iconColor, // TODO: find a way to use className for color instead
  showArrow,
}: SettingsItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center justify-between py-3"
    >
      <View className={cn("flex-row items-center gap-3", textClassName)}>
        {icon({
          width: 24,
          height: 24,
          fill: iconColor,
        })}
        <Text
          className={cn(
            "text-lg font-rubik-medium text-black-300",
            textClassName,
          )}
        >
          {title}
        </Text>
      </View>
      {showArrow && (
        <AngleRightIcon width={24} height={24} className="text-black-300" />
      )}
    </TouchableOpacity>
  );
}

export default SettingsItem;
