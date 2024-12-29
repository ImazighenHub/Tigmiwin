import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/home/search-bar";
import PropertyCard from "@/components/property-card";
import { FeaturedSection } from "@/components/home/featured";
import {
  HomeHeader,
  RecommendationFilter,
  RecommendationHeader,
} from "@/components/home";
import { properties } from "@/data";
import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <PropertyCard
            id={item.id}
            title={item.title}
            location={item.location}
            image={item.image}
            price={item.price}
            rating={item.rating}
            isFavorite={item.isFavorite}
            onPress={item.onPress}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 justify-around my-2 mx-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <HomeHeader user={user} />
            <SearchBar />
            <View className="mb-5">
              <FeaturedSection />
              <RecommendationHeader />
              <RecommendationFilter />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
