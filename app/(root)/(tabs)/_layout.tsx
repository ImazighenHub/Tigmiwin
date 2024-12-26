import React from "react";
import { Tabs } from "expo-router";
import { COLOR_PRIMARY_200 } from "@/constants/colors";
import TabIcon from "@/components/tab-icon";
import HomeIcon from "@/components/icons/home";
import ProfileIcon from "@/components/icons/profile";
import ExploreIcon from "@/components/icons/explore";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: COLOR_PRIMARY_200,
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={HomeIcon} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={ExploreIcon} title="Explore" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={ProfileIcon} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabsLayout;
