import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: 'indigo',
        //tabBarShowLabel: false,
        headerShown: true,
        tabBarStyle: {
          backgroundColor: 'white'
        },
        //tabBarActiveBackgroundColor: 'grey',
        //tabBarInactiveTintColor: 'white'
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
          tabBarIcon: ({color, size}) => (
            <FontAwesome name='stack-exchange' color={color} size={size} />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout