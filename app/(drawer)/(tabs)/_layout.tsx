import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // Estilos para el Header
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: 'indigo',
        },
        tabBarStyle: {
          backgroundColor: 'white'
        },
        // Estilos para el TapBar
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: '#7886C7',
        tabBarActiveTintColor: 'white',
        tabBarInactiveBackgroundColor: 'indigo',
        tabBarInactiveTintColor: 'white'
      }}
    >
      <Tabs.Screen
        name='home/index'
        options={{
          title: 'Inicio',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='home' color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name='favorites/index'
        options={{
          title: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='star' color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name='(stack)'
        options={{
          title: 'Stack',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='stack-exchange' color={color} size={size} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout