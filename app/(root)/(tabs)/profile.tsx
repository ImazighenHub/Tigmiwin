import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LogoutIcon, ProfileIcon } from "@/components/icons";
import SettingsItem from "@/components/settings-item";
import { settings } from "@/constants/settings";
import cn from "@/utils/cn";
import { COLOR_DANGER } from "@/constants/colors";

const Profile = () => {
  const handleLogout = () => {};

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
            <TouchableOpacity>
              <View className="flex-row items-center">
                <Text className="text-lg font-rubik-medium">Edit Profile</Text>
              </View>
            </TouchableOpacity>
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
