import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EditCircleIcon, LogoutIcon, ProfileIcon } from "@/components/icons";
import SettingsItem from "@/components/settings-item";
import { settings } from "@/constants/settings";
import cn from "@/utils/cn";
import { COLOR_DANGER, COLOR_PRIMARY_300 } from "@/constants/colors";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "You have been logged out successfully");
      refetch();
    } else {
      Alert.alert("Error", "Something went wrong. Please try again later");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold">Profile</Text>
          <ProfileIcon width={24} height={24} />
        </View>
        <View className="flex-row justify-center mt-5">
          <View className="flex-col items-center relative mt-5">
            <Image
              source={{
                uri: user?.avatar,
              }}
              className={"w-44 h-44 rounded-full relative"}
            />
            <TouchableOpacity className="absolute bottom-11 right-[64px] transform translate-x-1/2 rounded-full bg-white">
              <EditCircleIcon width={42} height={42} fill={COLOR_PRIMARY_300} />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik-medium text-black-300 mt-3">
              {user?.name}
              {user?.name}
              {user?.name}
              {user?.name}
            </Text>
          </View>
        </View>

        {settings.map((group, index) => (
          <View
            key={index}
            className={cn(
              "flex-col",
              index === 0 && "mt-10",
              index > 0 && "mt-5 border-t pt-5 border-primary-200",
            )}
          >
            {group.map((setting, index) => (
              <SettingsItem key={index} showArrow {...setting} />
            ))}
          </View>
        ))}
        <View className="flex-col mt-5 border-t pt-5 border-primary-200">
          <SettingsItem
            title="Logout"
            icon={LogoutIcon}
            onPress={handleLogout}
            textClassName="text-danger"
            iconColor={COLOR_DANGER}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
