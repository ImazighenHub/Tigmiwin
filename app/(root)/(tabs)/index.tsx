import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BellIcon from "../../../components/icons/bell";
import SearchBar from "@/components/search-bar";
import FeaturedCard from "@/components/featured-card";
import PropertyCard from "@/components/property-card";
import CategoryFilter from "@/components/category-filter";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex-row items-center justify-between mt-5">
          <View className="flex-row items-center">
            <Image className="size-12 rounded-full" />
            <View className="flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Axel
              </Text>
            </View>
          </View>
          <BellIcon width="24" height="24" />
        </View>
        <SearchBar />
        <View className="mb-5">
          <View className="flex-row items-center justify-between mt-5">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row gap-5 mt-3">
            <FeaturedCard
              title="Marialla Villa"
              location="New York, US"
              image={require("@/assets/images/house.png")}
              price={12219}
              rating={4.8}
              isFavorite
            />
            <FeaturedCard
              title="Marialla Villa"
              location="New York, US"
              image={require("@/assets/images/house.png")}
              price={12219}
              rating={4.8}
              isFavorite
            />
          </View>

          <View className="flex-row items-center justify-between mt-5">
            <Text className="text-xl font-rubik-bold text-black-300">
              Our Recommendations
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <CategoryFilter />

          <View className="flex-row gap-5 mt-3">
            <PropertyCard
              title="Marialla Villa"
              location="New York, US"
              image={require("@/assets/images/house.png")}
              price={12219}
              rating={4.8}
              isFavorite
            />
            <PropertyCard
              title="Marialla Villa"
              location="New York, US"
              image={require("@/assets/images/house.png")}
              price={12219}
              rating={4.8}
              isFavorite
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
