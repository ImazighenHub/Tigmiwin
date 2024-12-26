import { useGlobalContext } from "@/lib/global-provider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function AppLayout() {
  const { loading, isAuthenticated } = useGlobalContext();
  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return <Slot />;
}
