import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import CadastroScreen from '../screens/CadastroScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';



const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen" 
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen" 
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CadastroScreen" 
        component={CadastroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Catálogo" 
        component={HomeScreen}
      
        
      />
    </Stack.Navigator>
  );
}
