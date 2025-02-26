import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 mt-10 flex gap-2">

        {/* <Link href="/products" asChild>
          <CustomButton color="primary">Productos Link</CustomButton>
        </Link> */}

        <CustomButton color="primary" onPress={() => router.push("/tabs/(stack)/products")}>
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          variant="contain"
          onPress={() => router.push("/tabs/(stack)/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          color="tertiary"
          variant="contain"
          onPress={() => router.push("/tabs/(stack)/settings")}
        >
          Configuración
        </CustomButton>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
