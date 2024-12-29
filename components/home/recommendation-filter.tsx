import { ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import cn from "@/utils/cn";
import { categories } from "@/data";

type Category = {
  id: number;
  name: string;
};

const RecommendationFilter = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories.find((category) => category.name === params.filter) ||
      categories[0],
  );

  const handleCategoryChange = (category: Category) => {
    if (selectedCategory.id === category.id) {
      setSelectedCategory(categories[0]);
      router.setParams({ filter: "All" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category.name });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3"
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          className={cn("flex-col items-start mr-4 px-4 py-2 rounded-full", {
            "bg-primary-300": selectedCategory.id === category.id,
            "bg-primary-100 border border-primary-200":
              selectedCategory.id !== category.id,
          })}
          onPress={() => handleCategoryChange(category)}
        >
          <Text
            className={cn("text-sm", {
              "text-white font-rubik-bold mt-0.5":
                selectedCategory.id === category.id,
              "text-black-300 font-rubik": selectedCategory.id !== category.id,
            })}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
export default RecommendationFilter;
