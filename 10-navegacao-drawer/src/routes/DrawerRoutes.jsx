import React from "react";
import home from '../screens/home'
import profile from '../screens/profile'
import user from '../screens/user'
import config from '../screens/config'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()
export default function DrawerRoutes(){
    return(
       <Drawer.Navigator>
        <Drawer.Screen 
        name='Home'
        component={home}
        options={{
            title: "Inicio",
            drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/>
        }}        
        />
        <Drawer.Screen name='User' component={user}/>
        <Drawer.Screen name='Profile' component={profile}/>
        <Drawer.Screen name='Config' component={config}/>
       </Drawer.Navigator> 
    )
}