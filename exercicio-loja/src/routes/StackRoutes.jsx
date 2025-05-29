import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ListaProdutosScreen from "../screens/ListaProdutosScreen";
import ProdutoScreen from "../screens/ProdutoScreen";
//screens

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator>
        <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
            title:'loja',
            headerTitleAlign:'center'
            
        }}
        />
        <Stack.Screen
        name='ListaProdutosScreen'
        component={ListaProdutosScreen}
        options={{
            title:'Produtos',
            headerTitleAlign:'center'
            
        }}
        />
        <Stack.Screen
        name='ProdutoScreen'
        component={ProdutoScreen}
        options={{
            title:'Detalhes deste  produto',
            headerTitleAlign:'center'
            
        }}
        />
    </Stack.Navigator>
    );
    

}