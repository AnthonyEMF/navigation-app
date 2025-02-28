import { View, Text } from "react-native";
import React from "react";
import { router, Stack, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";

const StackLayout = () => {
  const navigation = useNavigation();
  const onHeaderLeftTap = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      //navigation.dispatch(StackActions.pop()); // no funciona por bug
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.openDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "indigo",
        },
        headerLeft: (({tintColor, canGoBack}) => (
          <Ionicons
          onPress={() => onHeaderLeftTap(canGoBack)}
          name={canGoBack ? "arrow-back" : "menu"}
          size={20}
          color="white"
          className="mr-2"
          />
        )),
        // Estilos del contenido
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Detalle del Producto",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Configuración",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
