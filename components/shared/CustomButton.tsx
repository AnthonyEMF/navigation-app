import { Text, Pressable, PressableProps, View } from "react-native";
import React from "react";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contain" | "text-only";
  className?: string;
}

const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      onPress,
      onLongPress,
      variant = "contain",
      className,
    }: Props,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    }[color];

    const txtColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color];

    // Componente de botón con solo texto
    if (variant == "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`${txtColor} text-center font-work-medium`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    // Componente de botón con contenedor
    return (
      <Pressable
        className={`${btnColor} ${className} p-3 rounded-md active:opacity-90`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-work-medium">{children}</Text>
      </Pressable>
    );
  }
);

export default CustomButton;
