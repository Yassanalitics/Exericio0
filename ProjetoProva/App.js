import React from 'react';
import { StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/Routes/StackRoutes';

export default function App() {
  return (
   <NavigationContainer>
   <StatusBar backgroundColor="#1c245c" barStyle="light-content" />
    <StackRoutes/>
   </NavigationContainer>
  );
}

