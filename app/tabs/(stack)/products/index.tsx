import { View, Text, FlatList } from "react-native";
import React from "react";
import { products } from "@/store/products";
import { Link } from "expo-router";

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      {/* Iterar o recorrer los productos de products.ts */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-medium">{item.title}</Text>
            <Text className="font-work-light">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-medium">{item.price}</Text>
              <Link
                href={`/tabs/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver Detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
