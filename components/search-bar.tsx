import { TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { SearchIcon, SettingsIcon } from "@/components/icons";
import { COLOR_BLACK_200 } from "@/constants";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback(
    (query: string) => router.setParams({ query }),
    500,
  );

  const handleSearch = (query: string) => {
    setSearch(query);
    debouncedSearch(query);
  };
  return (
    <View className="flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2">
      <View className="flex-1 flex-row items-center justify-start z-50">
        <SearchIcon height={20} width={20} fill={COLOR_BLACK_200} />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity>
        <SettingsIcon height={20} width={20} fill={COLOR_BLACK_200} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;
