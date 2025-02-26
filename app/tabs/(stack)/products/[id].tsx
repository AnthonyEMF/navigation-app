import { View, Text } from "react-native";
import React from "react";
import { Redirect, useLocalSearchParams } from "expo-router";
import { products } from "@/store/products";

const ProductScreen = () => {

  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href='/home' />
  }

  return (
    <View className="px-5 mt-2 flex flex-1 gap-2">
      <Text className="font-work-medium text-2xl text-center">{product.title}</Text>
      <Text>{product.description}</Text>
      <Text className="font-work-medium">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
