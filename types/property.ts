import { ImageSourcePropType } from "react-native";

export type Property = {
  id: string;
  title: string;
  location: string;
  image: ImageSourcePropType;
  price: number;
  rating: number;
  isFavorite: boolean;
};
