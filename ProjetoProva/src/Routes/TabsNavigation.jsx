import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/DrawerScreens/HomeScreen';
import FilmesScreen from  '../screens/TabsScreens/FilmesScreen'
import SeriesScreen from '../screens/TabsScreens/SeriesScreens';
import PerfilScreen from '../screens/TabsScreens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Em cartaz" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" size={size} color={color} />

          ),
        }}
      />
      <Tab.Screen 
        name="Filmes" 
        component={FilmesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" size={size} color={color} />

          ),
        }}
      />
      <Tab.Screen 
        name="Series" 
        component={SeriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" size={size} color={color} />

          ),
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />

          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
