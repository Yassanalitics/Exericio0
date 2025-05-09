import React from "react";
import EscudosScreen from '../screens/EscudosScreen'
import JogadoresScreen from '../screens/JogadoresScreen'
import TitulosScreens from '../screens/TitulosScreen'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()
export default function DrawerRoutes(){
    return(
       <Drawer.Navigator>
        <Drawer.Screen 
        name='Time'
        component={EscudosScreen}
        options={{
            title: "Time",
            drawerIcon: ({color, size}) => <Ionicons name='football-sharp' color={color} size={size}/>
        }}        
        />
        <Drawer.Screen 
        name='Jogadores'
        component={JogadoresScreen}
        options={{
            title: "Jogadores",
            drawerIcon: ({color, size}) => <Ionicons name='person-sharp' color={color} size={size}/>
        }}        
        />
        <Drawer.Screen 
        name='Titulos'
        component={TitulosScreens}
        options={{
            title: "Titulos",
            drawerIcon: ({color, size}) => <Ionicons name='medal-sharp' color={color} size={size}/>
        }}        
        />
        
       </Drawer.Navigator> 
    )
}