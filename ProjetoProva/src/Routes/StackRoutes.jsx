import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/StackScreens/WelcomeScreen';
import CadastroScreen from '../screens/StackScreens/CadastroScreen';
import LoginScreen from '../screens/StackScreens/LoginScreen';
import AppDrawer from './AppDrawer'
import DescricaoFilme from '../screens/DrawerScreens/DescricaoFilme';

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
        name="AppDrawer" 
        component={AppDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="DescricaoFilme"
      component={DescricaoFilme}
      options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
