import { FlatList } from "react-native";
import React from "react";
import FeaturedCard from "./featured-card";
import { Property } from "@/types";

interface FeaturedListProps {
  data: Property[];
}

const FeaturedList = ({ data }: FeaturedListProps) => {
  const handlePress = () => {
    console.log("Pressed");
  };
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <FeaturedCard
          id={item.id}
          title={item.title}
          location={item.location}
          image={item.image}
          price={item.price}
          rating={item.rating}
          isFavorite={item.isFavorite}
          onPress={handlePress}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="flex gap-5 mt-5"
    />
  );
};
export default FeaturedList;
