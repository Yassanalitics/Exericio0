import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomeScreen from '../screens/HomeScreen'
const Stack = createStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Lista de categorias",
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen
      name='ListaProdutosScreen'
      component={ListaProdutosScreen}
      options={{
        title: "Lista de produtod",
        headerTitleAlign: 'center'
      }}
    />
      <Stack.Screen
        name='ProdutoScreen'
        component={ProdutoScreen}
        options={{
          title: "Lista de categorias",
          headerTitleAlign: 'center'
        }}
      />
      

    </Stack.Navigator>
  )
}