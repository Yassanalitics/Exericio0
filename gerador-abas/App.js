
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MegaSenaScreen from './screens/MegaSenaScreen';
import JogoDoBichoScreen from './screens/JogoDoBichoScreen';

const NavegadorAbas = createBottomTabNavigator();

function pegarIcone(nomeRota, cor, tamanho) {
  if (nomeRota === 'Mega Sena') {
    return <Icon name="dice-multiple" size={tamanho} color={cor} />;
  } else {
    return <Icon name="paw" size={tamanho} color={cor} />;
  }
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <NavegadorAbas.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => pegarIcone(route.name, color, size),
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <NavegadorAbas.Screen name="Mega Sena" component={MegaSenaScreen} />
          <NavegadorAbas.Screen name="Jogo do Bicho" component={JogoDoBichoScreen} />
        </NavegadorAbas.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
