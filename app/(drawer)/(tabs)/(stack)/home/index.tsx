import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Link, router, useNavigation } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation(); 

  const onToggleTap = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 mt-10 flex gap-2">

        {/* <Link href="/products" asChild>
          <CustomButton color="primary">Productos Link</CustomButton>
        </Link> */}

        <CustomButton color="primary" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>

        <CustomButton
          color="secondary"
          variant="contain"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          color="tertiary"
          variant="contain"
          onPress={() => router.push("/settings")}
        >
          Configuración
        </CustomButton>

        <CustomButton onPress={onToggleTap}>
          Abrir Menú
        </CustomButton>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
