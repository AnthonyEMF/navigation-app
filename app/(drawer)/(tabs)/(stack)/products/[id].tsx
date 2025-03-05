import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import { products } from "@/store/products";

const ProductScreen = () => {

  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const product = products.find((p) => p.id === id);

  useEffect(() => {
    navigation.setOptions({
      title: product?.title ?? 'Detalle del Producto'
    })
  }, [product])

  if (!product) {
    return <Redirect href='/' />
  }

  return (
    <View className="px-5 mt-2 flex flex-1 gap-2">
      {/* <Text className="font-work-medium text-2xl text-center">{product.title}</Text> */}
      <Text className="font-work-light">{product.description}</Text>
      <Text className="font-work-medium text-center">${product.price}</Text>
    </View>
  );
};

export default ProductScreen;
