import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

const Index = () => {
  //return <Redirect href='/(stack)/home'/>
  //return <Redirect href='/tabs/home' />
  return <Redirect href='/drawer' />

  // return (
  //   <SafeAreaView>
  //     <View className="mx-10">
  //       <Text
  //         className="text-3xl text-center font-work-black text-secondary"
  //       >
  //         Hola Mundo
  //       </Text>
  //       <Text
  //         className="text-3xl text-center font-work-medium text-secondary-200"
  //       >
  //         Hola Mundo
  //       </Text>
  //       <Text
  //         className="text-3xl text-center font-work-light text-secondary-100"
  //       >
  //         Hola Mundo
  //       </Text>

  //       {/* Ruta hacía ProductsScreen */}
  //       <Link href='/products'>Productos</Link>

  //     </View>
  //   </SafeAreaView>
  // );
};

export default Index;
