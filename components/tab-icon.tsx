import { Text, View } from "react-native";
import { SvgProps } from "react-native-svg/src/elements/Svg";
import { ReactNode } from "react";
import { COLOR_BLACK_200, COLOR_PRIMARY_300 } from "@/constants";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: (props: SvgProps) => ReactNode;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    {icon({
      width: 24,
      height: 24,
      fill: focused ? COLOR_PRIMARY_300 : COLOR_BLACK_200,
    })}
    <Text
      className={`${
        focused
          ? "text-primary-300 font-rubik-medium"
          : "text-black-200 font-rubik"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);
export default TabIcon;
